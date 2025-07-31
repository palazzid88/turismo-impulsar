import { getDestinos } from '@/lib/queries';
import Banner from '@/components/Banner';
import DestinoCard from '@/components/DestinoCard';
import FiltrarPorRegion from '@/components/FiltrarPorRegion';
// impot FiltrarPorRegion from 

export default async function Home() {
  const destinos = await getDestinos();

  return (
    <main>
      <Banner
        imageUrl="/banner.jpg"
        title="Explorá el mundo con nosotros"
        subtitle="Los mejores destinos al mejor precio"
      />
      <FiltrarPorRegion destinos={destinos} />

      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Destinos turísticos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {destinos.map((destino) => (
            <DestinoCard key={destino._id} destino={destino} />
          ))}
        </div>
      </section>
    </main>
  );
}
