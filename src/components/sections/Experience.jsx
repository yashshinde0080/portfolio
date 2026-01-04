import { useEffect, useRef, memo } from "react"
import { animateSectionEntry } from "@/lib/motion"

// Optimization: Use React.memo to prevent re-renders when parent state (like hoveredSkill) changes.
// Props (experience) are stable.
const Experience = memo(function Experience({ experience }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
        animateSectionEntry(sectionRef.current)
    }
  }, [])

  if (!experience) return null

  return (
    <section className="py-gold-xl section bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px]">
        <h2 className="text-3xl font-bold mb-gold-lg tracking-tight">Experience</h2>
        
        <div className="border-l-2 border-border ml-3 md:ml-6 space-y-12">
          {experience.map((role, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-background border-2 border-muted-foreground group-hover:border-primary group-hover:scale-110 transition-all duration-300" />
              
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-bold flex flex-col md:flex-row md:items-center gap-2">
                  {role.role}
                  <span className="hidden md:inline text-muted-foreground font-normal">at</span>
                  <span className="text-primary">{role.company}</span>
                </h3>
                <span className="text-sm font-mono text-muted-foreground block">{role.period}</span>
              </div>
              
              <ul className="space-y-3">
                {role.outcomes.map((outcome, i) => (
                  <li key={i} className="text-muted-foreground flex items-start text-base leading-relaxed">
                    <span className="mr-3 text-primary mt-1.5 text-xs">◆</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Experience
