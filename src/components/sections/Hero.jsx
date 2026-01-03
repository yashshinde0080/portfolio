import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero({ profile }) {
  if (!profile) return null

  return (
    <section className="section min-h-[80vh] flex items-center">
      <div className="container-custom">
        <div className="max-w-3xl">
          {/* Name and Role */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {profile.role}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-medium mb-8">
            {profile.tagline}
          </p>

          {/* Proof Points */}
          <div className="flex flex-wrap gap-3 mb-10">
            {profile.proof.map((point, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-sm px-4 py-2"
              >
                {point}
              </Badge>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`mailto:${profile.email}`}>
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}