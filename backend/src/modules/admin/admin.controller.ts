import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminsDto } from './dto/create-admin.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Admin")
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post('signin')
  async adminsSignin(@Body() body: AdminsDto) {
    return this.adminService.signin(body);
  }

  @Post('register')
  async adminsRegister(@Body() body: AdminsDto) {
    return this.adminService.register(body);
  }
}
