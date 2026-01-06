"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good morning")
    else if (hour < 18) setGreeting("Good afternoon")
    else setGreeting("Good evening")
  }, [])

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-foreground font-medium hover:text-muted-foreground transition-colors">
              Yash Shinde
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link
                href="/experience"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/education" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Education
              </Link>
              <Link
                href="/hackathons"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Hackathons
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Research Papers
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <p className="text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              {greeting}
            </p>
            <h1 className="text-5xl font-semibold text-foreground leading-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              I’m Yash Shinde,
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              I’m Yash Shinde, an Artificial Intelligence student with a strong focus on building practical, real-world tech solutions. I work across AI, machine learning, web development, and automation, with hands-on experience in Python, full-stack development, and agent-based systems. I’m driven by solving meaningful problems, especially in areas like AI,ML,Deep learning,NLP,etc and I prefer building things that actually work over just talking about ideas.
            </p>
            <div className="flex items-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button asChild className="group">
                <Link href="/about">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="hover:scale-105 transition-transform duration-300 bg-transparent"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in-50 duration-1000 delay-300">
            <div className="aspect-square relative rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <Image src="/professional-developer-portrait.jpeg" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <Link
            href="/experience"
            className="group p-6 border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 delay-700"
          >
            <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Work Experience
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Explore my professional journey and key contributions across different organizations.
            </p>
            <div className="flex items-center text-sm text-primary">
              View Experience{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>

          <Link
            href="/projects"
            className="group p-6 border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 delay-[800ms]"
          >
            <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Featured Projects
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              A collection of my most impactful work with detailed case studies and outcomes.
            </p>
            <div className="flex items-center text-sm text-primary">
              Browse Projects{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>

          <Link
            href="/blog"
            className="group p-6 border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 delay-[900ms]"
          >
            <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Latest Writing
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Technical insights, lessons learned, and thoughts on software development.
            </p>
            <div className="flex items-center text-sm text-primary">
              Read Reseach Paper{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 delay-1000">
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-300">
            <a href="https://github.com/yashshinde0080" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-300">
            <a href="https://www.linkedin.com/in/yash-shinde-3a1ab5274/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          {/* <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-300"> */}
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> */}
              {/* <Twitter className="h-5 w-5" /> */}
            {/* </a> */}
          {/* </Button> */}
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-300">
            <a href="mailto:yashshinde0080@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </main>
    </div>
  )
}
