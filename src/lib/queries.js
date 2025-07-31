// lib/queries.js
// import client from './sanity/client';
import client from "../../sanity/client";

export async function getDestinos() {
  const query = `*[_type == "destino"]{
    _id,
    nombre,
    descripcion,
    "imagenUrl": imagen.asset->url,
    slug,
    titulo,
    region

  }`;

  const destinos = await client.fetch(query);
  return destinos;
}
export async function getDestinosPorRegion(region) {
  const query = `*[_type == "destino" && region == $region]{
    _id,
    title,
    slug,
    description,
    region,
    image {
      asset -> {
        url
      }
    }
  }`;

  const destinos = await client.fetch(query, { region });
  return destinos;
}