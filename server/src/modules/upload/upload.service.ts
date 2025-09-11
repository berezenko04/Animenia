import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadService {
  private readonly imgbbKey: string;
  
    constructor(
      private readonly configService: ConfigService,
    ) {
        this.imgbbKey = this.configService.get<string>('IMGBB_API_KEY')!;
    }

  async uploadImage(fileBase64: string) {
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
}