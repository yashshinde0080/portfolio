import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Education - Portfolio",
  description: "Academic background and key achievements",
}

const education = [
  {
    degree: "Bachelor of Science in Computer Science(AIML)",
    institution: "Jain College of Engineering and Research, Belagavi",
    location: "Ubambag, Belagavi, Karnataka, India",
    period: "2014 — present",
    logo: "/tech-company-logo.png",
    // gpa: "3.8/4.0",
    achievements: [
      "Completed multiple individual and group projects requiring research, analysis, and presentation",
      "Developed practical skills in communication, problem-solving, and critical thinking"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Computer Networks",
      "Database Systems",
      "Operating Systems",
      "Artificial Intelligence",
      "Machine Learning",
    ],
  },
]

const certifications = [
  {
    title: "2025 Global Conference on Information Technology and Communication Networks (GITCON)",
    issuer: "IEEE",
    date: "2025",
    image: "/GITCON.png",
  },
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: "CS50",
    date: "2025",
    image: "/CS50_cer.png",
  },
  {
    title: "Oracle Certified Foundation Associate",
    issuer: "Oracle",
    date: "2025",
    image: "/Oracle.png",
  },
    {
    title: "Foundations of Artificial Intelligence :Introduction to Al and Intelligent Agents",
    issuer: "AI Campus",
    date: "2025",
    image: "/AI_Campus.png",
  },
    {
    title: "NKCon Conference",
    issuer: "IEEE",
    date: "2025",
    image: "/NKCon.png",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2025",
    image: "/FreeCodeCamp.png",
  }
]

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Education</h1>
          <p className="text-muted-foreground">Academic background and achievements</p>
        </div>

        {/* Degree Section */}
        {education.map((edu, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-start gap-6 mb-8">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-border flex-shrink-0">
                <Image
                  src={edu.logo || "/placeholder.svg"}
                  alt={`${edu.institution} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-foreground mb-1">{edu.degree}</h2>
                <p className="text-foreground mb-1">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">
                  {edu.location} · {edu.period}
                </p>
                {/* <p className="text-sm text-primary mt-2">GPA: {edu.gpa}</p> */}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-medium text-foreground mb-4 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground leading-relaxed pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-4 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  Relevant Coursework
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {edu.coursework.map((course) => (
                    <div key={course} className="text-xs px-3 py-2 border border-border rounded-lg text-foreground">
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-border rounded-xl p-6 hover:border-foreground/20 transition-colors"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden border border-border mb-4">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-primary">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Online Learning */}
        <div className="mb-16 p-8 border border-border rounded-xl bg-muted/30">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Continuous Learning</h2>
          <p className="text-muted-foreground mb-6">
            I believe in lifelong learning and regularly engage with new technologies and methodologies through online
            courses, conferences, and technical reading.
          </p>
          <div className="flex flex-wrap gap-2">
            {["IEEE", "FreeCodeCamp", "Udemy", "AI Campus", "Oracle", "CS50"].map((platform) => (
              <span key={platform} className="px-3 py-1 text-xs border border-border rounded-full text-foreground">
                {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/experience">
              View Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
