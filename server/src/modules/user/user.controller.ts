import { Body, Controller, Get, Patch, Post } from '@nestjs/common';

// services
import { UserService } from './user.service';

// dto
import { UpdateUserDto } from './dto/update-user.dto';

// decorators
import { User } from 'src/common/decorators/user.decorator';
import { Auth } from 'src/modules/auth/decorators/auth.decorator';

@Controller('users')
@Auth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async get(@User() userId: string) {
    return this.userService.get(userId);
  }

  @Post('set-avatar')
  async setAvatar(@User() userId: string, @Body('image') fileBase64: string) {
    await this.userService.setAvatar(userId, fileBase64);
    return { message: 'Avatar has been successfully updated', success: true };
  }

  @Patch()
  async update(@User() userId: string, @Body() dto: UpdateUserDto) {
    await this.userService.update(userId, dto);
    return { message: 'User has been successfully updated', success: true };
  }
}
