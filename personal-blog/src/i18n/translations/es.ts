export const es = {
  // Navigation
  nav: {
    home: 'Inicio',
    blog: 'Blog',
    about: 'Acerca de',
    contact: 'Contacto',
    search: 'Buscar',
    language: 'Idioma'
  },

  // Homepage
  home: {
    hero: {
      title: 'Bienvenido a Mi Blog',
      subtitle: 'Pensamientos, experiencias e ideas sobre tecnología, vida y todo lo demás.',
      cta: 'Leer Últimas Publicaciones'
    },
    latestPosts: {
      title: 'Últimas Publicaciones',
      viewAll: 'Ver Todas las Publicaciones'
    },
    about: {
      title: 'Sobre Mí',
      description: 'Soy un desarrollador y escritor apasionado que ama compartir conocimientos y experiencias.',
      readMore: 'Leer Más'
    },
    newsletter: {
      title: 'Mantente Actualizado',
      description: 'Recibe las últimas publicaciones y actualizaciones directamente en tu bandeja de entrada.',
      placeholder: 'Ingresa tu email',
      subscribe: 'Suscribirse',
      success: '¡Suscrito exitosamente!',
      error: 'Algo salió mal. Por favor intenta de nuevo.'
    }
  },

  // Blog
  blog: {
    title: 'Blog',
    subtitle: 'Pensamientos, experiencias e ideas sobre tecnología, vida y todo lo demás.',
    search: {
      placeholder: 'Buscar por título, contenido, etiquetas o autor...',
      dateRange: 'Rango de Fechas',
      sortBy: 'Ordenar Por',
      tags: 'Etiquetas',
      categories: 'Categorías',
      authors: 'Autores',
      readingTime: 'Tiempo de Lectura',
      applyFilters: 'Aplicar Filtros',
      clearAll: 'Limpiar Todo',
      saveSearch: 'Guardar Búsqueda',
      showAnalytics: 'Mostrar Analytics',
      hideAnalytics: 'Ocultar Analytics',
      resultsCount: 'Mostrando {count} de {total} publicaciones',
      noResults: 'No se encontraron publicaciones',
      loading: 'Buscando...'
    },
    filters: {
      allTime: 'Todo el Tiempo',
      today: 'Hoy',
      thisWeek: 'Esta Semana',
      thisMonth: 'Este Mes',
      thisQuarter: 'Este Trimestre',
      thisYear: 'Este Año',
      newestFirst: 'Más Recientes Primero',
      oldestFirst: 'Más Antiguos Primero',
      titleAZ: 'Título A-Z',
      titleZA: 'Título Z-A',
      readingTime: 'Tiempo de Lectura',
      author: 'Autor',
      mostPopular: 'Más Populares'
    },
    readingTime: {
      minutes: '{minutes} min de lectura',
      lessThan1: 'Menos de 1 min de lectura'
    },
    readMore: 'Leer más →',
    publishedOn: 'Publicado el {date}',
    updatedOn: 'Actualizado el {date}',
    by: 'por {author}',
    in: 'en {category}',
    tags: 'Etiquetas: {tags}'
  },

  // About
  about: {
    title: 'Acerca de',
    subtitle: 'Aprende más sobre mí y mi trayectoria.',
    content: {
      intro: '¡Hola! Soy un desarrollador y escritor apasionado.',
      experience: 'Con años de experiencia en desarrollo web, me encanta compartir conocimientos y ayudar a otros a aprender.',
      skills: 'Mis habilidades incluyen tecnologías web modernas, principios de diseño y mejores prácticas.',
      contact: '¡No dudes en contactarme si te gustaría conectar o colaborar!'
    }
  },

  // Contact
  contact: {
    title: 'Contacto',
    subtitle: 'Ponte en contacto conmigo.',
    form: {
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Mensaje enviado exitosamente!',
      error: 'Algo salió mal. Por favor intenta de nuevo.',
      required: 'Este campo es requerido.',
      invalidEmail: 'Por favor ingresa un email válido.'
    },
    info: {
      title: 'Ponte en Contacto',
      description: 'Me encantaría saber de ti. Envíame un mensaje y responderé lo antes posible.',
      email: 'Email',
      location: 'Ubicación',
      social: 'Sígueme en redes sociales'
    }
  },

  // Footer
  footer: {
    description: 'Un blog personal moderno construido con Astro',
    quickLinks: 'Enlaces Rápidos',
    social: 'Social',
    newsletter: 'Newsletter',
    subscribe: 'Suscribirse',
    copyright: '© {year} Tu Blog. Todos los derechos reservados.',
    madeWith: 'Hecho con ❤️ usando Astro'
  },

  // Common
  common: {
    loading: 'Cargando...',
    error: 'Algo salió mal',
    notFound: 'Página no encontrada',
    backToHome: 'Volver al Inicio',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    menu: 'Menú',
    close: 'Cerrar',
    language: 'Idioma',
    selectLanguage: 'Seleccionar Idioma'
  },

  // Search Analytics
  analytics: {
    title: 'Analytics de Búsqueda',
    exportData: 'Exportar Datos',
    statistics: {
      title: 'Estadísticas de Búsqueda',
      totalSearches: 'Total de Búsquedas',
      uniqueSearches: 'Búsquedas Únicas',
      avgResults: 'Promedio de Resultados',
      successRate: 'Tasa de Éxito'
    },
    popularSearches: {
      title: 'Búsquedas Populares'
    },
    performance: {
      title: 'Rendimiento',
      avgSearchTime: 'Tiempo Promedio de Búsqueda',
      zeroResults: 'Cero Resultados',
      mostUsedFilter: 'Filtro Más Usado'
    },
    trends: {
      title: 'Tendencias de Búsqueda (Últimos 7 Días)'
    },
    recentActivity: {
      title: 'Actividad Reciente de Búsqueda'
    }
  },

  // Error pages
  errors: {
    404: {
      title: 'Página No Encontrada',
      message: 'La página que buscas no existe.',
      backHome: 'Volver al Inicio'
    },
    500: {
      title: 'Error del Servidor',
      message: 'Algo salió mal en nuestro lado. Por favor intenta de nuevo más tarde.',
      backHome: 'Volver al Inicio'
    }
  }
}; 