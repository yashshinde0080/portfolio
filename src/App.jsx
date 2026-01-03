import { useEffect, useState } from "react"
import { loadConfig } from "@/lib/yamlLoader"
import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

function ErrorState({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Configuration Error</h1>
        <p className="text-muted-foreground mb-4">
          Failed to load portfolio configuration.
        </p>
        <code className="text-sm bg-muted p-2 rounded block">
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

  useEffect(() => {
    loadConfig()
      .then((data) => {
        if (data) {
          setConfig(data)
          // Update document title
          if (data.seo?.title) {
            document.title = data.seo.title
          }
        } else {
          setError(new Error("Config returned null"))
        }
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <LoadingState />
  if (error || !config) return <ErrorState error={error} />

  return (
    <div className="min-h-screen">
      <main>
        <Hero profile={config.profile} />
        <Skills skills={config.skills} projects={config.projects} />
        <Projects projects={config.projects} />
        <Contact profile={config.profile} />
      </main>
      <Footer profile={config.profile} />
    </div>
  )
}