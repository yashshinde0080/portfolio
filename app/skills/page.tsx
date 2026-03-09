"use client"

import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/lib/config"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-12 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
             <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                <Badge variant="outline" className="animate-fade-in-up">Technical Expertise</Badge>
                <h1 className="text-4xl font-bold lg:text-6xl animate-fade-in-up delay-100">My Arsenal</h1>
                <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
                    Tools and technologies I use to bring ideas to life.
                </p>
             </div>

             <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
                {siteConfig.sections.skills.categories.map((category, index) => {
                    const Icon = category.icon as LucideIcon
                    return (
                        <div 
                            key={index} 
                            className="group relative bg-background rounded-3xl p-8 shadow-sm border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Decorative background element */}
                            <div className="absolute -right-12 -top-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-45 group-hover:scale-175 duration-700">
                                <Icon className="w-64 h-64 text-primary" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-primary/10 rounded-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold">{category.name}</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map(skill => (
                                        <Badge 
                                            key={skill} 
                                            variant="secondary" 
                                            className="text-base px-4 py-2 bg-muted hover:bg-primary/20 transition-colors cursor-default border border-transparent hover:border-primary/50"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })}
             </div>
        </div>
      </main>
    </div>
  )
}
