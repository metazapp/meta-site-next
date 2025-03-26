import { Product, Service, BlogPost, JobOpening, FAQ } from "@/app/types";

// Mock Product Data
export const products: Product [] = [
  {
    id: "p1",
    title: "ERP Solution",
    description: "Comprehensive enterprise resource planning software to streamline business operations and boost productivity.",
    category: "Business Management",
    features: [
      "Inventory and supply chain management",
      "Financial and accounting modules",
      "HR and payroll management",
      "Customer relationship management (CRM)",
      "Customizable reporting and analytics"
    ],
    specifications: {
      "Deployment": "Cloud / On-premises",
      "Languages": "JavaScript, Python",
      "Database": "MySQL, PostgreSQL",
      "Integrations": "Third-party APIs, Payment Gateways"
    },
    applications: [
      "Manufacturing companies",
      "Retail and e-commerce businesses",
      "Healthcare organizations",
      "Education institutions"
    ],
    image: "/images/products/erp-solution.jpg"
  },
  {
    id: "p2",
    title: "POS System",
    description: "Feature-rich point of sale (POS) system for managing sales, inventory, and customer data in real time.",
    category: "Retail & Sales",
    features: [
      "Real-time sales tracking",
      "Inventory management",
      "Multi-store support",
      "Customer loyalty programs",
      "Integrated payment gateways"
    ],
    specifications: {
      "Deployment": "Cloud / On-premises",
      "Platform": "Web & Mobile",
      "Languages": "JavaScript, TypeScript",
      "Payment Integration": "Stripe, Razorpay, PayPal"
    },
    applications: [
      "Retail stores",
      "Restaurants and cafes",
      "Supermarkets",
      "Pharmacies"
    ],
    image: "/images/products/pos-system.jpg"
  },
  {
    id: "p3",
    title: "E-commerce Web & Mobile App",
    description: "Full-fledged e-commerce platform with web and mobile support, offering seamless shopping experiences.",
    category: "E-commerce",
    features: [
      "Product catalog management",
      "User authentication and profiles",
      "Shopping cart and checkout",
      "Payment gateway integration",
      "Order tracking and notifications"
    ],
    specifications: {
      "Platforms": "Web, iOS, Android",
      "Languages": "JavaScript, TypeScript",
      "Database": "MongoDB, MySQL",
      "Scalability": "Supports high traffic volumes"
    },
    applications: [
      "Online retail stores",
      "Multi-vendor marketplaces",
      "Subscription-based platforms",
      "Service booking platforms"
    ],
    image: "/images/products/ecommerce-app.jpg"
  },
  {
    id: "p4",
    title: "Hospital Management System",
    description: "End-to-end healthcare management software for patient records, appointments, and billing.",
    category: "Healthcare",
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Billing and insurance handling",
      "Doctor and staff management",
      "Reports and analytics"
    ],
    specifications: {
      "Deployment": "Cloud / On-premises",
      "Languages": "Python, JavaScript",
      "Database": "PostgreSQL, MongoDB",
      "Security": "HIPAA compliant"
    },
    applications: [
      "Hospitals",
      "Clinics",
      "Diagnostic centers",
      "Healthcare networks"
    ],
    image: "/images/products/healthcare-system.jpg"
  },
  {
    id: "p5",
    title: "School Management System",
    description: "Comprehensive software for managing educational institutions, students, and staff.",
    category: "Education",
    features: [
      "Student enrollment and records",
      "Course and schedule management",
      "Online exams and grading",
      "Fee collection and finance management",
      "Parent-teacher communication portal"
    ],
    specifications: {
      "Deployment": "Cloud / On-premises",
      "Languages": "JavaScript, Python",
      "Database": "PostgreSQL, MySQL",
      "Integration": "LMS, payment gateways"
    },
    applications: [
      "Schools and colleges",
      "Training institutes",
      "E-learning platforms",
      "Coaching centers"
    ],
    image: "/images/products/education-system.jpg"
  },
  {
    id: "p6",
    title: "AI & ML Solutions",
    description: "AI and machine learning products for automation, data insights, and predictive analytics.",
    category: "Artificial Intelligence",
    features: [
      "Custom AI model development",
      "Predictive analytics",
      "Natural language processing (NLP)",
      "Computer vision applications",
      "Real-time data insights"
    ],
    specifications: {
      "Deployment": "Cloud / On-premises",
      "Frameworks": "TensorFlow, PyTorch",
      "Languages": "Python, R",
      "Hardware Support": "CPU, GPU, TPU"
    },
    applications: [
      "Data analysis and insights",
      "Business process automation",
      "Healthcare diagnostics",
      "Customer behavior prediction"
    ],
    image: "/images/products/ai-ml-solutions.jpg"
  }
];


// Mock Service Data
export const services: Service[] = [
  {
    id: "s1",
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements and objectives.",
    features: [
      "Requirements analysis and planning",
      "UI/UX design and prototyping",
      "Agile development methodology",
      "Quality assurance and testing",
      "Deployment and maintenance support"
    ],
    icon: "CodeIcon",
    image: "/images/services/custom-software.jpg"
  },
  {
    id: "s2",
    title: "Mobile App Development",
    description: "Cross-platform and native mobile applications that provide seamless user experiences across devices.",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX optimized for mobile",
      "Integration with device features",
      "App store deployment and optimization"
    ],
    icon: "MobileIcon",
    image: "/images/services/mobile-app.jpg"
  },
  {
    id: "s3",
    title: "Cloud Solutions",
    description: "Comprehensive cloud services from migration to optimization and management of cloud infrastructure.",
    features: [
      "Cloud migration strategy",
      "Infrastructure setup and configuration",
      "Serverless architecture implementation",
      "Cloud security and compliance",
      "Cost optimization and monitoring"
    ],
    icon: "CloudIcon",
    image: "/images/services/cloud-solutions.jpg"
  },
  {
    id: "s4",
    title: "AI & Machine Learning",
    description: "Advanced AI solutions to automate processes, gain insights, and enhance decision-making capabilities.",
    features: [
      "Custom AI model development",
      "Data preparation and analysis",
      "Model training and validation",
      "Integration with existing systems",
      "Continuous improvement and optimization"
    ],
    icon: "BrainIcon",
    image: "/images/services/ai-ml.jpg"
  },
  {
    id: "s5",
    title: "DevOps Services",
    description: "Streamline your development processes with our comprehensive DevOps solutions and practices.",
    features: [
      "CI/CD pipeline implementation",
      "Infrastructure as code",
      "Containerization and orchestration",
      "Monitoring and logging setup",
      "Security integration throughout the pipeline"
    ],
    icon: "ServerIcon",
    image: "/images/services/devops.jpg"
  },
  {
    id: "s6",
    title: "IT Consulting",
    description: "Strategic technology consulting to help you make informed decisions and achieve your business goals.",
    features: [
      "Technology assessment and roadmapping",
      "Digital transformation strategy",
      "Technology stack selection",
      "Process optimization",
      "Security and compliance planning"
    ],
    icon: "LightbulbIcon",
    image: "/images/services/it-consulting.jpg"
  }
];

// Mock Blog Data
export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is reshaping the landscape of software development and what to expect in the coming years.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-06-15",
    author: {
      name: "Alex Johnson",
      avatar: "/images/blog/authors/alex.jpg"
    },
    categories: ["Technology", "Innovation"],
    image: "/images/blog/ai-development.jpg",
    featured: true
  },
  {
    id: "b2",
    title: "Building Scalable Cloud Infrastructure",
    excerpt: "Learn the best practices for designing and implementing cloud infrastructure that can scale with your business needs.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-05-22",
    author: {
      name: "Samantha Lee",
      avatar: "/images/blog/authors/samantha.jpg"
    },
    categories: ["Technology", "Development"],
    image: "/images/blog/cloud-infrastructure.jpg"
  },
  {
    id: "b3",
    title: "Mobile App Design Trends for 2023",
    excerpt: "Stay ahead of the curve with these cutting-edge mobile app design trends that are defining the user experience in 2023.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-04-10",
    author: {
      name: "David Chen",
      avatar: "/images/blog/authors/david.jpg"
    },
    categories: ["Design", "Innovation"],
    image: "/images/blog/mobile-design.jpg"
  },
  {
    id: "b4",
    title: "Cybersecurity Best Practices for Enterprises",
    excerpt: "Essential cybersecurity measures that every enterprise should implement to protect their digital assets and customer data.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-03-18",
    author: {
      name: "Emily Rodriguez",
      avatar: "/images/blog/authors/emily.jpg"
    },
    categories: ["Technology", "Development"],
    image: "/images/blog/cybersecurity.jpg"
  },
  {
    id: "b5",
    title: "The Rise of Low-Code Development Platforms",
    excerpt: "How low-code platforms are democratizing software development and accelerating digital transformation initiatives.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-02-25",
    author: {
      name: "Michael Brown",
      avatar: "/images/blog/authors/michael.jpg"
    },
    categories: ["Development", "Innovation"],
    image: "/images/blog/low-code.jpg"
  },
  {
    id: "b6",
    title: "Optimizing Web Performance for Better User Experience",
    excerpt: "Strategies and techniques to improve web performance and provide a seamless user experience across all devices.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-01-30",
    author: {
      name: "Sophia Kim",
      avatar: "/images/blog/authors/sophia.jpg"
    },
    categories: ["Development", "Design"],
    image: "/images/blog/web-performance.jpg"
  }
];

// Mock Career Data
export const jobOpenings: JobOpening[] = [
  {
    id: "j1",
    title: "Senior Full Stack Developer",
    description: "We are looking for a Senior Full Stack Developer with expertise in modern web technologies to join our development team.",
    responsibilities: [
      "Design and develop robust, scalable, and secure web applications",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Write clean, maintainable code with comprehensive test coverage",
      "Review code and mentor junior developers",
      "Participate in Agile development processes"
    ],
    requirements: [
      "5+ years of experience in full stack development",
      "Proficiency in JavaScript, TypeScript, React, and Node.js",
      "Experience with databases (SQL and NoSQL)",
      "Understanding of cloud services (AWS, Azure, or GCP)",
      "Knowledge of CI/CD pipelines and DevOps practices"
    ],
    location: "Coimbatore, India",
    type: "Full-time",
    icon: "CodeIcon"
  },
  {
    id: "j2",
    title: "UX/UI Designer",
    description: "Join our creative team as a UX/UI Designer to create intuitive and engaging user experiences for our products.",
    responsibilities: [
      "Create user-centered designs by understanding business requirements and user feedback",
      "Create wireframes, prototypes, and mockups optimized for a wide range of devices",
      "Develop UI mockups and prototypes that clearly illustrate how sites function and look",
      "Collaborate with developers to implement designs accurately",
      "Conduct usability testing and iterate on designs"
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio showcasing your design projects",
      "Understanding of accessibility standards and responsive design",
      "Knowledge of interaction design and information architecture"
    ],
    location: "Remote",
    type: "Full-time",
    icon: "PaletteIcon"
  },
  {
    id: "j3",
    title: "DevOps Engineer",
    description: "We're seeking a skilled DevOps Engineer to help us build and maintain our infrastructure and deployment pipelines.",
    responsibilities: [
      "Design, implement, and maintain CI/CD pipelines",
      "Manage cloud infrastructure (AWS, Azure, or GCP)",
      "Implement and maintain containerization solutions",
      "Monitor system performance and troubleshoot issues",
      "Ensure security best practices are followed across the infrastructure"
    ],
    requirements: [
      "3+ years of experience in DevOps engineering",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Familiarity with infrastructure as code (Terraform, CloudFormation)",
      "Understanding of networking and security concepts"
    ],
    location: "Coimbatore, India",
    type: "Full-time",
    icon: "ServerIcon"
  },
  {
    id: "j4",
    title: "Product Manager",
    description: "We are looking for a Product Manager to help define our product vision and lead our product development efforts.",
    responsibilities: [
      "Define the product vision, strategy, and roadmap",
      "Gather and analyze user feedback and market research",
      "Work closely with engineering, design, and marketing teams",
      "Define and track key product metrics",
      "Prioritize features and create detailed product specifications"
    ],
    requirements: [
      "4+ years of experience in product management",
      "Experience in the software industry",
      "Strong analytical and problem-solving skills",
      "Excellent communication and presentation abilities",
      "Technical background or familiarity with software development"
    ],
    location: "Coimbatore, India",
    type: "Full-time",
    icon: "ChartIcon"
  }
];

// Mock FAQ Data
export const faqs: FAQ[] = [
  {
    question: "What services does Metazapp offer?",
    answer: "Metazapp offers a range of software development services including custom software development, mobile app development, cloud solutions, AI & machine learning, DevOps services, and IT consulting.",
    category: "Services"
  },
  {
    question: "How long does it typically take to develop a custom software solution?",
    answer: "The timeline for custom software development varies based on the complexity and scope of the project. Small to medium projects can take 3-6 months, while larger enterprise solutions may take 6-12 months or more. We provide detailed timelines during the planning phase after understanding your specific requirements.",
    category: "Services"
  },
  {
    question: "Do you offer maintenance and support after the project is completed?",
    answer: "Yes, we offer ongoing maintenance and support services to ensure your software continues to run smoothly. We provide different support packages tailored to your needs, including regular updates, bug fixes, security patches, and feature enhancements.",
    category: "Services"
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in a wide range of technologies including JavaScript/TypeScript, React, Next.js, Node.js, Python, .NET, Java, cloud platforms (AWS, Azure, GCP), mobile development (React Native, Swift, Kotlin), and database technologies (SQL, NoSQL).",
    category: "Technology"
  },
  {
    question: "How do you approach data security and privacy?",
    answer: "We take data security and privacy very seriously. We implement industry-standard security practices throughout the development process, including secure coding practices, data encryption, regular security audits, and compliance with relevant regulations such as GDPR. We can also work with specific security requirements for your industry.",
    category: "Security"
  },
  {
    question: "What is your development methodology?",
    answer: "We primarily use Agile development methodologies, which allow for flexibility, transparency, and iterative progress. This approach enables us to adapt to changing requirements, provide regular updates, and deliver working software incrementally. We can also accommodate other methodologies based on project needs.",
    category: "Process"
  },
  {
    question: "What services does Metazapp offer?",
    answer: "Metazapp offers a range of software development services including custom software development, mobile app development, cloud solutions, AI & machine learning, DevOps services, and IT consulting.",
    category: "Services"
  },
  {
    question: "How long does it typically take to develop a custom software solution?",
    answer: "The timeline for custom software development varies based on the complexity and scope of the project. Small to medium projects can take 3-6 months, while larger enterprise solutions may take 6-12 months or more. We provide detailed timelines during the planning phase after understanding your specific requirements.",
    category: "Services"
  },
  {
    question: "Do you offer maintenance and support after the project is completed?",
    answer: "Yes, we offer ongoing maintenance and support services to ensure your software continues to run smoothly. We provide different support packages tailored to your needs, including regular updates, bug fixes, security patches, and feature enhancements.",
    category: "Services"
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in a wide range of technologies including JavaScript/TypeScript, React, Next.js, Node.js, Python, .NET, Java, cloud platforms (AWS, Azure, GCP), mobile development (React Native, Swift, Kotlin), and database technologies (SQL, NoSQL).",
    category: "Technology"
  },
  {
    question: "How do you approach data security and privacy?",
    answer: "We take data security and privacy very seriously. We implement industry-standard security practices throughout the development process, including secure coding practices, data encryption, regular security audits, and compliance with relevant regulations such as GDPR. We can also work with specific security requirements for your industry.",
    category: "Security"
  },
  {
    question: "What is your development methodology?",
    answer: "We primarily use Agile development methodologies, which allow for flexibility, transparency, and iterative progress. This approach enables us to adapt to changing requirements, provide regular updates, and deliver working software incrementally. We can also accommodate other methodologies based on project needs.",
    category: "Process"
  },
  {
    question: "How do you handle project communication and updates?",
    answer: "Communication is key to successful project delivery. We establish clear communication channels, regular status meetings, and progress reports. We typically use project management tools that provide visibility into the development process, tasks, and timelines. Our goal is to keep you informed and involved throughout the project.",
    category: "Process"
  },
  {
    question: "Can you work with our existing systems and integrate new solutions?",
    answer: "Yes, we have extensive experience integrating new solutions with existing systems. We can develop custom APIs, middleware, and connectors to ensure seamless integration with your current infrastructure, databases, third-party services, and legacy systems.",
    category: "Technology"
  }
];