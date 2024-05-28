import "./globals.css";


export const metadata = {
  title: "Portfolio",
  description: "Portfolio / CV, everything about Benny Thomsen (searching for a job)",
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
