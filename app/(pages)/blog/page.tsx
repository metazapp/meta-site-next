import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";
import { blogPosts } from "@/app/utils/mockData";

export const metadata: Metadata = {
  title: "Blog - Metazapp",
  description: "Stay updated with the latest insights, trends, and news from Metazapp on software development, technology, and innovation.",
};

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-40 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-white/90">
              Insights, trends, and updates on software development, technology, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center neumorph">
                <span className="text-gray-500">Featured Image</span>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.categories.map((category) => (
                    <span
                      key={category}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium">{featuredPost.author.name}</p>
                    <p className="text-sm text-gray-500">{featuredPost.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                
                <Button href={`/blog/${featuredPost.id}`} variant="primary">
                  Read Article
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Latest Articles"
            subtitle="Dive into our collection of insights and updates on technology and innovation."
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-4 mb-10 mt-12">
            <button
              className="px-4 py-2 rounded-md bg-primary text-white shadow-md transition-all duration-300"
            >
              All Categories
            </button>
            <button
              className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              Technology
            </button>
            <button
              className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              Innovation
            </button>
            <button
              className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              Development
            </button>
            <button
              className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              Design
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift"
              >
                <div className="relative h-28 md:h-40 lg:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Blog Image</span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.slice(0, 1).map((category) => (
                      <span
                        key={category}
                        className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3">{post.title}</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4 line-clamp-2 md:line-clamp-3">{post.excerpt}</p>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-gray-700 hover:bg-gray-100">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-gray-700 hover:bg-gray-100">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-gray-700 hover:bg-gray-100">
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}