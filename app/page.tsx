"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const featuredProjects = [
    {
      id: "neural-network",
      title: "Neural Network Research",
      description: "Novel approach to neural network architecture with improved efficiency for computer vision tasks.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["PyTorch", "TensorFlow", "Computer Vision"],
    },
    {
      id: "nlp-research",
      title: "NLP Sentiment Analysis",
      description: "Research on advanced sentiment analysis techniques using transformer-based models.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["BERT", "Transformers", "Python"],
    },
    {
      id: "ai-ethics",
      title: "AI Ethics Framework",
      description: "Developing an ethical framework for responsible AI development and deployment.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Research", "Ethics", "Policy"],
    },
  ]

  const latestPosts = [
    {
      id: "future-of-ai",
      title: "Ethical Considerations in AI Research",
      excerpt:
        "Exploring the ethical implications and methodological approaches in modern artificial intelligence research.",
      date: "2023-05-15",
      readingTime: "5 min read",
    },
  ]

  const skills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Research Methods",
    "Data Analysis",
    "Academic Writing",
    "Computer Vision",
    "NLP",
  ]

  return (
    <div className="space-y-16">
      <section className="py-12">
        <Terminal
          text="Hello, World. I am ANI_ENG. Student researcher and AI enthusiast. Welcome to my digital realm."
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              Learn more about me <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">system_specs.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest from the Blog</h2>
          <Link href="/blog" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}
