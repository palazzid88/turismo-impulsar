import client from '../../../../sanity/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const query = `*[_type == "destino" && slug.current == $slug][0]{
  titulo,
  descripcion,
  "imagenUrl": imagen.asset->url,
  precio,
  region,
  provincia,
  salidaMes,
  slug
}`;

export async function generateStaticParams() {
  const slugsQuery = `*[_type == "destino" && defined(slug.current)][].slug.current`;
  const slugs = await client.fetch(slugsQuery);

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function DestinoPage({ params }) {
  const { slug } = params;
  const destino = await client.fetch(query, { slug });

  if (!destino) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={destino.imagenUrl}
          alt={destino.titulo}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{destino.titulo}</h1>
          <p className="text-gray-600 mb-4">{destino.descripcion}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
            <p><span className="font-semibold">Precio:</span> ${destino.precio}</p>
            <p><span className="font-semibold">Región:</span> {destino.region}</p>
            <p><span className="font-semibold">Provincia:</span> {destino.provincia}</p>
            <p>
              <span className="font-semibold">Salida:</span>{' '}
              {destino.salidaMes?.join(', ') || 'No especificada'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-center"
            >
              ← Volver
            </Link>

            <a
              href={`https://wa.me/549XXXXXXXXXX?text=Hola! Quiero consultar por el destino: ${encodeURIComponent(destino.titulo)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-center"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
