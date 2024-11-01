import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/guards/isAdmin.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/multer.option';
import { Machine, MachineUpdate } from 'src/common/swagger.types';
import { Roles } from 'src/guards/roles.decorator';

@ApiTags("Machines")
@Controller('machines')
export class MachinesController {
	constructor(private readonly machinesService: MachinesService) { }

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles("admin", "superAdmin")
	@ApiBody({
		schema: {
			type: 'object',
			properties: Machine,
		},
	})
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(FileInterceptor('image', multerOptions))
	@Post()
	async create(@Body() body: CreateMachineDto, @UploadedFile() file: Express.Multer.File) {
		return await this.machinesService.create(body, file);
	}

	@Get()
	async get(@Query() query: any) {
		return await this.machinesService.get(query);
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		return await this.machinesService.getCurrent(+id);
	}

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles("admin", "superAdmin")
	@ApiParam({ name: 'id', required: true })
	@UseInterceptors(FileInterceptor('image', multerOptions))
	@ApiBody({
		schema: {
			type: 'object',
			properties: MachineUpdate,
		},
	})
	@ApiConsumes('multipart/form-data')
	@Patch(':id')
	async patch(@Body() body: any, @Param('id') id: number, @UploadedFile() file: any) {
		return await this.machinesService.update(id, body, file);
	}

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles("admin", "superAdmin")
	@ApiParam({ name: 'id', required: true })
	@Delete(':id')
	async delete(@Param('id') id: number) {
		return await this.machinesService.delete(id);
	}
}
