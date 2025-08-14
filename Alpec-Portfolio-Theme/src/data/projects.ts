export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Web' | 'Mobile' | 'Design' | 'Full-Stack';
  featured: boolean;
  year: number;
  status: 'Completed' | 'In Progress' | 'Concept';
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern, full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    longDescription: 'This comprehensive e-commerce solution provides a seamless shopping experience with advanced features like real-time inventory tracking, secure payment processing via Stripe, automated email notifications, and a powerful admin dashboard for managing products, orders, and customers. The platform is built with scalability in mind and can handle thousands of concurrent users.',
    image: '/images/projects/ecommerce-platform.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux', 'Express', 'JWT', 'Tailwind CSS'],
    liveUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/alexparker/ecommerce-platform',
    category: 'Full-Stack',
    featured: true,
    year: 2024,
    status: 'Completed'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
    longDescription: 'Built with modern web technologies, this task management app offers real-time collaboration, drag-and-drop task organization, time tracking, file attachments, and comprehensive reporting. The app supports multiple project views including Kanban boards, Gantt charts, and calendar views.',
    image: '/images/projects/task-management.jpg',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Socket.io', 'Chart.js', 'Quasar'],
    liveUrl: 'https://taskmanager-demo.example.com',
    githubUrl: 'https://github.com/alexparker/task-management',
    category: 'Web',
    featured: true,
    year: 2024,
    status: 'Completed'
  },
  {
    id: 'mobile-fitness-app',
    title: 'Fitness Tracking Mobile App',
    description: 'Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features built with React Native.',
    longDescription: 'A comprehensive fitness application that helps users track workouts, monitor progress, and stay motivated. Features include custom workout plans, exercise library with video demonstrations, progress photos, social challenges, and integration with wearable devices.',
    image: '/images/projects/fitness-app.jpg',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'AsyncStorage', 'React Navigation'],
    liveUrl: 'https://apps.apple.com/fitness-tracker',
    githubUrl: 'https://github.com/alexparker/fitness-app',
    category: 'Mobile',
    featured: false,
    year: 2023,
    status: 'Completed'
  },
  {
    id: 'ai-chatbot-interface',
    title: 'AI Chatbot Interface',
    description: 'Modern chat interface for AI-powered customer support with natural language processing and sentiment analysis.',
    longDescription: 'An intelligent chatbot interface that provides 24/7 customer support with advanced NLP capabilities. The system can understand context, detect sentiment, escalate to human agents when needed, and learn from interactions to improve responses over time.',
    image: '/images/projects/ai-chatbot.jpg',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma', 'WebSocket', 'Tailwind CSS'],
    liveUrl: 'https://ai-chatbot-demo.example.com',
    githubUrl: 'https://github.com/alexparker/ai-chatbot',
    category: 'Web',
    featured: true,
    year: 2024,
    status: 'In Progress'
  },
  {
    id: 'portfolio-website',
    title: 'Creative Portfolio Website',
    description: 'A stunning portfolio website for a digital artist featuring interactive galleries, smooth animations, and immersive user experience.',
    longDescription: 'This portfolio showcases creative work through an immersive digital experience. Features include interactive image galleries, smooth scroll animations, 3D elements, and a content management system for easy updates.',
    image: '/images/projects/portfolio-website.jpg',
    technologies: ['Astro', 'Three.js', 'GSAP', 'Tailwind CSS', 'Strapi CMS'],
    liveUrl: 'https://creative-portfolio.example.com',
    githubUrl: 'https://github.com/alexparker/creative-portfolio',
    category: 'Design',
    featured: false,
    year: 2023,
    status: 'Completed'
  },
  {
    id: 'blockchain-voting-system',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system built on blockchain technology ensuring vote integrity and transparency.',
    longDescription: 'A decentralized voting platform that leverages blockchain technology to ensure vote security, transparency, and immutability. The system includes voter verification, real-time results, and audit trails.',
    image: '/images/projects/blockchain-voting.jpg',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask', 'IPFS'],
    liveUrl: 'https://blockchain-voting-demo.example.com',
    githubUrl: 'https://github.com/alexparker/blockchain-voting',
    category: 'Full-Stack',
    featured: false,
    year: 2023,
    status: 'Concept'
  }
];

export const categories = ['All', 'Web', 'Mobile', 'Design', 'Full-Stack'] as const;

export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getProjectsByCategory = (category: string) => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string) => projects.find(project => project.id === id);
