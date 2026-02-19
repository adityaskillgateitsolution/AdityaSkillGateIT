
import { Course, Job, BlogPost, Testimonial, TeamMember, PricingPlan } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    name: 'Python Full Stack Development',
    category: 'Web Development',
    technologies: ['Python', 'Django', 'MySQL', 'REST API'],
    description: 'Build powerful applications and automate real-world tasks using versatile Python programming.',
    image: '/img/python.png',
    originalPrice: 30000,
    offeredPrice: 27000
  },

  {
    id: '2',
    name: '.Net Full Course',
    category: 'Web Development',
    technologies: ['C#', 'Entity Framework', 'SQL Server', 'ASP.NET Core'],
    description: 'Develop enterprise-grade applications using the modern .NET framework.',
    image: '/img/.net.png',
    originalPrice: 25000,
    offeredPrice: 20000
  },
  {
    id: '2',
    name: 'Java',
    category: 'Web Development',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Hibernate'],
    description: 'Build secure, object-oriented applications using industry-standard Java technologies.',
    image: '/img/java.png',
    originalPrice: 25000,
    offeredPrice: 20000
  },
  {
    id: '3',
    name: 'SQL Server',
    category: 'Web Development',
    technologies: ['SQL Server', 'T-SQL', 'Indexes & Performance', 'Query Optimization'],
    description: 'Design, manage, and optimize databases using SQL Server for enterprise applications.',
    image: '/img/sql-server.png',
    originalPrice: 25000,
    offeredPrice: 20000
  },
  {
    id: '4',
    name: 'React JS',
    category: 'Web Development',
    technologies: ['React JS', 'Node JS', 'Express JS', 'MongoDB'],
    description: 'Create fast, interactive user interfaces using modern React component-based',
    image: '/img/react.png',
    originalPrice: 20000,
    offeredPrice: 18000
  },
  {
    id: '5',
    name: 'Angular',
    category: 'Web Development',
    technologies: ['Angular', 'Node JS', 'Express JS', 'MongoDB'],
    description: 'Develop scalable, structured web applications using Angular and TypeScript.',
    image: '/img/angular.png',
    originalPrice: 20000,
    offeredPrice: 18000
  },

  {
    id: '6',
    name: 'Frontend Development',
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'Java Script', 'Bootstrap'],
    description: 'Build responsive, high-performance websites using modern frontend technologies.',
    image: '/img/frontend.png',
    originalPrice: 18000,
    offeredPrice: 15000
  },
  {
    id: '7',
    name: 'Full Stack Development',
    category: 'Web Development',
    technologies: ['Angukar / React JS', 'java / .Net', 'Sql Server / MySQL', 'Prompt Engineering / AI'],
    description: 'Learn frontend, backend, and databases to build real-world, production-ready applications.',
    image: '/img/full stack.png',
    originalPrice: 67000,
    offeredPrice: 50000
  },

  {
    id: '7',
    name: 'Modern UI/UX Principles',
    category: 'UI/UX Designing',
    technologies: ['Figma', 'Adobe XD', 'Prototyping'],
    description: 'Design intuitive, user-centered interfaces with professional UI/UX design principles.',
    image: '/img/ui-ux.png',
    originalPrice: 18000,
    offeredPrice: 15000
  },
  {
    id: '7',
    name: 'Mobile App Development',
    category: 'UI/UX Designing',
    technologies: ['Figma', 'React Native', 'Android'],
    description: 'Create powerful Android and iOS apps using modern mobile development frameworks.',
    image: '/img/mobile-app.png',
    originalPrice: 18000,
    offeredPrice: 15000
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Abdul kadar Imran',
    designation: 'Developer',
    specialist: 'Frontend , Digital Marketing',
    image: '/img/imran.jpeg'
  },
  // {
  //   id: '2',
  //   name: 'Sarah Jennifer',
  //   designation: 'Technical Director',
  //   specialist: 'Full Stack Architect',
  //   image: '/img/1000237364'
  // },
  // {
  //   id: '3',
  //   name: 'Vikram Singh',
  //   designation: 'Head of Education',
  //   specialist: 'Data Science & AI Mentor',
  //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  // },
  // {
  //   id: '4',
  //   name: 'Priya Sharma',
  //   designation: 'Lead Product Designer',
  //   specialist: 'UI/UX Strategy Specialist',
  //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  // }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Junior React Developer',
    type: 'IT',
    description: 'Build interactive UI components for our global clients.',
    requirements: ['React proficiency', 'Knowledge of REST APIs', 'Team player']
  },
  {
    id: 'j2',
    title: 'Python Backend Engineer',
    type: 'IT',
    description: 'Develop robust data processing pipelines and APIs.',
    requirements: ['Python/Django', 'PostgreSQL knowledge', 'Problem solving']
  },
  {
    id: 'j3',
    title: 'Admissions Counselor',
    type: 'Non-IT',
    description: 'Guide prospective students toward the right career paths.',
    requirements: ['Communication skills', 'Customer empathy', 'Sales background']
  },
  {
    id: 'j4',
    title: 'Digital Marketing Specialist',
    type: 'IT',
    description: 'Manage PPC campaigns and content marketing strategies.',
    requirements: ['Google Ads certification', 'Analytical mindset']
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how LLMs are changing the way we write code and build interfaces.',
    author: 'Aditya Kumar',
    date: 'Oct 24, 2024',
    category: 'Tech Trends',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    title: 'How to Land Your First IT Job',
    excerpt: 'A comprehensive guide for freshers to navigate the competitive tech market.',
    author: 'Priya Sharma',
    date: 'Oct 20, 2024',
    category: 'Career Advice',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b3',
    title: 'Mastering Figma for Better Collaboration',
    excerpt: 'Tips and tricks to improve your design workflow and team handoff.',
    author: 'Rohan Singh',
    date: 'Oct 15, 2024',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajeshwari',
    role: 'Frontend Developer',
    content: 'Software fundamentals were explained clearly, making the concepts easy to understand. The teaching approach is excellent.',
    image: '/img/woman.png'
  },
  {
    id: 't2',
    name: 'Vijaya Ananthi',
    role: 'Full Stack Developer',
    content: 'The teaching approach is clear and simple, making complex software concepts easy to understand.',
    image: '/img/woman.png'
  }
];

export interface Partner {
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HCL_Technologies_logo.svg' }
];
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1',
    title: 'STUDENT STARTER KIT',
    price: '₹999',
    gradient: 'from-blue-600 to-cyan-400',
    features: [
      'LinkedIn Profile Refurbishing',
      'Static Portfolio Website (SPA)',
      'Resume & Online Presence Review'
    ],
    cta: 'Get Offer',
    highlighted: false
  },
  {
    id: '2',
    title: 'BUSINESS STARTER KIT',
    price: '₹7,999',
    gradient: 'from-blue-700 to-teal-500',
    features: [
      'Static Website (5–6 Pages)',
      'Logo Designing',
      'Brochure & Flyers',
      'Posters & Banners',
      'Business Card Design',
    ],
    cta: 'Get Offer',
    highlighted: true
  },
  {
    id: '3',
    title: 'UPGRADE KIT',
    price: '₹2,999',
    gradient: 'from-blue-600 to-cyan-400',
    features: [
      'Website Refurbishing / Enhancement',
      'Digital Marketing',
      '3-4 posts for Social Media Marketing'
    ],
    cta: 'Get Offer',
    highlighted: false
  }
];
