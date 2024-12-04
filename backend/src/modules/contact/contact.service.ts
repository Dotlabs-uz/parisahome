import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

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
      host: 'smtp-mail.parisahome.com',
      secureConnection: false,
      port: 587,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true,
        ciphers: 'TLSv1.2',
      }
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
