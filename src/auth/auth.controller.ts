import { Body, Controller, Post } from '@nestjs/common';
import { AuthService, ResponseToken } from './auth.service';
import { LoginDto, SignUpDto } from './auth.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<ResponseToken> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<ResponseToken> {
    return this.authService.login(loginDto);
  }
}
