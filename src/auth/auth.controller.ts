import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  @HttpCode(200)
  @Post('reg')
  async register(@Body() dto: AuthDto) {}

  @HttpCode(200)
  @Post('log')
  async login(@Body() dto: AuthDto) {}
}
