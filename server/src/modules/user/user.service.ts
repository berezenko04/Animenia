import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

// services
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from '../upload/upload.service';

// dto
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly uploadService: UploadService
  ) {}

  async get(where: {id?: string, email?: string}) {
    const user = await this.prisma.user.findFirst({
      where,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        avatarUrl: true,
        twitterUsername: true,
        telegramUsername: true,
        instagramUsername: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User is not found');
    }

    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise<void> {
    await this.get({id});

    await this.prisma.user.update({
      where: { id },
      data: dto,
    });
  }

  async setAvatar(userId: string, fileBase64: string): Promise<void> {
    const url = await this.uploadService.uploadImage(fileBase64);

    if (!url)
      throw new InternalServerErrorException(
        'Failed to upload avatar to Imgbb',
      );

    await this.prisma.user.update({
      where: { id: userId },
      data: { avatarUrl: url },
    });
  }
}
