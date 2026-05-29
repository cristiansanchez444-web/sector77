export default function CategoriasPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-black text-purple-500 mb-4">
        Categorías
      </h1>

      <p className="text-gray-400 mb-10">
        Elegí una categoría o buscá un producto directamente.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

        {/* ANIME */}
        <a
          href="/categorias/anime"
          className="bg-zinc-900 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 cursor-pointer block"
        >
          <h2 className="text-2xl font-black text-purple-400 mb-2">
            Anime
          </h2>

          <p className="text-gray-400">
            Stickers y packs de anime.
          </p>
        </a>

        {/* GAMING */}
        <a
          href="/categorias/gaming"
          className="bg-zinc-900 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 cursor-pointer block"
        >
          <h2 className="text-2xl font-black text-purple-400 mb-2">
            Gaming
          </h2>

          <p className="text-gray-400">
            Stickers y packs de videojuegos.
          </p>
        </a>

        {/* AUTOS */}
        <a
          href="/categorias/autos"
          className="bg-zinc-900 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 cursor-pointer block"
        >
          <h2 className="text-2xl font-black text-purple-400 mb-2">
            Autos
          </h2>

          <p className="text-gray-400">
            Stickers y packs de autos.
          </p>
        </a>

        {/* PERSONALIZADOS */}
        <a
          href="/categorias/personalizados"
          className="bg-zinc-900 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 cursor-pointer block"
        >
          <h2 className="text-2xl font-black text-purple-400 mb-2">
            Personalizados
          </h2>

          <p className="text-gray-400">
            Stickers y packs personalizados.
          </p>
        </a>

      </div>

    </main>
  );
}