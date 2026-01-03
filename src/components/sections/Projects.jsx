import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function ProjectCard({ project, onViewDetails }) {
  const allTech = Object.values(project.tech).flat()

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {/* Project Image */}
      {project.image && (
        <div className="aspect-video bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          {project.featured && (
            <Badge variant="default" className="ml-2">Featured</Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Problem Statement */}
        <p className="text-muted-foreground">{project.problem}</p>
        
        {/* Impact Metrics */}
        <div className="space-y-1">
          {project.impact.slice(0, 2).map((item, index) => (
            <div key={index} className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              {item}
            </div>
          ))}
        </div>
        
        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-1">
          {allTech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {allTech.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{allTech.length - 4}
            </Badge>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" onClick={() => onViewDetails(project)}>
            View Details
          </Button>
          {project.repo && (
            <Button size="sm" variant="ghost" asChild>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectDetails({ project }) {
  if (!project) return null

  return (
    <div className="space-y-6">
      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h4 className="font-semibold text-red-500">Problem</h4>
          <p className="text-muted-foreground">{project.problem}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-green-500">Solution</h4>
          <p className="text-muted-foreground">{project.solution}</p>
        </div>
      </div>

      {/* Impact */}
      <div className="space-y-3">
        <h4 className="font-semibold">Impact</h4>
        <ul className="space-y-2">
          {project.impact.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="space-y-3">
        <h4 className="font-semibold">Tech Stack</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(project.tech).map(([category, techs]) => (
            <div key={category} className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {category}
              </p>
              <div className="flex flex-wrap gap-1">
                {techs.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t">
        {project.repo && (
          <Button asChild>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </Button>
        )}
        {project.live && (
          <Button variant="outline" asChild>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null)

  if (!projects || projects.length === 0) return null

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-medium text-muted-foreground mb-6">
              Featured Work
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-muted-foreground mb-6">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}

        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            <ProjectDetails project={selectedProject} />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}