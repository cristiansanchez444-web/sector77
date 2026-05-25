"use client";

import { useState } from "react";
import Link from "next/link";
import CartButton from "./CartButton";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">

      {/* BOTON */}
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl font-black text-purple-500"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* MENU */}
      {open && (
        <div className="absolute top-20 right-4 bg-zinc-900 border border-purple-500/20 rounded-2xl p-6 flex flex-col gap-4 min-w-[220px] shadow-[0_0_30px_rgba(168,85,247,0.25)] z-50">

          <Link
            href="/"
            className="hover:text-purple-400 transition"
            onClick={() => setOpen(false)}
          >
            Inicio
          </Link>

          <Link
            href="/categorias"
            className="hover:text-purple-400 transition"
            onClick={() => setOpen(false)}
          >
            Categorías
          </Link>

          <Link
            href="#"
            className="hover:text-purple-400 transition"
            onClick={() => setOpen(false)}
          >
            Packs
          </Link>

          <Link
            href="#"
            className="hover:text-purple-400 transition"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>

          <CartButton />

        </div>
      )}

    </div>
  );
}