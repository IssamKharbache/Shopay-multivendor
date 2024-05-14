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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const sendEmail = ({
  email,
  token,
  userId,
  name,
  linkText,
  description,
  previewText,
}) => {
  const redirectUrl = `${baseUrl}/onboarding/${userId}/?token=${token}`;
  const emailHtml = render(
    <EmailTemplate
      name={name}
      redirectUrl={redirectUrl}
      linkText={linkText}
      description={description}
      previewText={previewText}
    />
  );
  transport.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Shopay email verification",
    html: emailHtml,
  });
};
