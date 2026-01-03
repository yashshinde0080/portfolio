import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { animateSectionEntry, animateButtonPress } from "@/lib/motion"

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
                className="h-12 px-8 w-full sm:w-auto" 
                asChild
                onMouseDown={(e) => animateButtonPress(e.currentTarget)}
            >
                <a href={`mailto:${contact.email}`}>
                Email Me
                </a>
            </Button>
            {contact.linkedin && (
                <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-8 w-full sm:w-auto bg-background" 
                    asChild
                    onMouseDown={(e) => animateButtonPress(e.currentTarget)}
                >
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                </Button>
            )}
             {contact.github && (
                <Button 
                    size="lg" 
                    variant="ghost" 
                    className="h-12 px-8 w-full sm:w-auto" 
                    asChild
                    onMouseDown={(e) => animateButtonPress(e.currentTarget)}
                >
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                </Button>
            )}
          </div>
      </div>
    </section>
  )
}
