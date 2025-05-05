"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()

  // This would typically come from an API or database
  const projects = {
    "neural-network": {
      title: "Neural Network Research",
      description: "Novel approach to neural network architecture with improved efficiency for computer vision tasks.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["PyTorch", "TensorFlow", "Computer Vision"],
      category: "ai",
      github: "https://github.com/example/neural-network-research",
      demo: "https://neural-network-research.example.com",
      longDescription:
        "This research project explores novel neural network architectures designed to improve efficiency in computer vision tasks. By implementing a modified attention mechanism and optimizing the convolutional layers, we achieved a 15% improvement in accuracy while reducing computational requirements by 30%. The research has implications for deploying computer vision systems on resource-constrained devices and could enable more efficient processing of medical imaging data.",
    },
    "nlp-research": {
      title: "NLP Sentiment Analysis",
      description: "Research on advanced sentiment analysis techniques using transformer-based models.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["BERT", "Transformers", "Python"],
      category: "nlp",
      github: "https://github.com/example/nlp-sentiment-research",
      demo: "https://nlp-research.example.com",
      longDescription:
        "This research project investigates advanced sentiment analysis techniques using transformer-based models. We fine-tuned BERT and other transformer architectures on domain-specific data to improve sentiment classification accuracy in specialized contexts such as healthcare reviews and academic feedback. Our approach demonstrates how transfer learning can be effectively applied to sentiment analysis tasks with limited labeled data, achieving state-of-the-art results on several benchmark datasets.",
    },
    "ai-ethics": {
      title: "AI Ethics Framework",
      description: "Developing an ethical framework for responsible AI development and deployment.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Research", "Ethics", "Policy"],
      category: "ethics",
      github: "https://github.com/example/ai-ethics-framework",
      demo: "https://ai-ethics.example.com",
      longDescription:
        "This research project focuses on developing a comprehensive ethical framework for responsible AI development and deployment. Through literature review, stakeholder interviews, and case studies, we identified key ethical considerations and created practical guidelines for researchers and developers. The framework addresses issues such as bias, fairness, transparency, accountability, and privacy, providing actionable recommendations for each stage of the AI lifecycle from data collection to deployment and monitoring.",
    },
    "blockchain-explorer": {
      title: "Research Data Management System",
      description: "Secure and transparent system for managing research data and ensuring reproducibility.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Python", "Django", "PostgreSQL"],
      category: "data",
      github: "https://github.com/example/research-data-management",
      demo: "https://research-data.example.com",
      longDescription:
        "This project implements a comprehensive research data management system designed to ensure data integrity, security, and reproducibility in academic research. The system provides version control for datasets, automated metadata generation, and integration with common analysis tools. It includes features for data anonymization, access control, and audit trails to comply with ethical guidelines and data protection regulations. The system has been adopted by several research groups and has improved collaboration and research reproducibility.",
    },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">project_details.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">$</span> cat {id}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">title:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">category:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">stack:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-80 rounded-md overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
        >
          <Github size={16} /> View on GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>
    </div>
  )
}
