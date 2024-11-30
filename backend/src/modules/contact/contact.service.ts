import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

// @Injectable()
// export class ContactService {
// 	private transporter;

// 	constructor() {
// 		this.transporter = nodemailer.createTransport({
// 			host: 'parisahome.com',
// 			port: 587,
// 			secure: false,
// 			auth: {
// 				user: process.env.EMAIL_USER,
// 				pass: process.env.EMAIL_PASS,
// 			},
// 		});
// 	}

// 	async sendMail(subject: string, text: string) {
// 		try {
// 			const result = await this.transporter.sendMail({
// 				from: process.env.EMAIL_USER,
// 				to:process.env.EMAIL_USER,
// 				subject,
// 				text,
// 			});
// 			console.log('Письмо отправлено:', result);
// 			return result;
// 		} catch (error) {
// 			console.error('Ошибка при отправке письма:', error);
// 			throw error;
// 		}
// 	}
// }

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private readonly transporter;

  constructor() {
    const mailConfig = this.getMailConfig();
    this.transporter = nodemailer.createTransport(mailConfig);
  }

  private getMailConfig() {
    const { EMAIL_USER, EMAIL_PASS } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS) {
      this.logger.error('Email configuration is missing');
      throw new Error('Missing email credentials');
    }

    return {
      host: 'parisahome.com',
      port: 587,
      secure: false, // Используется TLS, поэтому `secure` = false
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    };
  }

  async sendMail(subject: string, text: string): Promise<any> {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject,
        text,
      };

      const result = await this.transporter.sendMail(mailOptions);

      this.logger.log('Email sent successfully', { result });
      return result;
    } catch (error) {
      this.logger.error('Failed to send email', error.stack);
      throw error;
    }
  }
}
