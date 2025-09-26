import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadService {
  private readonly imgbbKey: string;

  constructor(private readonly configService: ConfigService) {
    this.imgbbKey = this.configService.get<string>('IMGBB_API_KEY')!;
  }

  async uploadImage(fileBase64: string) {
    if (!this.imgbbKey) throw new Error('API Key is not set');

    if (fileBase64.startsWith('data:')) {
      const [meta, data] = fileBase64.split(',');
      if (!meta.startsWith('data:image/')) {
        throw new BadRequestException('Only image uploads are allowed');
      }
      fileBase64 = data;
    }

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${this.imgbbKey}`,
        new URLSearchParams({ image: fileBase64 }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
      );

      if (!data?.data?.url) {
        throw new InternalServerErrorException('Image upload service error');
      }

      return data.data.url;
    } catch (err: any) {
      const message =
        err?.response?.data?.error?.message || err?.message || 'Upload failed';
      throw new InternalServerErrorException(message);
    }
  }
}
