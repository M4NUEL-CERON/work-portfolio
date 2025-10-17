export default function Contact() {
  return (
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
                <span className="text-gray-600">manuel@ejemplo.com</span>
              </div>
              <div className="flex items-center">
                <strong className="text-gray-900 w-20">Teléfono:</strong>
                <span className="text-gray-600">+57 300 123 4567</span>
              </div>
              <div className="flex items-center">
                <strong className="text-gray-900 w-20">Ubicación:</strong>
                <span className="text-gray-600">Colombia</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">LinkedIn</a>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">GitHub</a>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Twitter</a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Tu Nombre" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Tu Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Asunto" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tu Mensaje" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 inline-block hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 w-full">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
