import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Work Experience - Portfolio",
  description: "Professional roles and contributions across different organizations",
}

const experiences = [
  {
    role: "AI & ML Student",
    company: "JCER",
    location: "Belagavi,Karnataka,India",
    period: "2022 — Present",
    logo: "/tech-company-logo.png",
    description: "JCER is approved by AICTE and UGC, affiliated to Visvesvaraya Technological University (VTU), Belagavi",
    responsibilities: [
      // "Architected and implemented a company-wide design system used by 50+ engineers",
      // "Reduced bundle size by 40% through code splitting and lazy loading strategies",
      // "Led migration from Create React App to Next.js, improving performance by 60%",
      // "Mentored 5 junior engineers on best practices and code quality",
      // "Collaborated with design team to establish component API standards",
    ],
    tech: ["Student"],
    image: "/modern-web-dashboard.webp",
  },
  // {
    // role: "Frontend Developer",
    // company: "StartupXYZ",
    // location: "Remote",
    // period: "2020 — 2022",
    // logo: "/abstract-startup-logo.png",
    // description: "Built core product features and established engineering practices",
    // responsibilities: [
      // "Developed customer-facing dashboard serving 10,000+ daily active users",
      // "Implemented real-time collaboration features using WebSockets",
      // "Established testing culture with 85% code coverage using Jest and Testing Library",
      // "Optimized API calls reducing server load by 30%",
      // "Created comprehensive component documentation",
    // ],
    // tech: ["React", "Redux", "Node.js", "PostgreSQL"],
    // image: "/collaborative-tool-interface.jpg",
  // },
  // {
    // role: "Junior Web Developer",
    // company: "Digital Agency",
    // location: "New York, NY",
    // period: "2018 — 2020",
    // logo: "/abstract-agency-logo.png",
    // description: "Delivered client projects and maintained web applications",
    // responsibilities: [
      // "Built responsive websites for 20+ clients across various industries",
      // "Integrated third-party APIs including Stripe, Mailchimp, and Google Maps",
      // "Improved site performance achieving 90+ Lighthouse scores",
      // "Conducted code reviews and maintained coding standards",
      // "Provided technical support and bug fixes for production applications",
    // ],
    // tech: ["JavaScript", "Vue.js", "PHP", "WordPress"],
    // image: "/marketing-website-landing-page.jpg",
  // },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Work Experience</h1>
          <p className="text-muted-foreground">Professional roles and key contributions</p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h2>
                      <p className="text-foreground">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                </div>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden border border-border mb-6 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500">
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={`${exp.company} work sample`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">Key Contributions</h3>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground leading-relaxed pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary hover:text-foreground transition-colors duration-300"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border border-border rounded-full text-foreground hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {index < experiences.length - 1 && <div className="mt-12 border-b border-border" />}
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <Button asChild className="group hover:scale-105 transition-transform duration-300">
            <Link href="/projects">
              View Projects{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="hover:scale-105 transition-transform duration-300 bg-transparent"
          >
            <a href="https://www.linkedin.com/in/yash-shinde-3a1ab5274/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </main>
    </div>
  )
}
