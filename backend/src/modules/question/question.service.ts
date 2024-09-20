import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionDto, TUpdateQuestionDto } from './dto/create-question.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {

	constructor(@InjectModel(Question) private questionModel: typeof Question) { }

	async create(createQuestionDto: CreateQuestionDto) {
		try {
			return await this.questionModel.create(createQuestionDto)
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}

	async findAll() {
		try {
			return await this.questionModel.findAll()
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}

	async findOne(id: number) {
		try {
			return await this.questionModel.findOne({ where: { id } })
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}

	async update(id: number, updateQuestionDto: TUpdateQuestionDto) {
		try {
			await this.questionModel.update(updateQuestionDto, { where: { id } })
		} catch (e) {
			throw new BadRequestException(e.message);
		}

		return { message: "Question was update" }
	}

	async remove(id: number) {
		try {
			await this.questionModel.destroy({ where: { id } })
		} catch (e) {
			throw new BadRequestException(e.message);
		}

		return { message: "Question was deleted" }
	}
}
