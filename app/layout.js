import "./globals.css";

export const metadata = {
  title: "Weframe Tech",
  description: "Round 2 assignment by Tushar Bhatt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
