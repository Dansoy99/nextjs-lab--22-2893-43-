import "./globals.css";
import Link from "next/link";
import { CartProvider } from "@/lib/cart-context";

export const metadata = {
  title: "Next.js Lab Project",
  description: "Learning Next.js Component Patterns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <nav className="bg-black text-white p-4 flex justify-between">
            <h1 className="font-bold">Nathaniel Dev</h1>

            <div className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
            </div>
          </nav>

          <main className="p-6">{children}</main>

          <footer className="bg-gray-200 text-center p-4">
            © {new Date().getFullYear()} Nathaniel Alvarez
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}