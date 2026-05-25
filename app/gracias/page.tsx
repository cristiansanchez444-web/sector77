export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-10">

      <h1 className="text-6xl font-black text-purple-500 mb-6">
        ¡Gracias!
      </h1>

      <p className="text-gray-400 text-xl mb-10">
        Tu compra fue realizada correctamente.
      </p>

      <a
        href="/"
        className="bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-xl font-bold"
      >
        Volver al Inicio
      </a>

    </main>
  );
}