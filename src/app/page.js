// src/app/page.js
import Link from 'next/link';
import { getDestinos } from '@/lib/queries';
import Banner from '@/components/banner';

export default async function Home() {
  const destinos = await getDestinos();

  return (
    <main>
      <Banner
        imageUrl="/banner.jpg"
        title="Explorá el mundo con nosotros"
        subtitle="Los mejores destinos al mejor precio"
      />

      <section className="px-6 py-10">
  <h1 className="text-3xl font-bold mb-6 text-center">Destinos turísticos</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {destinos.map((destino) => (
      <div
        key={destino._id}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
      >
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
    ))}
  </div>
</section>

    </main>
  );
}
