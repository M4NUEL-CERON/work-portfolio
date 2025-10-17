export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección Hero - Presentación Principal */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hola, soy <span className="text-blue-600">Tu Nombre</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Desarrollador Full Stack & Diseñador UI/UX
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Apasionado por crear experiencias digitales increíbles y soluciones innovadoras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#proyectos" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 inline-block hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1">Ver Proyectos</a>
            <a href="#contacto" className="px-6 py-3 bg-transparent text-blue-600 border-2 border-blue-600 rounded-lg font-medium transition-all duration-300 inline-block hover:bg-blue-600 hover:text-white">Contactar</a>
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Sobre Mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Soy un desarrollador apasionado con más de X años de experiencia creando 
                aplicaciones web modernas y eficientes. Me especializo en tecnologías 
                como React, Node.js, y bases de datos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mi objetivo es siempre crear código limpio, escalable y soluciones 
                que realmente impacten a los usuarios finales.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">Proyectos Completados</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">3+</h3>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
                <p className="text-gray-600">Clientes Satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Habilidades */}
      <section id="habilidades" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Habilidades & Tecnologías</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frontend</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">React</span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">JavaScript</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Backend</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Express</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">MongoDB</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">PostgreSQL</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">REST APIs</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Herramientas</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Git</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Docker</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AWS</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Figma</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Imagen del Proyecto</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  Plataforma completa de comercio electrónico con carrito de compras, 
                  pagos integrados y panel de administración.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Ver Demo</a>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Código</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Imagen del Proyecto</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Task Management App</h3>
                <p className="text-gray-600 mb-4">
                  Aplicación de gestión de tareas con colaboración en tiempo real, 
                  notificaciones y análisis de productividad.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Prisma</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Ver Demo</a>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Código</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Imagen del Proyecto</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Website</h3>
                <p className="text-gray-600 mb-4">
                  Sitio web personal con diseño responsivo, animaciones suaves 
                  y optimización SEO.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">CSS3</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Vercel</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Ver Demo</a>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Código</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">¡Trabajemos juntos!</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él 
                  y ver cómo puedo ayudarte a hacerlo realidad.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <strong className="text-gray-900 w-20">Email:</strong>
                  <span className="text-gray-600">tu.email@ejemplo.com</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-900 w-20">Teléfono:</strong>
                  <span className="text-gray-600">+57 300 123 4567</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-900 w-20">Ubicación:</strong>
                  <span className="text-gray-600">Ciudad, País</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">LinkedIn</a>
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">GitHub</a>
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Twitter</a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Tu Nombre" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Tu Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Asunto" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required 
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tu Mensaje" 
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 inline-block hover:bg-primary-700 hover:shadow-lg transform hover:-translate-y-1 w-full">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
  