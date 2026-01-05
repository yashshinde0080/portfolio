import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Blog - Portfolio",
  description: "Technical insights, lessons learned, and thoughts on software development",
}

const posts = [
  {
    title: "Building Accessible Design Systems",
    date: "December 2024",
    readTime: "8 min read",
    excerpt:
      "Lessons learned from building a component library used by thousands of developers. Focus on ARIA patterns, keyboard navigation, and screen reader testing.",
    slug: "accessible-design-systems",
    topics: ["Accessibility", "Design Systems", "React"],
  },
  {
    title: "The Real Cost of useEffect",
    date: "November 2024",
    readTime: "6 min read",
    excerpt:
      "Why I stopped fetching data in useEffect and what I do instead. Exploring better patterns for data synchronization in React applications.",
    slug: "cost-of-useeffect",
    topics: ["React", "Performance", "Patterns"],
  },
  {
    title: "Optimizing Next.js Bundle Size",
    date: "October 2024",
    readTime: "10 min read",
    excerpt:
      "Practical strategies that reduced our production bundle by 40%. Code splitting, dynamic imports, and analyzing what really matters.",
    slug: "nextjs-bundle-optimization",
    topics: ["Next.js", "Performance", "Web Vitals"],
  },
  {
    title: "Type-Safe API Calls with tRPC",
    date: "September 2024",
    readTime: "7 min read",
    excerpt:
      "How we eliminated API runtime errors by adopting end-to-end type safety. A deep dive into tRPC benefits and migration strategy.",
    slug: "type-safe-apis-trpc",
    topics: ["TypeScript", "API Design", "tRPC"],
  },
  {
    title: "When to Use Server Components",
    date: "August 2024",
    readTime: "9 min read",
    excerpt:
      "Practical decision framework for choosing between Server and Client Components in Next.js 13+. Real-world examples and performance implications.",
    slug: "when-server-components",
    topics: ["React", "Next.js", "Server Components"],
  },
  {
    title: "Debugging Production React Apps",
    date: "July 2024",
    readTime: "12 min read",
    excerpt:
      "Tools and techniques for tracking down elusive production bugs. Error boundaries, logging strategies, and reproduction techniques.",
    slug: "debugging-production-react",
    topics: ["React", "Debugging", "DevOps"],
  },
  {
    title: "CSS-in-JS vs Tailwind: 2024 Perspective",
    date: "June 2024",
    readTime: "11 min read",
    excerpt:
      "After using both approaches in production, here are my findings. Performance benchmarks, developer experience, and when to choose each.",
    slug: "css-in-js-vs-tailwind",
    topics: ["CSS", "Tailwind", "Performance"],
  },
  {
    title: "Writing Better Git Commits",
    date: "May 2024",
    readTime: "5 min read",
    excerpt:
      "Small changes to commit messages that made code reviews 50% faster. Conventions that actually help your team.",
    slug: "better-git-commits",
    topics: ["Git", "Best Practices", "Team"],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Blog</h1>
          <p className="text-muted-foreground">Technical insights and lessons learned</p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group pb-8 border-b border-border last:border-0 hover:border-foreground/20 transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4 mt-1" />
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {post.topics.map((topic) => (
                    <span key={topic} className="px-2 py-1 text-xs border border-border rounded text-foreground">
                      {topic}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 border border-border rounded-xl bg-muted/30">
          <h2 className="text-xl font-semibold text-foreground mb-3">Writing Philosophy</h2>
          <p className="text-muted-foreground leading-relaxed">
            I write about real problems I've encountered and solved. No theoretical exercises or clickbait. Every post
            includes practical examples and honest reflections on what worked and what didn't.
          </p>
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
