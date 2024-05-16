import nodemailer from "nodemailer";

import { render } from "@react-email/render";
import EmailTemplate from "@/components/emails";
const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASS,
  },
});

export const sendEmail = ({
  redirectUrl,
  email,
  name,
  linkText,
  description,
  previewText,
  subject,
  buttonTitle,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const emailHtml = render(
    <EmailTemplate
      name={name}
      redirectUrl={`${baseUrl}/${redirectUrl}`}
      linkText={linkText}
      description={description}
      previewText={previewText}
      buttonTitle={buttonTitle}
    />
  );
  transport.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    html: emailHtml,
  });
};
