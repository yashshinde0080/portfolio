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
    event: "TechCrunch Disrupt Hackathon",
    date: "September 2024",
    location: "San Francisco, CA",
    theme: "AI for Social Good",
    team: 4,
    role: "Full-Stack Developer & Team Lead",
    project: "AccessiBot - AI-powered accessibility testing tool",
    description:
      "Built an automated tool that scans websites for accessibility issues and provides actionable recommendations using GPT-4 and computer vision.",
    result: "🏆 1st Place Overall Winner",
    outcome: "Secured $10K prize money and meetings with 3 VCs",
    tech: ["Next.js", "OpenAI API", "Puppeteer", "PostgreSQL"],
    image: "/team-presenting-at-hackathon-demo.jpg",
    demo: "/accessibility-testing-dashboard-interface.jpg",
  },
  {
    event: "React Summit Hackathon",
    date: "June 2024",
    location: "Remote",
    theme: "Developer Tools",
    team: 3,
    role: "Frontend Lead",
    project: "ComponentViz - Visual component dependency analyzer",
    description: "Created a VS Code extension that visualizes React component dependencies and prop flow in real-time.",
    result: "🥈 2nd Place & Community Favorite",
    outcome: "500+ GitHub stars within first week",
    tech: ["TypeScript", "VS Code API", "D3.js", "AST Parser"],
    image: "/coding-at-hackathon-workspace.jpg",
    demo: "/component-dependency-graph-visualization.jpg",
  },
  {
    event: "Hack the Planet",
    date: "March 2024",
    location: "Austin, TX",
    theme: "Climate Tech",
    team: 5,
    role: "Backend Developer",
    project: "CarbonTrack - Personal carbon footprint calculator",
    description:
      "Developed a mobile-first web app that helps users track and reduce their carbon footprint through daily activities.",
    result: "🥉 3rd Place & Best Design",
    outcome: "Featured in TechCrunch, 2,000+ beta signups",
    tech: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    image: "/hackathon-team-brainstorming.jpg",
    demo: "/mobile-carbon-tracking-app-interface.jpg",
  },
  {
    event: "GitHub GameOff",
    date: "November 2023",
    location: "Online",
    theme: "Game Development",
    team: 2,
    role: "Developer",
    project: "CodeQuest - Educational coding game",
    description:
      "Built an interactive browser game that teaches programming concepts through puzzle-solving challenges.",
    result: "🎮 Top 50 Submissions",
    outcome: "Open-sourced and used by 10+ coding bootcamps",
    tech: ["Phaser.js", "TypeScript", "WebGL", "Firebase"],
    image: "/placeholder.svg?height=400&width=600",
    demo: "/placeholder.svg?height=400&width=600",
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
              Read Blog Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
