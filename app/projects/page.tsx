import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Projects - Portfolio",
  description: "Featured projects with detailed case studies and outcomes",
}

const projects = [
  {
    title: "Smart Attendance System",
    category: "Open Source",
    year: "2025",
    context: "Manual attendance is time-consuming, error-prone, and allows proxy entries. An automated system using QR codes, barcodes, and manual fallback improves accuracy and saves class time.",
    constraints: "Limited hardware, low budget, internet dependency for QR scans, basic security (no biometrics), and restricted scope without full LMS features.",
    decisions:
      "Used QR/barcode for low-cost automation, Python + Streamlit for fast development, MongoDB for flexible storage, and added basic analytics instead of just data storage.",
    outcome: "Free to use and alter it",
    reflection: "The system works well for automation and insights but cannot fully prevent proxy attendance. It is a practical academic prototype, not a production-grade solution.",
    image: "/component-library-documentation-interface.png",
    tech: ["Python", "Streamlit", "QR & Barcode", "MongoDB"],
    links: {
      live: "https://jcer-attendify.streamlit.app/",
      github: "https://github.com/yashshinde0080/mini_project",
    },
  },
  {
    title: "Car Price Prediction ML",
    category: "Open Source",
    year: "2025",
    context: "Used car pricing is inconsistent and subjective. Buyers and sellers lack data-backed valuation. This project builds an end-to-end ML pipeline to predict used car prices using historical data and modern regression models.",
    constraints: "Data quality issues (missing values, outliers), limited feature reliability from public datasets, model interpretability vs accuracy trade-off, and the need to keep the system lightweight and reproducible.",
    decisions: "Used a modular ML pipeline with preprocessing, feature engineering, and model training separated. Chose ensemble models (Random Forest, XGBoost) for accuracy, with Linear Regression as a baseline. Added evaluation metrics, logging, and testing to make it production-ready.",
    outcome: "Free to use and alter it its Open socurce",
    reflection: "The system achieves strong predictive performance and clean architecture, but accuracy depends heavily on dataset quality. Real-world deployment would require continuous retraining and region-specific data to avoid pricing bias.",
    image: "/modern-ecommerce-product-page.webp",
    tech: ["Python", "scikit-learn", "Streamlit", "Pandas","Numpy"],
    links: {
      live: null,
      github: "https://github.com/yashshinde0080/skill_development/",
    },
  },
  {
    title: "CNN Pneumonia Detection – Hugging Face Fine-Tuning",
    category: "Fine-Tuning Pretrained Models",
    year: "2025",
    context: "Pneumonia diagnosis from chest X-ray images is time-critical and error-prone due to radiologist workload and visual similarity between conditions. This project fine-tunes a pre-trained CNN model from Hugging Face to classify pneumonia vs normal cases using medical imaging data.",
    constraints: "Limited labeled medical datasets, class imbalance, high risk of overfitting, strict need for high recall, and ethical constraints preventing use as a standalone diagnostic tool.",
    decisions: "Used transfer learning with a pre-trained CNN (e.g. ResNet/DenseNet) to reduce data requirements. Applied data augmentation, weighted loss for imbalance, and fine-tuned upper layers only to preserve learned visual features. Evaluated using recall, precision, and AUC instead of accuracy alone.",
    outcome: "None",
    reflection: "The model performs well for assisted screening but is not clinically deployable without validation across hospitals and devices. Real-world use would require regulatory approval, explainability, and continuous retraining on diverse datasets.",
    image: "/collaborative-document-editor-interface.jpg",
    tech: ["React", "WebRTC", "CRDTs", "Node.js"],
    links: {
      live: "https://example.com",
      github: null,
    },
  },
  {
    title: "Developer CLI Tool",
    category: "Developer Tools",
    year: "2022",
    context: "Created a command-line interface to streamline repetitive development workflows",
    constraints: "Needed to work across different OS, support plugins, and have zero dependencies",
    decisions: "Built with Node.js, created plugin architecture, comprehensive error handling",
    outcome: "10,000+ weekly downloads, 20+ community plugins, 4.8/5 npm rating",
    reflection: "Documentation was initially lacking; user feedback helped prioritize better examples",
    image: "/terminal-command-line-interface.jpg",
    tech: ["Node.js", "Commander.js", "Chalk", "TypeScript"],
    links: {
      live: "https://npmjs.com",
      github: "https://github.com",
    },
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Projects</h1>
          <p className="text-muted-foreground">Detailed case studies with context, decisions, and outcomes</p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h2>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-sm text-primary">{project.category}</p>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden border border-border mb-8 hover:scale-[1.02] hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="space-y-6 mb-6">
                <div className="hover:-translate-y-0.5 transition-transform duration-300">
                  <h3 className="font-medium text-foreground mb-2">Context</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.context}</p>
                </div>

                <div className="hover:-translate-y-0.5 transition-transform duration-300">
                  <h3 className="font-medium text-foreground mb-2">Constraints</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.constraints}</p>
                </div>

                <div className="hover:-translate-y-0.5 transition-transform duration-300">
                  <h3 className="font-medium text-foreground mb-2">Decisions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.decisions}</p>
                </div>

                <div className="hover:-translate-y-0.5 transition-transform duration-300">
                  <h3 className="font-medium text-foreground mb-2">Outcome</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
                </div>

                <div className="hover:-translate-y-0.5 transition-transform duration-300">
                  <h3 className="font-medium text-foreground mb-2">Reflection</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.reflection}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border border-border rounded-full text-foreground hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.links.live && (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="hover:scale-105 transition-transform duration-300 bg-transparent"
                  >
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="hover:scale-105 transition-transform duration-300 bg-transparent"
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>

              {index < projects.length - 1 && <div className="mt-16 border-b border-border" />}
            </article>
          ))}
        </div>

        <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <Button asChild className="group hover:scale-105 transition-transform duration-300">
            <Link href="/hackathons">
              View Hackathons{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
