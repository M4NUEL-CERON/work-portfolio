export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Habilidades & Tecnologías</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frontend</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Next.js</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">JavaScript</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">HTML5</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">CSS3</span>
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
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">GraphQL</span>
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
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
