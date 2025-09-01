import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// services
import { PrismaService } from 'src/prisma/prisma.service';

// dto
import { UpdateUserDto } from './dto/update-user.dto';
import axios from 'axios';

@Injectable()
export class UserService {
  private readonly imgbbKey: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    this.imgbbKey = this.configService.get<string>('IMGBB_API_KEY')!;
  }

  async get(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
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
    await this.get(id);

    await this.prisma.user.update({
      where: { id },
      data: dto,
    });
  }

  private async uploadImageToImgBB(fileBase64: string) {
    if (!this.imgbbKey) throw new Error('API Key is not set');

    if (fileBase64.startsWith('data:')) {
      fileBase64 = fileBase64.split(',')[1];
    }

    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${this.imgbbKey}`,
      new URLSearchParams({ image: fileBase64 }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );

    return data.data.url;
  }

  async setAvatar(userId: string, fileBase64: string): Promise<void> {
    const url = await this.uploadImageToImgBB(fileBase64);

    if (!url)
      throw new InternalServerErrorException(
        'Failed to upload avatar to Imgbb',
      );

    await this.prisma.user.update({
      where: { id: userId },
      data: { avatar: url },
    });
  }
}
