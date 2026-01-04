import { useEffect, useRef, memo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { animateRelationship, animateCardHover, animateSectionEntry } from "@/lib/motion"

// Optimization: Use React.memo. Note: This component WILL re-render when hoveredSkill changes,
// which is intended behavior to update highlighting.
const Projects = memo(function Projects({ projects, hoveredSkill }) {
  const itemsRef = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
        animateSectionEntry(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    if (!projects) return

    projects.forEach((project, index) => {
        const element = itemsRef.current[index]
        if (!element) return

        // Calculate state
        // If no skill is hovered, no one is dimmed.
        // If a skill IS hovered, only those NOT sharing it are dimmed.
        const isHighlighted = !hoveredSkill || project.tech_stack.includes(hoveredSkill)
        const isDimmed = !!hoveredSkill && !isHighlighted

        animateRelationship(element, isHighlighted, isDimmed)
    })
  }, [hoveredSkill, projects])

  if (!projects) return null

  return (
    <section id="projects" className="py-gold-xl bg-background text-foreground" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-gold-lg tracking-tight">Select Case Studies</h2>

        <div className="grid gap-gold-lg">
          {projects.map((project, index) => {
             return (
              <div 
                key={project.id}
                ref={el => itemsRef.current[index] = el}
                onMouseEnter={(e) => animateCardHover(e.currentTarget, true)}
                onMouseLeave={(e) => animateCardHover(e.currentTarget, false)}
                className="group relative grid md:grid-cols-12 gap-6 md:gap-12 items-start opacity-100"
              >
                  {/* Image Column */}
                  <div className="md:col-span-7 relative rounded-xl overflow-hidden border border-border/50 bg-muted/20 aspect-video group-hover:shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent z-10" />
                    {project.image && (
                         <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-5 flex flex-col h-full justify-center space-y-6 py-4">
                      <div className="space-y-2">
                          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tech_stack.map((tech) => (
                                <Badge 
                                    key={tech} 
                                    variant="outline" 
                                    className={cn(
                                        "text-xs transition-colors",
                                        hoveredSkill === tech ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground"
                                    )}
                                >
                                    {tech}
                                </Badge>
                            ))}
                          </div>
                      </div>

                      <div className="space-y-4">
                          <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Problem</h4>
                              <p className="text-base leading-relaxed">{project.problem}</p>
                          </div>
                          
                          <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Solution</h4>
                              <p className="text-base leading-relaxed">{project.solution}</p>
                          </div>

                          <div className="pt-2 border-t border-border/50 mt-4">
                               <p className="text-sm font-medium text-primary">
                                  Impact: <span className="text-foreground font-normal">{project.impact}</span>
                               </p>
                          </div>
                      </div>
                  </div>
              </div>
             )
          })}
        </div>
      </div>
    </section>
  )
})

export default Projects