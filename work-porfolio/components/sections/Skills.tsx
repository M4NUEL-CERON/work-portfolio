import { useTranslation } from '../../hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiAstro, 
  SiVite, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3,
  SiAdonisjs,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiRedis,
  SiAmazon,
  SiGit,
  SiDocker,
  SiVercel,
  SiXml,
  SiGithub,
  SiClickup
} from 'react-icons/si';

export default function Skills() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleTags, setVisibleTags] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate tags appearance
          animateTags();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateTags = () => {
    const totalTags = 18; // Total number of skill tags (updated count)
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < totalTags) {
        setVisibleTags(prev => [...prev, currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80); // Faster animation
  };

  const frontendTags = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Astro', icon: SiAstro, color: '#FF5D01' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' }
  ];
  
  const backendTags = [
    { name: 'AdonisJS', icon: SiAdonisjs, color: '#5A45FF' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'REST APIs', icon: SiAmazon, color: '#FF9900' }
  ];
  
  const toolsTags = [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'AWS Services', icon: SiAmazon, color: '#FF9900' },
    { name: 'Vercel', icon: SiVercel, color: '#000000' },
    { name: 'XML', icon: SiXml, color: '#FF6600' }
  ];

  return (
    <section ref={sectionRef} id="habilidades" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title with fade-in */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            <span className="bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent relative inline-block">
              {t('skills.title')}
              {/* Subtle glow effect - limited to text */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-300/20 to-white/10 blur-sm -z-10 rounded-lg"></div>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Card */}
          <div
  className={`group relative p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 shadow-[0_0_30px_-10px_rgba(0,0,0,0.7)] transition-all duration-700 hover:scale-[1.03] hover:border-blue-400/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] overflow-hidden ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}
  style={{ transitionDelay: '0.2s' }}
>
  {/* Efecto de luz en movimiento */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms]"></div>

  <h3 className="text-2xl font-bold text-white mb-6 text-center tracking-wide relative z-10 group-hover:text-blue-300 transition-colors duration-500">
    {t('skills.frontend')}
  </h3>

  <div className="flex flex-wrap gap-3 justify-center relative z-10">
    {frontendTags.map((tag, index) => {
      const IconComponent = tag.icon;
      return (
        <div
          key={tag.name}
          className={`flex items-center gap-2 px-4 py-2 bg-blue-900/40 text-blue-200 rounded-full text-sm font-medium border border-blue-600/40 shadow-[0_0_10px_-2px_rgba(59,130,246,0.4)] transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:bg-blue-800/50 hover:border-blue-400/70 hover:text-blue-100 ${
            visibleTags.includes(index)
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
        >
          <IconComponent
            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
            style={{ color: tag.color }}
          />
          <span className="transition-all duration-300">{tag.name}</span>
        </div>
      );
    })}
  </div>
          </div>


          {/* Backend Card */}
          <div
  className={`group relative p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 shadow-[0_0_30px_-10px_rgba(0,0,0,0.7)] transition-all duration-700 hover:scale-[1.03] hover:border-green-400/40 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.4)] overflow-hidden ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}
  style={{ transitionDelay: '0.4s' }}
>
  {/* Efecto de luz verde en movimiento */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms]"></div>

  <h3 className="text-2xl font-bold text-white mb-6 text-center tracking-wide relative z-10 group-hover:text-green-300 transition-colors duration-500">
    {t('skills.backend')}
  </h3>

  <div className="flex flex-wrap gap-3 justify-center relative z-10">
    {backendTags.map((tag, index) => {
      const IconComponent = tag.icon;
      return (
        <div
          key={tag.name}
          className={`flex items-center gap-2 px-4 py-2 bg-green-900/40 text-green-200 rounded-full text-sm font-medium border border-green-600/40 shadow-[0_0_10px_-2px_rgba(34,197,94,0.4)] transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:bg-green-800/50 hover:border-green-400/70 hover:text-green-100 ${
            visibleTags.includes(index + 7)
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
        >
          <IconComponent
            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
            style={{ color: tag.color }}
          />
          <span className="transition-all duration-300">{tag.name}</span>
        </div>
      );
    })}
  </div>
          </div>


          {/* Tools Card */}
          <div
  className={`group relative p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 shadow-[0_0_30px_-10px_rgba(0,0,0,0.7)] transition-all duration-700 hover:scale-[1.03] hover:border-purple-400/40 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] overflow-hidden ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}
  style={{ transitionDelay: '0.6s' }}
>
  {/* Efecto de luz en movimiento */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms]"></div>

  <h3 className="text-2xl font-bold text-white mb-6 text-center tracking-wide relative z-10 group-hover:text-purple-300 transition-colors duration-500">
    {t('skills.tools')}
  </h3>

  <div className="flex flex-wrap gap-3 justify-center relative z-10">
    {toolsTags
      .filter(tag => !['API REST', 'Vercel', 'XML'].includes(tag.name)) // ❌ Quitamos los que no quieres
      .concat([
        { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
        { name: 'ClickUp', icon: SiClickup, color: '#7b68ee' },
      ]) // ✅ Agregamos GitHub y ClickUp
      .map((tag, index) => {
        const IconComponent = tag.icon;
        return (
          <div
            key={tag.name}
            className={`flex items-center gap-2 px-4 py-2 bg-purple-900/40 text-purple-200 rounded-full text-sm font-medium border border-purple-600/40 shadow-[0_0_10px_-2px_rgba(168,85,247,0.4)] transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:bg-purple-800/50 hover:border-purple-400/70 hover:text-purple-100 ${
              visibleTags.includes(index + 13)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
          >
            <IconComponent
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
              style={{ color: tag.color }}
            />
            <span className="transition-all duration-300">{tag.name}</span>
          </div>
        );
      })}
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
