
import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ApiTags } from '@nestjs/swagger';
import { ContactDto } from './dto/contact.dto';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Post()
    async submitContactForm(@Body() body: ContactDto) {
        const { name, email, message, telNumber } = body;

        const subject = `Новая заявка от ${name}`;
        const text = `Имя: ${name}\nНомер телефона: ${telNumber}\nEmail: ${email}\nСообщение: ${message}`;

        try {
            await this.contactService.sendMail(subject, text);
        } catch (error) {
            return { message: 'Ошибка при отправке заявки', error };
        }
        return { message: 'Заявка успешно отправлена!' };
    }
}
