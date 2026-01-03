import { useEffect, useState } from "react"
import { loadConfig } from "@/lib/yamlLoader"
import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Achievements from "@/components/sections/Achievements"
import Certifications from "@/components/sections/Certifications"
import Experience from "@/components/sections/Experience"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading configuration...</p>
      </div>
    </div>
  )
}

function ErrorState({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-destructive">Configuration Error</h1>
        <p className="text-muted-foreground mb-4">
          Failed to load portfolio configuration.
        </p>
        <code className="text-sm bg-muted p-2 rounded block text-left overflow-auto max-h-40">
          {error?.message || "Unknown error"}
        </code>
      </div>
    </div>
  )
}

export default function App() {
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    loadConfig()
      .then((data) => {
        if (data) {
          setConfig(data)
          // Update document title
          if (data.seo?.title) {
            document.title = data.seo.title
          }
          // Set meta description
          if (data.seo?.description) {
            let meta = document.querySelector('meta[name="description"]')
            if (!meta) {
              meta = document.createElement('meta')
              meta.name = "description"
              document.head.appendChild(meta)
            }
            meta.content = data.seo.description
          }
        } else {
          setError(new Error("Config returned null"))
        }
      })
      .catch((err) => {
        console.error("Config Loading Error:", err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <LoadingState />
  if (error || !config) return <ErrorState error={error} />

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <main>
        <Hero profile={config.profile} />
        <Skills 
            skills={config.skills} 
            setHoveredSkill={setHoveredSkill}
        />
        <Projects 
            projects={config.projects} 
            hoveredSkill={hoveredSkill}
        />
        <Achievements achievements={config.achievements} />
        <Certifications certifications={config.certifications} />
        <Experience experience={config.experience} />
        <Contact contact={config.contact} />
      </main>
      <Footer profile={config.profile} contact={config.contact} />
    </div>
  )
}