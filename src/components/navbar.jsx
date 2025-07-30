// src/components/Navbar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // iconos responsivos (podés instalar `lucide-react` si no lo tenés)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Mi Agencia
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú en escritorio */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Inicio
          </Link>
          <Link href="/destinos" className="hover:text-blue-600">
            Destinos
          </Link>
          <Link href="/contacto" className="hover:text-blue-600">
            Contacto
          </Link>
        </div>
      </div>

      {/* Menú desplegable en mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
            Inicio
          </Link>
          <Link href="/destinos" className="block py-2 text-gray-700 hover:text-blue-600">
            Destinos
          </Link>
          <Link href="/contacto" className="block py-2 text-gray-700 hover:text-blue-600">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
