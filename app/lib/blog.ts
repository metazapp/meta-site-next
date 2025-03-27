// File: app/lib/blog.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost, BlogCategory } from '@/app/types';

const blogsDirectory = path.join(process.cwd(), 'content/blog');

// Make sure the blogs directory exists
const ensureBlogsDirectory = () => {
  if (!fs.existsSync(blogsDirectory)) {
    try {
      fs.mkdirSync(blogsDirectory, { recursive: true });
      //console.log(`Created blogs directory at: ${blogsDirectory}`);
    } catch (error) {
      console.error(`Failed to create blogs directory: ${error}`);
    }
  }
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Ensure directory exists
  ensureBlogsDirectory();
  
  try {
    const fileNames = fs.readdirSync(blogsDirectory);
    
    // If no files, return empty array
    if (fileNames.length === 0) {
      console.log('No blog posts found in directory');
      return [];
    }
    
    console.log(`Found ${fileNames.length} files in blogs directory`);

    const allPostsData = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.md')) // Only process markdown files
        .map(async (fileName) => {
          try {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.md$/, '');
            //console.log(`Processing blog post: ${id}`);

            // Read markdown file as string
            const fullPath = path.join(blogsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);
            const data = matterResult.data;
            
            // Convert markdown to HTML
            const processedContent = await remark()
              .use(html)
              .process(matterResult.content);
            
            const contentHtml = processedContent.toString();

            // Ensure all required fields exist with defaults if missing
            const authorData = data.author || {};

            // Combine the data with the id
            return {
              id,
              title: data.title || 'Untitled Post',
              excerpt: data.excerpt || 'No excerpt available.',
              content: contentHtml,
              date: data.date || new Date().toISOString(),
              author: {
                name: authorData.name || 'Anonymous',
                avatar: authorData.avatar || '/images/blog/authors/default.jpg',
              },
              categories: (data.categories || ['Uncategorized']) as BlogCategory[],
              image: data.image || '/images/blog/default.jpg',
              featured: data.featured || false,
            };
          } catch (error) {
            console.error(`Error processing blog post ${fileName}:`, error);
            
            // Return a default post object on error
            return {
              id: fileName.replace(/\.md$/, ''),
              title: 'Error Loading Post',
              excerpt: 'There was an error loading this post.',
              content: '<p>Post content unavailable.</p>',
              date: new Date().toISOString(),
              author: {
                name: 'System',
                avatar: '/images/blog/authors/default.jpg',
              },
              categories: ['Uncategorized'] as BlogCategory[],
              image: '/images/blog/default.jpg',
              featured: false,
            };
          }
        })
    );

    // Filter out any undefined results
    const validPosts = allPostsData.filter(Boolean);
    //console.log(`Successfully processed ${validPosts.length} blog posts`);

    // Sort posts by date
    return validPosts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    // Ensure directory exists
    ensureBlogsDirectory();
    
    //console.log(`Trying to load blog post with ID: ${id}`);
    
    // Clean the ID - remove any .md extension
    const cleanId = id.replace(/\.md$/, '');
    
    // Check different file possibilities
    const possiblePaths = [
      path.join(blogsDirectory, `${cleanId}.md`),
      path.join(blogsDirectory, `${cleanId}`), // Just in case the full path was passed
    ];
    
    //console.log(`Checking paths: ${possiblePaths.join(', ')}`);
    
    let fullPath = '';
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        fullPath = p;
        //console.log(`Found blog post at: ${fullPath}`);
        break;
      }
    }
    
    if (!fullPath) {
      console.log(`No blog post found for ID: ${cleanId}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const data = matterResult.data;
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    
    const contentHtml = processedContent.toString();

    // Ensure all required fields exist with defaults if missing
    const authorData = data.author || {};

    // Combine the data with the id
    return {
      id: cleanId,
      title: data.title || 'Untitled Post',
      excerpt: data.excerpt || 'No excerpt available.',
      content: contentHtml,
      date: data.date || new Date().toISOString(),
      author: {
        name: authorData.name || 'Anonymous',
        avatar: authorData.avatar || '/images/blog/authors/default.jpg',
      },
      categories: (data.categories || ['Uncategorized']) as BlogCategory[],
      image: data.image || '/images/blog/default.jpg',
      featured: data.featured || false,
    };
  } catch (error) {
    console.error(`Error loading blog post ${id}:`, error);
    return null;
  }
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  try {
    const posts = await getBlogPosts();
    const categoriesSet = new Set<BlogCategory>();
    
    posts.forEach(post => {
      post.categories.forEach(category => {
        categoriesSet.add(category);
      });
    });
    
    return Array.from(categoriesSet);
  } catch (error) {
    console.error('Error getting blog categories:', error);
    return ['Uncategorized'] as BlogCategory[];
  }
}

// Create a sample blog post if none exist
export async function createSampleBlogPost() {
  ensureBlogsDirectory();
  
  const samplePath = path.join(blogsDirectory, 'sample-post.md');
  
  // Only create if no files exist
  if (fs.readdirSync(blogsDirectory).length === 0) {
    const sampleContent = `---
title: "Sample Blog Post"
excerpt: "This is a sample blog post created automatically."
date: "${new Date().toISOString().split('T')[0]}"
author:
  name: "Admin"
  avatar: "/images/blog/authors/default.jpg"
categories:
  - "Uncategorized"
image: "/images/blog/default.jpg"
featured: true
---

# Sample Blog Post

This is a sample blog post that was created automatically because no blog posts were found.

## How to Add More Posts

To add more blog posts, create markdown files in the \`content/blog\` directory with the proper frontmatter.

Each file should have a structure like this:

\`\`\`markdown
---
title: "Your Blog Post Title"
excerpt: "A short description of your blog post"
date: "YYYY-MM-DD"
author:
  name: "Author Name"
  avatar: "/images/blog/authors/author-image.jpg"
categories:
  - "Category1"
  - "Category2"
image: "/images/blog/your-image.jpg"
featured: false
---

# Your content goes here

Write your blog post content in Markdown format.
\`\`\`
`;

    try {
      fs.writeFileSync(samplePath, sampleContent);
      //console.log('Created sample blog post');
    } catch (error) {
      console.error('Error creating sample blog post:', error);
    }
  }
}

// Initialize - this will create the directory and a sample post if needed
createSampleBlogPost().catch(console.error);