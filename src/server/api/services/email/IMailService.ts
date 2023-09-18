export type SendMailOptions = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export interface MailService {
  send(options: SendMailOptions): Promise<void>;
}
