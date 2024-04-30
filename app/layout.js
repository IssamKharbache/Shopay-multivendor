import { Poppins, Urbanist } from "next/font/google";
import "../styles/main.scss";
import { Providers } from "@/context/Providers";

const inter = Urbanist({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Shopay",
  description: "Best Multivendor ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
