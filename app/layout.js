import { Poppins } from "next/font/google";
import "../styles/main.scss";
import { Providers } from "@/context/Providers";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Shopay",
  description: "Ecommerce multivendor services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <Providers>
          <NextTopLoader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
