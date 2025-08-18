import { UseGuards } from '@nestjs/common';

// guards
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

export const Auth = () => UseGuards(JwtAuthGuard);
