import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  const posts = [
    {
      id: "future-of-ai",
      title: "Ethical Considerations in AI Research",
      excerpt:
        "Exploring the ethical implications and methodological approaches in modern artificial intelligence research.",
      date: "2023-05-15",
      readingTime: "5 min read",
    },
    {
      id: "web3-revolution",
      title: "Reproducibility in Machine Learning Research",
      excerpt: "Addressing the challenges of reproducibility and proposing best practices for ML research.",
      date: "2023-04-22",
      readingTime: "7 min read",
    },
    {
      id: "cybersecurity-tips",
      title: "Data Privacy in Research Contexts",
      excerpt: "Ethical and practical approaches to maintaining data privacy in academic research.",
      date: "2023-03-10",
      readingTime: "6 min read",
    },
    {
      id: "react-performance",
      title: "Visualizing Complex Research Data",
      excerpt: "Techniques and tools for effectively visualizing and communicating complex research findings.",
      date: "2023-02-18",
      readingTime: "8 min read",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">blog_posts.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> ls -la /research_papers
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}
