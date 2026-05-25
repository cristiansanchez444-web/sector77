import "./globals.css";
import Image from "next/image";
import { CartProvider } from "@/context/CartContext";
import CartButton from "@/components/CartButton";

export const metadata = {
  title: "Sector 77",
  description: "Sticker Premium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">

  <CartProvider>

        {/* NAVBAR */}
        <header className="w-full border-b border-purple-500/20 backdrop-blur-md">

          <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

            <a href="/" className="flex items-center gap-3">

              <Image
                src="/logo.png"
                alt="Sector 77"
                width={60}
                height={60}
                className="rounded-full"
              />

              <div>
                <h1 className="text-2xl font-black text-purple-500">
                  Sector 77
                </h1>

                <p className="text-sm text-gray-400">
                  Sticker Premium
                </p>
              </div>

            </a>

            <nav className="flex gap-4 md:gap-8 text-xs md:text-sm font-semibold flex-wrap">

              <a href="/" className="hover:text-purple-400 transition">
                Inicio
              </a>

              <a href="/categorias" className="hover:text-purple-400 transition">
                Categorías
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                Packs
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                Contacto
              </a>

              <CartButton />

            </nav>

          </div>

        </header>

        {/* CONTENIDO */}
        {children}

        {/* FOOTER */}
        <footer className="border-t border-purple-500/20 py-10 px-6">

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h4 className="text-2xl font-black text-purple-500">
                Sector 77
              </h4>

              <p className="text-gray-400">
                Stickers premium y personalizados.
              </p>
            </div>

            <div className="flex gap-6 text-gray-400 font-semibold">

              <a href="#" className="hover:text-purple-400 transition">
                Instagram
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                WhatsApp
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                Contacto
              </a>

            </div>

          </div>

        </footer>
  </CartProvider>
      </body>
    </html>
  );
}