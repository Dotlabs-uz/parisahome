import { BadRequestException, Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { AdminsDto } from './dto/create-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './entities/admin.entity';
import { AuthService } from 'src/common/auth/auth.service';

@Injectable()
export class AdminService {

	constructor(
		@InjectModel(Admin) private adminModel: typeof Admin,
		private authService: AuthService
	) { }


	async get() {
		const admins = await this.adminModel.findAll({ where: { role: "admin" } })
		return admins
	}

	async signin(body: AdminsDto) {
		const resAdmin:any = await this.adminModel.findOne({ where: { login: body.login } });

		if (!resAdmin?.dataValues) {
			throw new BadRequestException('Invalid login or password');
		}

		const isCorrectPassword = await this.authService.comparePassword(body.password, resAdmin.dataValues.password);

		if (!isCorrectPassword) {
			throw new BadRequestException('Invalid password');
		}

		const token = await this.authService.generateAccessToken({ id: resAdmin.dataValues.id, role: resAdmin.dataValues.role });

		return {
			accessToken: token,
			role: resAdmin.dataValues.role
		};
	}

	async update(id: number, updateAdminDto: Partial<AdminsDto>) {
		const resAdmin = await this.adminModel.findOne({ where: { id } });

		if (!resAdmin?.dataValues) {
			throw new NotFoundException();
		}

		if (updateAdminDto.password) {
			const hashedPassword = await this.authService.hashPassword(updateAdminDto.password);
			updateAdminDto.password = hashedPassword;
		}

		return await this.adminModel.update(updateAdminDto, { where: { id } });
	}

	async register(body: AdminsDto) {
		try {
			const hashedPassword = await this.authService.hashPassword(body.password);
			body.password = hashedPassword;

			const resAdmin = await this.adminModel.create(body);

			return resAdmin;
		} catch (error) {
			throw new BadRequestException(error.message)
		}
	}

	async remove(id: number) {
		const admin = await this.adminModel.findOne({ where: { id } });

		if (!admin) {
			throw new NotFoundException('Admin not found');
		}
		if (admin.role === "superAdmin") throw new BadRequestException('Нельзя удалять супер админа!');

		await this.adminModel.destroy({ where: { id } });
		return { message: 'Admin deleted successfully' };
	}
}
