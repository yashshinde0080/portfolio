import { useEffect, useRef, memo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { animateSectionEntry } from "@/lib/motion"

function Achievements({ achievements }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
        animateSectionEntry(sectionRef.current)
    }
  }, [])

  if (!achievements) return null

  return (
    <section className="py-gold-lg bg-muted/10 border-y border-border/40" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px]">
        <h2 className="text-2xl font-bold mb-gold-md">Signals of Trust</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
                  <Badge variant="outline" className="font-mono text-xs text-muted-foreground">{item.date}</Badge>
                </div>
                <p className="text-sm text-primary font-medium">{item.organization}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Optimized: Use React.memo to prevent unnecessary re-renders when parent state (e.g., hoveredSkill) changes.
export default memo(Achievements)
