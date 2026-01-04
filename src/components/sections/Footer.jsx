import { ExternalLink } from "lucide-react"

export default function Footer({ profile, contact }) {
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
                className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub (opens in a new tab)"
              >
                GitHub
                <ExternalLink className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            )}
            {contact?.linkedin && (
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn (opens in a new tab)"
              >
                LinkedIn
                <ExternalLink className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
