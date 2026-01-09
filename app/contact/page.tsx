"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:syash0080@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Contact</h1>
          <p className="text-muted-foreground">Let's discuss your project or just say hello</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-600">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full group hover:scale-105 transition-transform duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
              <h2 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always interested in hearing about new projects, opportunities, or just connecting with fellow
                developers. Feel free to reach out through the form or via any of the channels below.
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
              <h3 className="font-medium text-foreground mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:syash0080@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  syash0080@gmail.com
                </a>
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-600">
              <h3 className="font-medium text-foreground mb-4">Social Links</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/yashshinde0080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/yash-shinde-3a1ab5274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>

              </div>
            </div>

            <div className="p-6 border border-border rounded-xl bg-muted/30 hover:bg-muted/50 hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
              <h3 className="font-medium text-foreground mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24-48 hours. For urgent inquiries, please mention it in the subject line.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 border border-border rounded-xl text-center hover:border-primary/50 hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-800">
          <h2 className="text-xl font-semibold text-foreground mb-3">Looking to Collaborate?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm currently available for freelance projects and consulting opportunities. Whether you need help with a
            specific technical challenge or want to build something from scratch, let's talk.
          </p>
          <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300">
            <a href="mailto:syash0080@gmail.com">Start a Conversation</a>
          </Button>
        </div>
      </main>
    </div>
  )
}
