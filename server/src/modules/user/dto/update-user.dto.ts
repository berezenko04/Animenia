import { IsOptional, IsString, Length, Matches } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @Length(2, 32, {
    message: 'The first name must be between 2 and 32 characters',
  })
  firstName?: string;

  @IsOptional()
  @Length(2, 32, {
    message: 'The last name must be between 2 and 32 characters',
  })
  lastName?: string;

  @IsOptional()
  @IsString({ message: 'Twitter username must be a string' })
  @Matches(/^@/, { message: 'Twitter username must start with @' })
  @Length(3, 30, {
    message: 'Twitter username must be between 3 and 30 characters',
  })
  twitterUsername?: string;

  @IsOptional()
  @IsString({ message: 'Telegram username must be a string' })
  @Matches(/^@/, { message: 'Telegram username must start with @' })
  @Length(3, 30, {
    message: 'Telegram username must be between 3 and 30 characters',
  })
  telegramUsername?: string;

  @IsOptional()
  @IsString({ message: 'Instagram username must be a string' })
  @Matches(/^@/, { message: 'Instagram username must start with @' })
  @Length(3, 30, {
    message: 'Instagram username must be between 3 and 30 characters',
  })
  instagramUsername?: string;
}
