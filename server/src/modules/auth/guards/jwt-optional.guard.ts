import {
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// interfaces
import { AuthRequest } from '../interfaces/auth-optional-request.interface';

@Injectable()
export class OptionalJwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const token = request.cookies?.accessToken;

    if (!token) {
        request.user = null;
        return true;
    }

    try {
      const payload = this.jwtService.verify(token);
      request.user = payload; 
    } catch {
      request.user = null;  
    }

    return true;
  }
}
