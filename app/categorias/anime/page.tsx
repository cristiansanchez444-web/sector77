export default function AnimePage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      {/* TITULO */}
      <section className="mb-12">

        <h1 className="text-5xl font-black text-purple-500 mb-4">
          Anime
        </h1>

        <p className="text-gray-400 text-lg">
          Stickers y packs premium de anime y manga.
        </p>

      </section>

      {/* PRODUCTOS */}
      <section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* PRODUCTO 1 */}
          <a
            href="/producto/naruto-pack"
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300 block"
          >

            <div className="h-64 bg-zinc-800 flex items-center justify-center">
              <span className="text-gray-500">
                Imagen
              </span>
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-black mb-2">
                Naruto Pack
              </h2>

              <p className="text-gray-400 mb-4">
                Stickers holográficos premium.
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

          </a>

          {/* PRODUCTO 2 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300">

            <div className="h-64 bg-zinc-800 flex items-center justify-center">
              <span className="text-gray-500">
                Imagen
              </span>
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-black mb-2">
                One Piece Pack
              </h2>

              <p className="text-gray-400 mb-4">
                Diseños premium exclusivos.
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

          {/* PRODUCTO 3 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition duration-300">

            <div className="h-64 bg-zinc-800 flex items-center justify-center">
              <span className="text-gray-500">
                Imagen
              </span>
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-black mb-2">
                Dragon Ball Pack
              </h2>

              <p className="text-gray-400 mb-4">
                Stickers premium para notebooks y mates.
              </p>

              <div className="flex items-center justify-between">

                <span className="text-2xl font-black text-purple-400">
                  $3900
                </span>

                <button className="bg-purple-600 hover:bg-purple-500 transition px-5 py-2 rounded-xl font-bold">
                  Comprar
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}