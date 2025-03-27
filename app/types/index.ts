// Product Types
export type ProductCategory = "Business Management" | "Retail & Sales" | "E-commerce" | "Healthcare" | "Education" | "Artificial Intelligence" ;

export type Product = {
  id: string;
  title: string;
  description: string;
  category: ProductCategory;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  image: string;
};

// Service Types
export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
};



// Career Types
export type JobOpening = {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  icon: string;
  status: 'open' | 'filled';
};

// FAQ Types
export type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

// Blog Types
export type BlogCategory = "Technology" | "Innovation" | "Development" | "Design" | "Uncategorized";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  categories: BlogCategory[];
  image: string;
  featured?: boolean;
};