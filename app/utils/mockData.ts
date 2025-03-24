import { Product, Service, BlogPost, JobOpening, FAQ } from "@/app/types";

// Mock Product Data
export const products: Product[] = [
  {
    id: "p1",
    title: "Data Analytics Platform",
    description: "Comprehensive data analytics solution with real-time insights and customizable dashboards.",
    category: "Category A",
    features: [
      "Real-time data processing",
      "Interactive visualizations",
      "Customizable dashboards",
      "AI-powered insights",
      "Data integration with multiple sources"
    ],
    specifications: {
      "Deployment": "Cloud / On-premises",
      "Language Support": "Python, R, SQL",
      "Data Sources": "SQL, NoSQL, APIs, Files",
      "Export Formats": "CSV, Excel, PDF, JSON"
    },
    applications: [
      "Business intelligence",
      "Market analysis",
      "Performance monitoring",
      "Customer behavior analysis"
    ],
    image: "/images/products/analytics-platform.jpg"
  },
  {
    id: "p2",
    title: "Cloud Security Suite",
    description: "Enterprise-grade security solution for cloud infrastructure and applications.",
    category: "Category B",
    features: [
      "Threat detection and prevention",
      "Compliance monitoring",
      "Vulnerability assessment",
      "Real-time alerts",
      "Encryption management"
    ],
    specifications: {
      "Deployment": "Cloud",
      "Compliance": "GDPR, HIPAA, PCI DSS",
      "Authentication": "MFA, SSO, Biometric",
      "Monitoring": "24/7 automated"
    },
    applications: [
      "Enterprise security",
      "Financial services",
      "Healthcare data protection",
      "Government agencies"
    ],
    image: "/images/products/security-suite.jpg"
  },
  {
    id: "p3",
    title: "DevOps Automation Tool",
    description: "Streamline development and operations with this comprehensive automation tool.",
    category: "Category A",
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as code",
      "Monitoring and logging",
      "Collaboration tools",
      "Version control integration"
    ],
    specifications: {
      "Deployment": "Cloud / Self-hosted",
      "Integration": "GitHub, GitLab, Bitbucket",
      "Languages": "All major programming languages",
      "Scalability": "Enterprise-ready"
    },
    applications: [
      "Software development teams",
      "IT operations",
      "SaaS providers",
      "Enterprise development"
    ],
    image: "/images/products/devops-tool.jpg"
  },
  {
    id: "p4",
    title: "AI Development Framework",
    description: "Build, train, and deploy AI models with this comprehensive development framework.",
    category: "Category C",
    features: [
      "Pre-trained models",
      "Custom model training",
      "Model optimization",
      "Distributed training",
      "Deployment tools"
    ],
    specifications: {
      "Deployment": "Cloud / Edge / On-premises",
      "Frameworks": "TensorFlow, PyTorch, ONNX",
      "Hardware Support": "CPU, GPU, TPU",
      "Model Types": "Computer Vision, NLP, Forecasting"
    },
    applications: [
      "Research institutions",
      "Product development",
      "Process automation",
      "Predictive analytics"
    ],
    image: "/images/products/ai-framework.jpg"
  },
  {
    id: "p5",
    title: "Mobile App Development Kit",
    description: "Comprehensive toolkit for building cross-platform mobile applications.",
    category: "Category B",
    features: [
      "Cross-platform compatibility",
      "UI component library",
      "Performance optimization",
      "Backend integration",
      "Analytics tools"
    ],
    specifications: {
      "Platforms": "iOS, Android",
      "Languages": "JavaScript, TypeScript",
      "Architecture": "Component-based",
      "Testing": "Automated unit and UI testing"
    },
    applications: [
      "App startups",
      "Enterprise mobile solutions",
      "E-commerce platforms",
      "Social media applications"
    ],
    image: "/images/products/mobile-dev-kit.jpg"
  },
  {
    id: "p6",
    title: "Blockchain Development Platform",
    description: "Build, test, and deploy blockchain applications with this comprehensive platform.",
    category: "Category C",
    features: [
      "Smart contract development",
      "Decentralized app toolkit",
      "Testing framework",
      "Security analysis",
      "Network monitoring"
    ],
    specifications: {
      "Blockchains": "Ethereum, Polygon, Solana",
      "Languages": "Solidity, Rust",
      "Integration": "Web3, Wallets, Oracles",
      "Scaling": "Layer 2 solutions"
    },
    applications: [
      "Fintech solutions",
      "Supply chain tracking",
      "NFT platforms",
      "Decentralized finance"
    ],
    image: "/images/products/blockchain-platform.jpg"
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