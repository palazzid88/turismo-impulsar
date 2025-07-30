// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 py-8 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="text-lg font-bold mb-2">MiMarca</h4>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Navegación</h4>
          <ul>
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/destinos" className="hover:underline">Destinos</a></li>
            <li><a href="/nosotros" className="hover:underline">Nosotros</a></li>
            <li><a href="/contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Contacto</h4>
          <p>Email: contacto@tudominio.com</p>
          <p>Tel: +54 11 1234 5678</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
