export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hola, soy <span className="text-blue-600">Manuel</span>
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
  );
}
