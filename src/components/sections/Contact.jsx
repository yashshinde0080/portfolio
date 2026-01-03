import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact({ profile }) {
  if (!profile) return null

  return (
    <section id="contact" className="section bg-muted/30">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8">
            Open to opportunities in AI/ML engineering and full-stack development.
          </p>
          
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href={`mailto:${profile.email}`}>
                    Email Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                {profile.linkedin && (
                  <Button size="lg" variant="outline" asChild>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}