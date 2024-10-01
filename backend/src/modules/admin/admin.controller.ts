import { Controller, Post, Body, Patch, UseGuards, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminsDto } from './dto/create-admin.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/guards/isAdmin.guard';

@ApiTags("Admin")
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post('signin')
  async adminsSignin(@Body() body: AdminsDto) {
    return this.adminService.signin(body);
  }

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto:  Partial<AdminsDto>) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Post('register')
  async adminsRegister(@Body() body: AdminsDto) {
    return this.adminService.register(body);
  }
}
