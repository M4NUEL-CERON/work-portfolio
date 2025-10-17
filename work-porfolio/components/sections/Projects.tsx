export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-lg font-medium">E-commerce Platform</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                Plataforma completa de comercio electrónico con carrito de compras, 
                pagos integrados y panel de administración.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Ver Demo</a>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Código</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-white text-lg font-medium">Task Management App</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Task Management App</h3>
              <p className="text-gray-600 mb-4">
                Aplicación de gestión de tareas con colaboración en tiempo real, 
                notificaciones y análisis de productividad.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Prisma</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Ver Demo</a>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Código</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <span className="text-white text-lg font-medium">Portfolio Website</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Website</h3>
              <p className="text-gray-600 mb-4">
                Sitio web personal con diseño responsivo, animaciones suaves 
                y optimización SEO.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">CSS3</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Vercel</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Ver Demo</a>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Código</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
