import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const translations = {
  es: {
    hero: {
      greeting: "Hola, soy",
      name: "Manuel",
      title: "Desarrollador Full Stack & Diseñador UI/UX",
      description: "Apasionado por crear experiencias digitales increíbles y soluciones innovadoras",
      viewProjects: "Ver Proyectos",
      contact: "Contactar"
    },
    about: {
      title: "Sobre Mí",
      description1: "Soy un desarrollador apasionado con experiencia creando aplicaciones web modernas y eficientes. Me especializo en tecnologías como React, Next.js, Node.js, y bases de datos.",
      description2: "Mi objetivo es siempre crear código limpio, escalable y soluciones que realmente impacten a los usuarios finales y aporten valor a las empresas.",
      projectsCompleted: "Proyectos Completados",
      yearsExperience: "Años de Experiencia",
      satisfiedClients: "Clientes Satisfechos"
    },
    skills: {
      title: "Habilidades & Tecnologías",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas"
    },
    projects: {
      title: "Proyectos Destacados",
      ecommerce: {
        title: "E-commerce Platform",
        description: "Plataforma completa de comercio electrónico con carrito de compras, pagos integrados y panel de administración."
      },
      taskManagement: {
        title: "Task Management App",
        description: "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad."
      },
      portfolio: {
        title: "Portfolio Website",
        description: "Sitio web personal con diseño responsivo, animaciones suaves y optimización SEO."
      },
      viewDemo: "Ver Demo",
      viewCode: "Código"
    },
    contact: {
      title: "Contacto",
      subtitle: "¡Trabajemos juntos!",
      description: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte a hacerlo realidad.",
      email: "Email:",
      phone: "Teléfono:",
      location: "Ubicación:",
      form: {
        name: "Tu Nombre",
        email: "Tu Email",
        subject: "Asunto",
        message: "Tu Mensaje",
        submit: "Enviar Mensaje"
      }
    },
    footer: {
      copyright: "Todos los derechos reservados."
    }
  },
  en: {
    hero: {
      greeting: "Hello, I'm",
      name: "Manuel",
      title: "Full Stack Developer & UI/UX Designer",
      description: "Passionate about creating amazing digital experiences and innovative solutions",
      viewProjects: "View Projects",
      contact: "Contact"
    },
    about: {
      title: "About Me",
      description1: "I'm a passionate developer with experience creating modern and efficient web applications. I specialize in technologies like React, Next.js, Node.js, and databases.",
      description2: "My goal is always to create clean, scalable code and solutions that truly impact end users and add value to companies.",
      projectsCompleted: "Projects Completed",
      yearsExperience: "Years of Experience",
      satisfiedClients: "Satisfied Clients"
    },
    skills: {
      title: "Skills & Technologies",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools"
    },
    projects: {
      title: "Featured Projects",
      ecommerce: {
        title: "E-commerce Platform",
        description: "Complete e-commerce platform with shopping cart, integrated payments and admin panel."
      },
      taskManagement: {
        title: "Task Management App",
        description: "Task management application with real-time collaboration, notifications and productivity analytics."
      },
      portfolio: {
        title: "Portfolio Website",
        description: "Personal website with responsive design, smooth animations and SEO optimization."
      },
      viewDemo: "View Demo",
      viewCode: "Code"
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together!",
      description: "Do you have a project in mind? I'd love to hear about it and see how I can help you make it a reality.",
      email: "Email:",
      phone: "Phone:",
      location: "Location:",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message"
      }
    },
    footer: {
      copyright: "All rights reserved."
    }
  }
};

export function useTranslation() {
  const router = useRouter();
  const [locale, setLocale] = useState('es');

  useEffect(() => {
    if (router.locale) {
      setLocale(router.locale);
    }
  }, [router.locale]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value;
  };

  return { t, locale };
}
