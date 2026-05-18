import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

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
                Stickers Premium
              </p>
            </div>

          </a>

          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#" className="hover:text-purple-400 transition">
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
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <Image
          src="/logo.png"
          alt="Sector 77"
          width={260}
          height={260}
          className="mb-8"
        />

        <h2 className="text-5xl md:text-7xl font-black mb-4">
          STICKERS
          <span className="text-purple-500"> PREMIUM</span>
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg">
          Diseños únicos, holográficos y personalizados.
        </p>

        <button className="mt-10 bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-xl font-bold text-lg">
          Ver Categorías
        </button>

      </section>
{/* CATEGORÍAS */}
<section className="max-w-7xl mx-auto px-6 pb-24">

  <h3 className="text-4xl font-black mb-10">
    Categorías
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* CARD */}
    <div className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500 transition cursor-pointer">

      <h4 className="text-2xl font-bold mb-2 text-purple-400">
        Anime
      </h4>

      <p className="text-gray-400">
        Stickers de anime y manga.
      </p>

    </div>

    {/* CARD */}
    <div className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500 transition cursor-pointer">

      <h4 className="text-2xl font-bold mb-2 text-purple-400">
        Gaming
      </h4>

      <p className="text-gray-400">
        Diseños gamer y retro.
      </p>

    </div>

    {/* CARD */}
    <div className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500 transition cursor-pointer">

      <h4 className="text-2xl font-bold mb-2 text-purple-400">
        Autos
      </h4>

      <p className="text-gray-400">
        Stickers para autos y motos.
      </p>

    </div>

    {/* CARD */}
    <div className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500 transition cursor-pointer">

      <h4 className="text-2xl font-bold mb-2 text-purple-400">
        Personalizados
      </h4>

      <p className="text-gray-400">
        Diseños personalizados únicos.
      </p>

    </div>

  </div>

</section>

{/* PRODUCTOS */}
<section className="max-w-7xl mx-auto px-6 pb-24">

  <h3 className="text-4xl font-black mb-10">
    Destacados
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* PRODUCTO */}
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300">

      <div className="h-64 bg-zinc-800 flex items-center justify-center">
        <span className="text-gray-500">
          Imagen Sticker
        </span>
      </div>

      <div className="p-6">

        <h4 className="text-2xl font-bold mb-2">
          Pack Anime
        </h4>

        <p className="text-gray-400 mb-4">
          Stickers premium holográficos.
        </p>

        <div className="flex items-center justify-between">

          <span className="text-2xl font-black text-purple-400">
            $4500
          </span>

          <button className="bg-purple-600 hover:bg-purple-500 transition px-5 py-2 rounded-xl font-bold">
            Comprar
          </button>

        </div>

      </div>

    </div>

    {/* PRODUCTO */}
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300">

      <div className="h-64 bg-zinc-800 flex items-center justify-center">
        <span className="text-gray-500">
          Imagen Sticker
        </span>
      </div>

      <div className="p-6">

        <h4 className="text-2xl font-bold mb-2">
          Gaming Pack
        </h4>

        <p className="text-gray-400 mb-4">
          Diseños gamer exclusivos.
        </p>

        <div className="flex items-center justify-between">

          <span className="text-2xl font-black text-purple-400">
            $5200
          </span>

          <button className="bg-purple-600 hover:bg-purple-500 transition px-5 py-2 rounded-xl font-bold">
            Comprar
          </button>

        </div>

      </div>

    </div>

    {/* PRODUCTO */}
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300">

      <div className="h-64 bg-zinc-800 flex items-center justify-center">
        <span className="text-gray-500">
          Imagen Sticker
        </span>
      </div>

      <div className="p-6">

        <h4 className="text-2xl font-bold mb-2">
          Stickers Auto
        </h4>

        <p className="text-gray-400 mb-4">
          Diseños para autos y motos.
        </p>

        <div className="flex items-center justify-between">

          <span className="text-2xl font-black text-purple-400">
            $3800
          </span>

          <button className="bg-purple-600 hover:bg-purple-500 transition px-5 py-2 rounded-xl font-bold">
            Comprar
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
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
    </main>
  );
  
}