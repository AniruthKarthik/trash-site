"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    {
      id: "titanic-survival",
      title: "Will U Survive the Titanic",
      description:
        "Interactive survival predictor using machine learning to determine if you would survive the Titanic disaster.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Machine Learning", "Predictive Analysis", "Interactive"],
      category: "interactive",
    },
    {
      id: "neural-network",
      title: "Neural Network Research",
      description: "Novel approach to neural network architecture with improved efficiency for computer vision tasks.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["PyTorch", "TensorFlow", "Computer Vision"],
      category: "ai",
    },
    {
      id: "nlp-research",
      title: "NLP Sentiment Analysis",
      description: "Research on advanced sentiment analysis techniques using transformer-based models.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["BERT", "Transformers", "Python"],
      category: "nlp",
    },
    {
      id: "data-analysis",
      title: "Research Data Analysis",
      description: "Statistical analysis and visualization techniques for large research datasets.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["R", "Python", "Statistics"],
      category: "data",
    },
    {
      id: "academic-paper",
      title: "Published Research Paper",
      description: "Peer-reviewed research on machine learning applications in healthcare.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Academic Writing", "Research", "ML"],
      category: "publication",
    },
    {
      id: "research-visualization",
      title: "Research Visualization Tool",
      description: "Interactive tool for visualizing complex research data and findings.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["D3.js", "React", "Data Viz"],
      category: "visualization",
    },
  ]

  const categories = [
    { id: "all", name: "All Research" },
    { id: "interactive", name: "Interactive Projects" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "nlp", name: "Natural Language Processing" },
    { id: "data", name: "Data Analysis" },
    { id: "publication", name: "Publications" },
    { id: "visualization", name: "Visualization" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> Displaying research directory. Select category to filter results.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
