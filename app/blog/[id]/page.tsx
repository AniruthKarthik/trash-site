"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params

  // This would typically come from an API or database
  const posts = {
    "future-of-ai": {
      title: "Ethical Considerations in AI Research",
      date: "2023-05-15",
      readingTime: "5 min read",
      content: `
      <p>As artificial intelligence research continues to advance at a rapid pace, ethical considerations have become increasingly important. Researchers must navigate complex ethical landscapes while pushing the boundaries of what's technically possible.</p>
      
      <p>This article explores key ethical considerations in AI research and proposes a framework for responsible innovation that balances technological advancement with ethical principles.</p>
      
      <h2>Key Ethical Challenges</h2>
      
      <p>AI research faces several significant ethical challenges that must be addressed:</p>
      
      <ul>
        <li>Bias and fairness in training data and algorithms</li>
        <li>Transparency and explainability of complex models</li>
        <li>Privacy concerns in data collection and usage</li>
        <li>Potential for misuse or dual-use applications</li>
        <li>Long-term societal impacts and unintended consequences</li>
      </ul>
      
      <h2>Research Methodologies</h2>
      
      <p>Incorporating ethical considerations into research methodologies is essential. This includes:</p>
      
      <ul>
        <li>Diverse and representative training datasets</li>
        <li>Rigorous testing for bias across different demographic groups</li>
        <li>Documentation of model limitations and potential failure modes</li>
        <li>Stakeholder engagement throughout the research process</li>
        <li>Interdisciplinary collaboration with ethicists and social scientists</li>
      </ul>
      
      <h2>Institutional Approaches</h2>
      
      <p>Research institutions play a crucial role in fostering ethical AI research:</p>
      
      <ul>
        <li>Establishing ethics review boards for AI research projects</li>
        <li>Developing clear guidelines and best practices</li>
        <li>Providing ethics training for researchers</li>
        <li>Creating incentives for responsible research practices</li>
        <li>Promoting transparency and open science</li>
      </ul>
      
      <p>By integrating ethical considerations into every stage of the research process, we can work toward AI systems that not only advance the field technically but also contribute positively to society while minimizing potential harms.</p>
    `,
    },
    "web3-revolution": {
      title: "Reproducibility in Machine Learning Research",
      date: "2023-04-22",
      readingTime: "7 min read",
      content: `
      <p>Reproducibility is a cornerstone of scientific research, yet it remains a significant challenge in machine learning. This article examines the reproducibility crisis in ML research and proposes practical solutions.</p>
      
      <h2>The Reproducibility Challenge</h2>
      
      <p>Machine learning research faces several reproducibility challenges:</p>
      
      <ul>
        <li>Incomplete code and data availability</li>
        <li>Undocumented hyperparameter tuning processes</li>
        <li>Hardware and software dependencies</li>
        <li>Stochastic elements in training</li>
        <li>Insufficient experimental details in publications</li>
      </ul>
      
      <h2>Best Practices for Reproducible Research</h2>
      
      <p>To improve reproducibility, researchers should adopt these practices:</p>
      
      <ul>
        <li>Version control for code and data</li>
        <li>Comprehensive documentation of experimental setup</li>
        <li>Containerization (e.g., Docker) to manage dependencies</li>
        <li>Fixed random seeds for stochastic processes</li>
        <li>Pre-registration of research hypotheses and methods</li>
        <li>Open access to code, data, and trained models</li>
      </ul>
      
      <h2>Institutional and Community Solutions</h2>
      
      <p>The broader research community can support reproducibility through:</p>
      
      <ul>
        <li>Journal and conference policies requiring code and data submission</li>
        <li>Dedicated reproducibility tracks at conferences</li>
        <li>Recognition and rewards for reproducible research</li>
        <li>Standardized benchmarks and evaluation protocols</li>
        <li>Infrastructure for long-term preservation of research artifacts</li>
      </ul>
      
      <p>By prioritizing reproducibility in machine learning research, we can build a more solid foundation for scientific progress and ensure that reported advances are reliable and verifiable.</p>
    `,
    },
    "cybersecurity-tips": {
      title: "Data Privacy in Research Contexts",
      date: "2023-03-10",
      readingTime: "6 min read",
      content: `
      <p>Data privacy is a critical concern in research, particularly when working with sensitive or personal information. This article discusses ethical and practical approaches to maintaining data privacy in academic research contexts.</p>
      
      <h2>Ethical Frameworks for Data Privacy</h2>
      
      <p>Several ethical principles should guide data privacy in research:</p>
      
      <ul>
        <li>Informed consent from research participants</li>
        <li>Minimization of data collection to what's necessary</li>
        <li>Purpose limitation and specification</li>
        <li>Respect for participant autonomy and dignity</li>
        <li>Balancing research benefits with privacy risks</li>
      </ul>
      
      <h2>Technical Approaches to Privacy Preservation</h2>
      
      <p>Researchers can employ various technical methods to protect privacy:</p>
      
      <ul>
        <li>Data anonymization and de-identification techniques</li>
        <li>Differential privacy for statistical analyses</li>
        <li>Federated learning to keep data on local devices</li>
        <li>Secure multi-party computation for collaborative research</li>
        <li>Synthetic data generation as an alternative to real data</li>
      </ul>
      
      <h2>Regulatory Compliance</h2>
      
      <p>Research must comply with relevant privacy regulations:</p>
      
      <ul>
        <li>GDPR in Europe and international collaborations</li>
        <li>HIPAA for health-related research in the US</li>
        <li>CCPA and other state-level regulations</li>
        <li>Institutional Review Board (IRB) requirements</li>
        <li>Domain-specific regulations and standards</li>
      </ul>
      
      <p>By implementing robust privacy practices, researchers can maintain public trust, comply with regulations, and conduct ethical research that respects individual privacy while advancing scientific knowledge.</p>
    `,
    },
    "react-performance": {
      title: "Visualizing Complex Research Data",
      date: "2023-02-18",
      readingTime: "8 min read",
      content: `
      <p>Effective visualization is crucial for communicating complex research findings. This article explores techniques and tools for creating impactful visualizations that accurately represent research data.</p>
      
      <h2>Principles of Research Data Visualization</h2>
      
      <p>Effective research visualizations follow these principles:</p>
      
      <ul>
        <li>Accuracy and truthfulness in data representation</li>
        <li>Clarity and simplicity to avoid cognitive overload</li>
        <li>Appropriate visualization types for different data structures</li>
        <li>Consideration of audience expertise and needs</li>
        <li>Accessibility for diverse users</li>
      </ul>
      
      <h2>Advanced Visualization Techniques</h2>
      
      <p>Several advanced techniques can enhance research visualizations:</p>
      
      <ul>
        <li>Interactive visualizations for exploring multidimensional data</li>
        <li>Animation to show temporal changes and processes</li>
        <li>Dimensionality reduction for high-dimensional datasets</li>
        <li>Network and graph visualizations for relationship data</li>
        <li>Geospatial mapping for location-based research</li>
      </ul>
      
      <h2>Tools and Libraries</h2>
      
      <p>Researchers can leverage various tools for data visualization:</p>
      
      <pre><code>
# Python visualization with matplotlib
import matplotlib.pyplot as plt
import numpy as np

data = np.random.normal(0, 1, 1000)
plt.hist(data, bins=30)
plt.title('Normal Distribution')
plt.show()
      </code></pre>
      
      <p>Other powerful tools include:</p>
      
      <ul>
        <li>R with ggplot2 for statistical visualization</li>
        <li>D3.js for web-based interactive visualizations</li>
        <li>Tableau for rapid exploration and dashboard creation</li>
        <li>Specialized tools like Cytoscape for network visualization</li>
        <li>Virtual and augmented reality for immersive data exploration</li>
      </ul>
      
      <p>By applying these principles, techniques, and tools, researchers can create visualizations that not only accurately represent their data but also effectively communicate their findings to diverse audiences.</p>
    `,
    },
  }

  const post = posts[id as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to blog
      </Link>

      <article>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 glitch" data-text={post.title}>
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarIcon size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>

        <div
          className="prose prose-invert max-w-none prose-headings:text-primary prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
