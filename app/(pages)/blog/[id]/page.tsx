// File: app/(pages)/blog/[id]/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { getBlogPost, getBlogPosts } from "@/app/lib/blog";
import fs from 'fs';
import path from 'path';

interface PageProps {
  params: {
    id: string;
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  try {
    // Method 1: Use the getBlogPosts function
    const posts = await getBlogPosts();
    const params = posts.map((post) => ({
      id: post.id.replace(/\.md$/, ''),
    }));

    // Method 2: Also check the directory directly as a backup
    const blogsDirectory = path.join(process.cwd(), 'content/blog');
    if (fs.existsSync(blogsDirectory)) {
      const fileNames = fs.readdirSync(blogsDirectory);
      const fileParams = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => ({
          id: fileName.replace(/\.md$/, ''),
        }));
      
      // Combine both methods, remove duplicates
      const allIds = new Set([...params.map(p => p.id), ...fileParams.map(p => p.id)]);
      return Array.from(allIds).map(id => ({ id }));
    }

    // If directory doesn't exist, just return the params from getBlogPosts
    return params;
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return an empty array as fallback
    return [];
  }
}

// Generate metadata for each blog post
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  try {
    // Make sure to clean the ID first
    const cleanId = params.id.replace(/\.md$/, '');
    const post = await getBlogPost(cleanId);
    
    if (!post) {
      return {
        title: "Blog Post Not Found - Metazapp",
      };
    }

    return {
      title: `${post.title} - Metazapp Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author.name],
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: "Error Loading Blog Post - Metazapp",
    };
  }
}

export default async function BlogPostPage(
  { params }: PageProps
) {
  try {
    // Remove .md extension if present in the URL
    const cleanId = params.id.replace(/\.md$/, '');
    const post = await getBlogPost(cleanId);
    
    // If post not found, show 404
    if (!post) {
      notFound();
    }

    // Format date for display
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <>
        {/* Hero Banner */}
        <section className="pt-40 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-white/90 hover:text-white mb-6"
              >
                <FiArrowLeft className="mr-2" /> Back to all articles
              </Link>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  {/* Replace with actual image when available */}
                  {/* <Image 
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  /> */}
                </div>
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-white/80 text-sm">{formattedDate}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Featured Image */}
              <div className="h-80 bg-gray-200 rounded-lg mb-10 flex items-center justify-center neumorph">
                <span className="text-gray-500">Featured Image</span>
                {/* Replace with actual image */}
                {/* <Image 
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                /> */}
              </div>
              
              {/* Blog Content */}
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Author Info */}
              <div className="mt-16 bg-gray-50 p-6 rounded-lg neumorph">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 flex-shrink-0">
                    {/* Replace with actual image */}
                    {/* <Image 
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    /> */}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Written by {post.author.name}</h3>
                    <p className="text-gray-600">
                      Software development expert at Metazapp, specializing in innovative technology solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Back to Blog Link */}
              <div className="mt-10 text-center">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
                >
                  <FiArrowLeft className="mr-2" /> Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    // Return a simple error UI
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Error Loading Blog Post</h1>
          <p className="text-gray-600 mb-8">Sorry, we encountered an error while trying to load this blog post.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }
}