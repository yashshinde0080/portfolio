import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Hackathons - Portfolio",
  description: "Hackathon projects and achievements",
}

const hackathons = [
  {
    event: "HackForge Hackathon",
    date: "2025",
    location: "JCER, Ubambag, Belagavi",
    theme: "Data Science And Web Development",
    team: 3,
    role: "Data Science lead",
    project: "Eda for Students performance analysis and prediction",
    description:
      "Built an AI-powered web app that analyzes student performance data to identify trends and predict future outcomes, helping educators tailor interventions.",
    result: "Participation Certificate",
    outcome: "Improved data analysis skills and practical experience with AI models",
    tech: ["Python", "Numpy", "Pandas", "Chart.js"],
    image: "/hackforge.png",
    demo: "/hackforge2.png",
  },
  {
    event: "Nexora Hackathon",
    date: "2025",
    location: "JGI , Belagavi",
    theme: "Healthcare , Fentech and Sustainable Development and more",
    team: 4,
    role: "AI/ML Developer",
    project: "“Arogya Saathi”, an AI-powered health companion designed to help people in remote villages who suffer silently, far from PHCs and hospitals.",
    description: "The app bridges the gap between patients and doctors through smart, accessible technology.What it does: Online mode: Multilingual AI chatbot with triage — takes image or text input to suggest next steps. Offline mode: Advisory chatbot that works without internet, educating users about their symptoms and providing basic medical guidance.",
    result: "Participation Certificate",
    outcome: "Gained experience in AI integration and app development in HealthTech",
    tech: ["Python", "Streamlit", "Google Map Api ", "API Integration" , "Multilingual NLP" , "Offline Functionality"],
    image: "/nexora.png",
    demo: "/nexora2.png",
  },
]

export default function HackathonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Hackathons</h1>
          <p className="text-muted-foreground">Competitive projects built under time constraints</p>
        </div>

        <div className="space-y-16">
          {hackathons.map((hack, index) => (
            <article key={index} className="group">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-2xl font-semibold text-foreground">{hack.event}</h2>
                  <span className="text-sm text-muted-foreground">{hack.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{hack.location}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-primary">Theme: {hack.theme}</span>
                  <span className="text-muted-foreground flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    Team of {hack.team}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                  <Image
                    src={hack.image || "/placeholder.svg"}
                    alt={`${hack.event} participation`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                  <Image
                    src={hack.demo || "/placeholder.svg"}
                    alt={`${hack.project} demo`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Project: {hack.project}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{hack.description}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">{hack.result}</p>
                    <p className="text-sm text-muted-foreground">{hack.outcome}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">My Role:</span> {hack.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {hack.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs border border-border rounded-full text-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              {index < hackathons.length - 1 && <div className="mt-12 border-b border-border" />}
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 border border-border rounded-xl bg-muted/30">
          <h2 className="text-xl font-semibold text-foreground mb-3">Why Hackathons?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hackathons push me to think creatively under pressure, collaborate with diverse teams, and rapidly prototype
            solutions. They're excellent opportunities to experiment with new technologies, validate ideas quickly, and
            connect with the developer community.
          </p>
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link href="/blog">
              Read Research Papers Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
