import { notFound } from "next/navigation";
import { Metadata } from "next";
import {useParams, useRouter} from "next/navigation";

export const blogPosts = [
  {
    slug: "introduction-to-nextjs",
    title: "Introduction to Next.js",
    description: "A beginner-friendly guide to understanding Next.js and its features.",
    content: "Next.js is a powerful React framework for building fast, SEO-friendly web applications...",
    publishedAt: "2025-02-25",
    author: "John Doe"
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices",
    description: "Learn how to efficiently use Tailwind CSS in your projects.",
    content: "Tailwind CSS is a utility-first CSS framework that allows developers to build modern UI...",
    publishedAt: "2025-02-20",
    author: "Jane Smith"
  }
];

export default function BlogPost() {
 const {slug} = useParams() as {slug: string};
  const router = useRouter();
  // Return not found if no post is found
  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-2">
        By {post.author} • {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
    </main>
  );
}
