import { getDestinos } from '@/lib/queries';
import DestinoCard from '@/components/DestinoCard';





export default async function RegionPage({ params }) {
  const { slug } = params;
  const destinos = await getDestinos();

console.log('Slug recibido:', slug);
console.log(
  'Regiones en destinos:',
  destinos.map((d) => d.region)
);

  const destinosFiltrados = destinos.filter(
    (destino) => destino.region?.toLowerCase() === slug.toLowerCase()
  );

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Región: {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </h1>

      {destinosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {destinosFiltrados.map((destino) => (
            <DestinoCard key={destino._id} destino={destino} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No hay destinos en esta región.</p>
      )}
    </main>
  );
}
