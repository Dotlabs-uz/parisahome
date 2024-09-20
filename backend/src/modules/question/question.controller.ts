import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto, TUpdateQuestionDto } from './dto/create-question.dto';
import { IsAdminGuard } from 'src/guards/isAdmin.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("Questions")
@Controller('question')
export class QuestionController {
	constructor(private readonly questionService: QuestionService) { }

	@ApiBearerAuth()
    @UseGuards(IsAdminGuard)
    @Post()
	create(@Body() createQuestionDto: CreateQuestionDto) {
		return this.questionService.create(createQuestionDto);
	}

	@Get()
	findAll() {
		return this.questionService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.questionService.findOne(+id);
	}

	@ApiBearerAuth()
    @UseGuards(IsAdminGuard)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateQuestionDto: TUpdateQuestionDto) {
		return this.questionService.update(+id, updateQuestionDto);
	}

	@ApiBearerAuth()
    @UseGuards(IsAdminGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.questionService.remove(+id);
	}
}
