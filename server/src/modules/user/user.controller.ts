import { Body, Controller, Get, Patch } from '@nestjs/common';

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

  @Get('get')
  async get(@User('sup') userId: string) {
    return this.userService.get(userId);
  }

  @Patch('update')
  async update(@User('sup') userId: string, @Body() dto: UpdateUserDto) {
    await this.userService.update(userId, dto);
    return { message: 'User has been successfully updated' };
  }
}
