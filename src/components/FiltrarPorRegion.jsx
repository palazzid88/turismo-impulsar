// components/FiltrarPorRegion.js
'use client';
import { useRouter } from 'next/navigation';

const regiones = ['Noroeste', 'Noreste', 'Cuyo', 'Patagonia', 'Centro'];

export default function FiltrarPorRegion() {
  const router = useRouter();

  const handleClick = (region) => {
    const slug = region.toLowerCase(); // puede normalizarse más si tenés acentos
    router.push(`/region/${slug}`);
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-semibold text-center mb-4">Filtrar por región</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {regiones.map((region) => (
          <button
            key={region}
            onClick={() => handleClick(region)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md transition"
          >
            {region}
          </button>
        ))}
      </div>
    </section>
  );
}
