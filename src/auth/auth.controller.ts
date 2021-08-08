import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @HttpCode(201)
  @Post('reg')
  async register(@Body() dto: AuthDto) {}

  @HttpCode(200)
  @Post('log')
  async login(@Body() dto: AuthDto) {}
}
