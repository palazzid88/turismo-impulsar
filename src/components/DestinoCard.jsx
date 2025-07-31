// src/components/DestinoCard.jsx
import Link from 'next/link';

export default function DestinoCard({ destino }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={destino.imagenUrl}
        alt={destino.titulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{destino.titulo}</h2>
        <p className="text-gray-700 text-sm mb-4">{destino.descripcion}</p>
        <Link
          href={`/destinos/${destino.slug.current}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Ver más →
        </Link>
      </div>
    </div>
  );
}
