import { useEffect, useRef, memo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { animateSectionEntry, animateHero3D } from "@/lib/motion"

function Hero({ profile }) {
  const textRef = useRef(null)
  const visualContainerRef = useRef(null)
  const visualObjectRef = useRef(null)

  useEffect(() => {
    if (profile) {
      // Entry Animation
      animateSectionEntry(textRef.current)
      
      // 3D Scene Animation
      const cleanup3D = animateHero3D(visualContainerRef.current, visualObjectRef.current)
      
      return () => {
        if (cleanup3D) cleanup3D()
      }
    }
  }, [profile])

  if (!profile) return null

  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 relative overflow-hidden bg-background">
       {/* Background Elements - Subtle Glare */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gold-xl items-center">
          
          {/* Left Column: Text */}
          <div ref={textRef} className="space-y-gold-md opacity-0">
            
            <div className="space-y-2">
              <h2 className="text-primary font-medium tracking-wide text-sm uppercase">
                {profile.role}
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                {profile.name}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              {profile.value_proposition}
            </p>

            {/* Proof Bullets */}
            <div className="flex flex-wrap gap-3">
              {profile.proof_bullets.map((point, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="px-3 py-1 text-xs md:text-sm font-normal bg-secondary/50 backdrop-blur border border-border/50 text-foreground/80 hover:bg-secondary transition-colors cursor-default"
                >
                  {point}
                </Badge>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-gold-sm">
              <Button size="lg" className="h-12 px-8 font-medium" asChild>
                <a href={profile.cta.primary.link}>
                  {profile.cta.primary.text}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent" asChild>
                <a href={profile.cta.secondary.link}>
                  {profile.cta.secondary.text}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div 
            ref={visualContainerRef}
            className="relative hidden lg:block [perspective:1000px] group"
          >
            <div 
                ref={visualObjectRef}
                className="relative z-10 rounded-2xl overflow-hidden glass p-4 border border-white/10 shadow-2xl opacity-0"
            >
                <img 
                    src="/images/hero_visual.png" 
                    alt="AI Engineering Visualization" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>
            {/* Decorative Grid behind */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl -z-10 rounded-full opacity-40"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Optimized: Use React.memo to prevent unnecessary re-renders when parent state (e.g., hoveredSkill) changes.
export default memo(Hero)