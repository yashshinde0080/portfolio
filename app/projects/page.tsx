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
    title: "Design System Framework",
    category: "Open Source",
    year: "2024",
    context: "Needed a scalable, accessible component library for modern React applications",
    constraints: "Had to support TypeScript, multiple styling solutions, and maintain backward compatibility",
    decisions:
      "Built with Radix UI primitives for accessibility, used CSS-in-JS for flexibility, created comprehensive documentation",
    outcome: "5,000+ GitHub stars, adopted by 50+ companies, 95% positive feedback",
    reflection: "Would add more real-world examples earlier and invest more in testing infrastructure",
    image: "/component-library-documentation-interface.jpg",
    tech: ["React", "TypeScript", "Radix UI", "Tailwind"],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "E-Commerce Platform",
    category: "Client Work",
    year: "2023",
    context: "Client needed a performant, SEO-friendly online store with 10,000+ products",
    constraints: "Tight 3-month deadline, legacy data migration, complex inventory management",
    decisions: "Used Next.js for SSR/SSG, implemented incremental static regeneration, integrated Stripe for payments",
    outcome: "300% increase in conversion rate, 50% faster page loads, $1M+ in first-year revenue",
    reflection: "Would have allocated more time for load testing and implemented a staging environment sooner",
    image: "/modern-ecommerce-product-page.jpg",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
    links: {
      live: "https://example.com",
      github: null,
    },
  },
  {
    title: "Real-Time Collaboration Tool",
    category: "SaaS Product",
    year: "2023",
    context: "Built a Google Docs-like editor for technical documentation with team features",
    constraints: "Required offline support, conflict resolution, and sub-100ms latency",
    decisions: "Implemented CRDT for sync, used WebRTC for peer connections, IndexedDB for offline storage",
    outcome: "1,000+ active teams, 99.9% uptime, featured in ProductHunt top 10",
    reflection: "Conflict resolution was more complex than anticipated; would simplify the data model",
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
