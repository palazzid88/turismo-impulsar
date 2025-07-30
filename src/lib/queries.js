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
    titulo

  }`;

  const destinos = await client.fetch(query);
  return destinos;
}
