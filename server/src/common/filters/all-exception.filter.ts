import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let error = 'Internal Server Error';
    let message = 'An unexpected error occurred';
    let details: Record<string, any> | undefined;

    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse();
      message = typeof exceptionResponse === 'string' ? exceptionResponse : (exceptionResponse as any)?.message || message;
      error = (exceptionResponse as any)?.error || exception.name || error;
      details = typeof exceptionResponse === 'object' && exceptionResponse !== null && !Array.isArray(exceptionResponse) ? { ...exceptionResponse } : undefined;
      if (details) delete details.message;
      if (details) delete details.error; 
    } else if (exception instanceof Error) {
      message = exception.message;
      error = exception.name;
    }

    const responseBody = {
      timestamp: new Date().toISOString(),
      status,
      error,
      message,
      ...(details && Object.keys(details).length > 0 ? { details } : {}),
    };

    response.status(status).json(responseBody);
  }
}