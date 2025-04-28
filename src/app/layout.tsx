import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type { ReactNode } from "react";
import ThemeProvider from "./components/theme";
import "@mantine/core/styles.layer.css";

const roboto = Roboto({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Profile website for Bryan Laporte",
  title: "Bryan Laporte | Profile",
};

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" {...mantineHtmlProps} className={roboto.className}>
      <head>
        <ColorSchemeScript
          defaultColorScheme="auto"
          nonce="8IBTHwOdqNKAWeKl7plt8g=="
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
