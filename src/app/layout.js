import Footer from "@/components/Footer";
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400&display=swap"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
