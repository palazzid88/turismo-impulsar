// app/region/[slug]/page.js
import { getDestinosPorRegion } from '@/lib/queries';
import DestinoCard from '@/components/DestinoCard';

export default async function RegionPage({ params }) {
  const { slug } = params;
  const region = slug.charAt(0).toUpperCase() + slug.slice(1); // capitaliza para matchear con el schema
  const destinos = await getDestinosPorRegion(region);

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Destinos en {region}</h1>
      {destinos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {destinos.map((destino) => (
            <DestinoCard key={destino._id} destino={destino} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No se encontraron destinos en esta región.</p>
      )}
    </main>
  );
}
