import { useEffect, useRef, memo } from "react"
import { Badge } from "@/components/ui/badge"
import { animateSectionEntry, animateCardHover } from "@/lib/motion"

// Optimization: Use React.memo to prevent re-renders when parent state changes.
// setHoveredSkill is stable, and skills is stable config data.
const Skills = memo(function Skills({ skills, setHoveredSkill }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
        animateSectionEntry(sectionRef.current)
    }
  }, [])

  if (!skills) return null

  return (
    <section id="skills" className="py-gold-xl relative bg-muted/20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px]">
        {/* Section Header */}
        <div className="mb-gold-md space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            core competencies and the technologies used to deliver production systems.
          </p>
        </div>
        
        <div className="grid gap-gold-md md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <div 
              key={index} 
              onMouseEnter={(e) => animateCardHover(e.currentTarget, true)}
              onMouseLeave={(e) => animateCardHover(e.currentTarget, false)}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-primary">
                 {/* Decorative dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                {category.domain}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 py-1.5 px-3"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Skills