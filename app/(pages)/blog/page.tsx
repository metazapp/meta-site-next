// File: app/(pages)/blog/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { getBlogPosts } from "@/app/lib/blog";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog - Metazapp",
  description: "Stay updated with the latest insights, trends, and news from Metazapp on software development, technology, and innovation.",
};

export default async function BlogPage() {
  // Get all blog posts
  const allPosts = await getBlogPosts();
  
  // Find featured post
  const featuredPost = allPosts.find(post => post.featured);
  
  // Regular posts (excluding featured if it exists)
  const regularPosts = featuredPost 
    ? allPosts.filter(post => post.id !== featuredPost.id)
    : allPosts;

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
              <div className="relative h-80 overflow-hidden">
                <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  {/* Replace with actual image */}
                  <Image 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
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
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
                    {/* Replace with actual avatar */}
                    <Image 
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      width={40}
                      height={40}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{featuredPost.author.name}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                
                <Link 
                  href={`/blog/${featuredPost.id.replace(/\.md$/, '')}`}
                  className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
                >
                  Read Article
                </Link>
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
          
          {/* Updated grid layout - 2 cards per row on mobile, 3 on larger screens */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 mt-8">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift flex flex-col h-full"
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 md:p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
                    {post.categories.slice(0, 2).map((category) => (
                      <span
                        key={category}
                        className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium truncate"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-sm md:text-lg lg:text-xl font-bold mb-2 md:mb-3 line-clamp-2">{post.title}</h3>
                  
                  <div className="flex items-center mb-2 md:mb-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-300 mr-2 flex-shrink-0">
                      <Image 
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm font-medium truncate">{post.author.name}</p>
                      <p className="text-xs text-gray-500 truncate">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-grow mb-3">
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2 md:line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <Link
                    href={`/blog/${post.id.replace(/\.md$/, '')}`}
                    className="text-primary text-xs md:text-sm font-medium hover:underline mt-auto"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}