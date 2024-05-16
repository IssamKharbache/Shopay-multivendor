import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = ({
  name = "",
  redirectUrl = "",
  linkText = "",
  description = "",
  previewText = "",
  buttonTitle = "",
}) => (
  <Html>
    <Head />
    <Preview>{previewText}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://utfs.io/f/b69393bd-05f1-4f36-ab27-9bc5ce6c53c4-4251ki.png"
          width={315}
          height={69}
          alt="Shopay"
          style={image}
          className="my-0 mx-auto"
        />

        <Text style={title}>{linkText}</Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong style={{ color: "#6E9EE7" }}>{name}</strong>!
          </Text>
          <Text style={text}>{description}</Text>

          <Button href={redirectUrl} style={button}>
            {buttonTitle}
          </Button>
        </Section>
        <Text style={links}>
          <Link style={link}>Contact support</Link>
        </Text>

        <Text style={footer}>Shopay @issamkharbache2024</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.5,
  textAlign: "center",
  paddingTop: "20px",
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center",
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left",
};

const button = {
  fontSize: "18px",
  backgroundColor: "#6E9EE7",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
  marginTop: "20px",
};

const links = {
  textAlign: "center",
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "60px",
};

const image = {
  margin: "auto",
};
