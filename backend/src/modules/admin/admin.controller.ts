import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminsDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post('signin')
  async adminsSignin(@Body() body: AdminsDto) {
    return this.adminService.signin(body);
  }
}
