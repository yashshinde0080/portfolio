"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/hackathons", label: "Hackathons" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-foreground font-medium hover:text-muted-foreground transition-colors">
            Your Name
          </Link>
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-all duration-300 hover:scale-105",
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
