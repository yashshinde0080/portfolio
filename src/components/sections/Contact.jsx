import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { animateSectionEntry, animateButtonPress } from "@/lib/motion"
import { ExternalLink, Mail } from "lucide-react"

export default function Contact({ contact }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
        animateSectionEntry(sectionRef.current)
    }
  }, [])

  if (!contact) return null

  return (
    <section id="contact" className="py-gold-xl bg-muted/20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-lg text-muted-foreground mb-10 text-balance">
            Currently available for select freelance opportunities and consulting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
                size="lg" 
                className="h-12 px-8 w-full sm:w-auto group"
                asChild
                onMouseDown={(e) => animateButtonPress(e.currentTarget)}
            >
                <a href={`mailto:${contact.email}`}>
                <Mail className="size-4" aria-hidden="true" />
                Email Me
                </a>
            </Button>
            {contact.linkedin && (
                <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-8 w-full sm:w-auto bg-background group"
                    asChild
                    onMouseDown={(e) => animateButtonPress(e.currentTarget)}
                >
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
                    LinkedIn
                    <ExternalLink className="size-4 opacity-50 transition-transform group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                </Button>
            )}
             {contact.github && (
                <Button 
                    size="lg" 
                    variant="ghost" 
                    className="h-12 px-8 w-full sm:w-auto group"
                    asChild
                    onMouseDown={(e) => animateButtonPress(e.currentTarget)}
                >
                <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
                    GitHub
                    <ExternalLink className="size-4 opacity-50 transition-transform group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                </Button>
            )}
          </div>
      </div>
    </section>
  )
}
