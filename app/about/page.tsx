import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "About - Portfolio",
  description: "Learn more about my background, skills, and approach to software development",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl font-semibold text-foreground mb-4">About</h1>
          <p className="text-muted-foreground">How I think, work, and what I value</p>
        </div>

        {/* Profile Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
          <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-border mb-8 hover:scale-105 hover:shadow-xl transition-all duration-500">
            <Image src="/professional-headshot.jpeg" alt="Profile photo" fill className="object-cover" />
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              I am Yash Shinde, an undergraduate student specializing in Artificial Intelligence and Machine Learning, with a strong interest in building practical, scalable, and ethically responsible technology solutions. My academic focus and hands-on project experience center on applying AI, software engineering, and automation to solve real-world problems across diverse domains.
           </p>

            <p className="text-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              I have experience designing and developing AI and Ml systems, including AI-driven applications, agent-based architectures, automation workflows, and full-stack web platforms. My technical skill set includes Python, Flask/FastAPI, SQL, Supabase, modern frontend technologies, and AI frameworks such as LangChain and LangGraph, with exposure to authentication systems, vector databases, and API integrations.
            </p>

            <p className="text-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              I approach development with a product-oriented and systems-thinking mindset, emphasizing clean architecture, maintainability, and scalability. My interests include agentic AI, applied machine learning, and AI for social impact, and I aim to build solutions that deliver measurable value and can transition from prototypes to real-world deployment.
            </p>
          </div>
        </div>

        {/* How I Work Section */}
        <div className="mb-16 p-8 border border-border rounded-xl bg-muted/30 hover:bg-muted/50 hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
          <h2 className="text-2xl font-semibold text-foreground mb-6">How I Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Research First
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I start by understanding constraints, user needs, and technical requirements before writing code.
              </p>
            </div>
            <div className="group hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Iterate Quickly
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I build in small, testable increments and gather feedback early to validate assumptions.
              </p>
            </div>
            <div className="group hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Document Decisions
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I maintain clear documentation of architectural choices and trade-offs for future reference.
              </p>
            </div>
            <div className="group hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Measure Impact
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I track metrics and outcomes to understand what works and continuously improve solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Technical Focus</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Python & Backend Development",
              "Flask & FastAPI",
              "AI & Machine Learning Systems",
              "Agentic Architectures & Automation",
              "Databases & Data Layer",
              "Retrieval-Augmented Generation (RAG)",
              "Performance Optimization",
              "API Integration & System Interoperability",
              "System Design & Architecture",
              "Version Control & Collaboration",
            ].map((skill, index) => (
              <div
                key={skill}
                className="px-4 py-3 border border-border rounded-lg text-sm text-foreground hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${800 + index * 50}ms`, animationDuration: "500ms" }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Work Environment</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border hover:scale-105 hover:shadow-xl transition-all duration-500">
              <Image src="/minimal-desk-setup-with-computer.jpg" alt="Workspace setup" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border hover:scale-105 hover:shadow-xl transition-all duration-500">
              <Image
                src="/code-editor-with-clean-interface.jpg"
                alt="Development environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1100">
          <Button asChild className="group hover:scale-105 transition-transform duration-300">
            <Link href="/experience">
              View Experience{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          {/* <Button variant="outline" className="hover:scale-105 transition-transform duration-300 bg-transparent"> */}
            {/* <Download className="mr-2 h-4 w-4" /> */}
            {/* Download Resume */}
          {/* </Button> */}
        </div>
      </main>
    </div>
  )
}
