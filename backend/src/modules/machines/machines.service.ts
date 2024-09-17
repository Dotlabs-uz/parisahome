import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Machine } from './entities/machine.entity';
import { ImagesService } from '../images/images.service';

@Injectable()
export class MachinesService {

	constructor(@InjectModel(Machine) private machineModel: typeof Machine, private imagesService: ImagesService) { }

	async create(body: any, file: any) {
		try {
			const machine = await this.machineModel.create(body);

			await this.imagesService.uploadImage(machine.dataValues.id, file, "machineId")

			return this.machineModel.findByPk(machine.dataValues.id, { include: { all: true } });

		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}

	async get(query: any) {
		const machines = await this.machineModel.findAll({ where: query, include: { all: true } });

		return { data: machines };
	}

	async getCurrent(params: any) {
		const machines = await this.machineModel.findOne({ where: params, include: { all: true } });

		return machines;
	}

	async update(id: number, updateMachineDto: any, file: Express.Multer.File) {
		try {
			const resMachine = await this.machineModel.findByPk(id, { include: { all: true } });
			if (!resMachine) {
				throw new BadRequestException('Machine not found');
			}

			await this.machineModel.update(updateMachineDto, { where: { id } });

			if (file) {

				await this.imagesService.deleteImages(resMachine.dataValues.id, "machineId");

				await this.imagesService.uploadImage(resMachine.dataValues.id, file, 'machineId');
			}

			return this.machineModel.findByPk(id, { include: { all: true } });
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}

	async delete(id: any) {
		try {
			const resMachine = await this.machineModel.findByPk(id, { include: { all: true } });

			if (!resMachine) {
				throw new BadRequestException('Machine not found');
			}
			await this.imagesService.deleteImages(resMachine.dataValues.id, "machineId");
			
			await this.machineModel.destroy({ where: { id: id } });
			
		} catch (e) {
			throw new BadRequestException(e.message);
		}

		return { message: 'machine was deleted' };
	}
}
