// contact.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ApiTags } from '@nestjs/swagger';
import { ContactDto } from './dto/contact.dto';

@ApiTags("Contact")
@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Post()
    async submitContactForm(@Body() body: ContactDto) {
        const { name, email, message } = body;

        // Формируем письмо для отправки
        const subject = `Новая заявка от ${name}`;
        const text = `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

        try {
            // Отправляем письмо на вашу почту
            await this.contactService.sendMail(process.env.EMAIL_USER, subject, text);
            return { message: 'Заявка успешно отправлена!' };
        } catch (error) {
            return { message: 'Ошибка при отправке заявки', error };
        }
    }
}
