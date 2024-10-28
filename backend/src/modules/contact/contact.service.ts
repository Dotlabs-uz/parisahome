import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
	private transporter;

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: 'parisahome.com',
			port: 587,
			secure: false,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});
	}

	async sendMail(to: string, subject: string, text: string) {
		try {
			const result = await this.transporter.sendMail({
				from: process.env.EMAIL_USER,
				to,
				subject,
				text,
			});
			console.log('Письмо отправлено:', result);
			return result;
		} catch (error) {
			console.error('Ошибка при отправке письма:', error);
			throw error;
		}
	}
}
