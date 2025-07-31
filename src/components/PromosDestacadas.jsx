'use client';

import DestinoCard from './DestinoCard';

export default function PromocionesDestacadas({ destinos }) {
  const promociones = destinos.filter((d) => d.enPromocion);

  if (promociones.length === 0) return null;

  return (
    <section className="px-6 py-10 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-800">🌟 Promociones Destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {promociones.map((destino) => (
            <DestinoCard key={destino._id} destino={destino} />
          ))}
        </div>
      </div>
    </section>
  );
}
