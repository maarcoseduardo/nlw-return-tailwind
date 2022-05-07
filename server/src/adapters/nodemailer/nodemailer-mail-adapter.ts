import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "14f2d9784e646a",
    pass: "c3e7b7f3d5f8d5",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feegdet <oi@feedget.com>",
      to: "Marcos Eduardo <maarcosefb0@gmail.com>",
      subject,
      html: body,
    });
  }
}
