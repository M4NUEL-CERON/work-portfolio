export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Sobre Mí</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Soy un desarrollador apasionado con experiencia creando 
              aplicaciones web modernas y eficientes. Me especializo en tecnologías 
              como React, Next.js, Node.js, y bases de datos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mi objetivo es siempre crear código limpio, escalable y soluciones 
              que realmente impacten a los usuarios finales y aporten valor a las empresas.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">2+</h3>
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
  );
}
