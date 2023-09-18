import { env } from "process";
import { MailService, SendMailOptions } from "../IMailService";
import { Transporter, createTransport } from "nodemailer";

export class NodeMailerService implements MailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: env.MAIL_HOST,
      port: env.MAIL_PORT ? parseInt(env.MAIL_PORT) : undefined,
      secure: false,
      auth: {
        user: env.MAIL_USER,
        pass: env.MAIL_PASS,
      },
    });
  }

  async send(options: SendMailOptions): Promise<void> {
    await this.transporter.sendMail(options);
  }
}
