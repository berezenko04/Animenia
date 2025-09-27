import { IsUUID, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsUUID()
  token: string;

  @MinLength(8, { message: 'The password must contain at least 8 characters' })
  password: string;
}
