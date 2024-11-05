import "./globals.css";

export const metadata = {
  title: "گیاه لند | Giah Land",
  description: "خرید راحت گیاه، با گیاه لند! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
