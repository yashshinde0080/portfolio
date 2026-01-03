import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills({ skills, projects }) {
  const [activeSkill, setActiveSkill] = useState(null)

  if (!skills) return null

  const getProjectsUsingSkill = (skillName) => {
    if (!projects) return []
    return projects.filter(project => {
      const allTech = Object.values(project.tech).flat()
      return allTech.includes(skillName)
    })
  }

  const skillCategories = Object.entries(skills)

  return (
    <section id="skills" className="section bg-muted/30">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map(([category, categorySkills]) => (
            <Card key={category} className="bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => {
                    const skillName = typeof skill === 'string' ? skill : skill.name
                    const usedIn = typeof skill === 'object' ? skill.used_in : []
                    const projectCount = usedIn.length || getProjectsUsingSkill(skillName).length
                    
                    return (
                      <Badge
                        key={skillName}
                        variant={activeSkill === skillName ? "default" : "secondary"}
                        className="cursor-pointer transition-all hover:scale-105"
                        onMouseEnter={() => setActiveSkill(skillName)}
                        onMouseLeave={() => setActiveSkill(null)}
                      >
                        {skillName}
                        {projectCount > 0 && (
                          <span className="ml-1 opacity-60">({projectCount})</span>
                        )}
                      </Badge>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Skill Projects */}
        {activeSkill && (
          <div className="mt-8 p-4 bg-card rounded-lg border">
            <p className="text-sm text-muted-foreground">
              <strong>{activeSkill}</strong> used in:{" "}
              {getProjectsUsingSkill(activeSkill).map(p => p.title).join(", ") || "Multiple projects"}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}