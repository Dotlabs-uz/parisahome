import { Controller, Post, Body, Patch, UseGuards, Param, Delete, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminsDto } from './dto/create-admin.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/guards/isAdmin.guard';
import { Roles } from 'src/guards/roles.decorator';

@ApiTags("Admin")
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post('signin')
  async adminsSignin(@Body() body: AdminsDto) {
    return this.adminService.signin(body);
  }

  // @ApiBearerAuth()
  // @UseGuards(IsAdminGuard)
  // @Roles('superAdmin')
  @Post('create')
  async createAdmin(@Body() body: AdminsDto) {
    return this.adminService.register(body);
  }

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
  @Roles('superAdmin')
  @Get()
  async getAdmins() {
    return this.adminService.get();
  }

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
  @Roles('superAdmin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: Partial<AdminsDto>) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
  @Roles('superAdmin')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
