import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UserDto } from './app.dto';

@Controller()
@ApiTags("App Users")
@ApiBearerAuth()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Nham Bay nv';
  }

  @Post()
  insertData(@Body() userDto: UserDto): UserDto {
    return userDto;
  }
}
