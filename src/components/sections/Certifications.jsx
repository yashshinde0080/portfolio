import { useEffect, useRef, memo } from "react"
import { Badge } from "@/components/ui/badge"
import { animateSectionEntry } from "@/lib/motion"

// Optimization: Use React.memo to prevent re-renders when parent state (like hoveredSkill) changes.
// Props (certifications) are stable.
const Certifications = memo(function Certifications({ certifications }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
        animateSectionEntry(sectionRef.current)
    }
  }, [])

  if (!certifications) return null

  return (
    <section className="py-gold-lg bg-background border-t border-border/40" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px]">
        <h2 className="text-2xl font-bold mb-gold-md tracking-tight">Certifications & Learning</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div 
                key={index} 
                className="flex items-center justify-between p-4 rounded-lg border border-border/40 hover:border-primary/40 bg-card/30 transition-all duration-300 hover:bg-card/50"
            >
                <div>
                    <h3 className="font-medium text-sm text-foreground/90">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
                <Badge variant="secondary" className="text-[10px] font-mono opacity-70 ml-2 shrink-0">
                    {cert.date}
                </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Certifications
