import { memo } from "react"

// Optimization: Use React.memo to prevent re-renders when parent state (like hoveredSkill) changes.
// Props are stable.
const Footer = memo(function Footer({ profile, contact }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {profile?.name}. Engineered with clean code principles.
          </p>
          <div className="flex gap-6">
            {contact?.github && (
              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            )}
            {contact?.linkedin && (
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer
