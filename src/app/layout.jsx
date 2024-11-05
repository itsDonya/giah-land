import "./globals.css";

// components
import Header from "@/components/Header";

export const metadata = {
  title: "گیاه لند | Giah Land",
  description: "خرید راحت گیاه، با گیاه لند! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
