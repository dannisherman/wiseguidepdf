import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// ✅ Corrected: Function declaration syntax
const handleReadMore = (pdfUrl: string) => {
  const confirmDownload = window.confirm("Would you like to download this guide as a PDF?");
  if (confirmDownload) {
    window.open(pdfUrl, "_blank");
  }
};

const mockPosts = [
  {
    id: 1,
    title: "How to Spot Online Scams",
    excerpt: "Learn the common signs of online scams and how to stay safe on the web.",
    author: "Danielle M.",
    date: "June 9, 2025",
    pdf: "/pdfs/how-to-spot-online-scams.pdf"
  },
  {
    id: 2,
    title: "Getting Started with Email",
    excerpt: "This step-by-step guide will help you send your first email with confidence.",
    author: "John T.",
    date: "June 7, 2025",
    pdf: "/pdfs/getting-started-with-email.pdf"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">WiseGuide Community Blog</h1>
          <p className="text-lg text-slate-600 mb-8">
            Discover stories, tech tips, and experiences from fellow seniors and supporters.
          </p>

          {/* Blog Posts */}
          <div className="space-y-8">
            {mockPosts.map(post => (
              <div key={post.id} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">{post.title}</h2>
                <p className="text-slate-600 mb-2">{post.excerpt}</p>
                <div className="text-sm text-slate-500 mb-4">
                  By {post.author} • {post.date}
                </div>
                <Button
                  onClick={() => handleReadMore(post.pdf)}
                  className="text-blue-600 hover:underline mt-4"
                >
                  Read More →
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-8">
          <div className="bg-gray-50 p-4 rounded shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-slate-700">Categories</h3>
            <ul className="list-disc list-inside text-slate-600">
              <li>Email Safety</li>
              <li>Smartphone Tips</li>
              <li>Scam Awareness</li>
              <li>Success Stories</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-slate-700">Popular Posts</h3>
            <ul className="text-blue-600 hover:underline space-y-2">
              <li><Link to="/blog/1">How to Spot Online Scams</Link></li>
              <li><Link to="/blog/2">Getting Started with Email</Link></li>
            </ul>
          </div>

          <div className="bg-yellow-100 p-4 rounded shadow-sm text-center">
            <p className="mb-4 text-slate-700">Want to share your story or tips?</p>
            <Link to="/write-blog">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">
                Write a Blog
              </button>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
