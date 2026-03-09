import { Github, Linkedin, Mail, Twitter, Code, Brain, Globe, Wrench } from "lucide-react"

export const siteConfig = {
  name: "Yash Shinde",
  title: "AI & ML Engineer Student",
  description:
    "Passionate about building intelligent systems and solving complex problems with machine learning and software engineering.",
  url: "https://yashshinde.com",
  ogImage: "https://yashshinde.com/og.jpg",
  links: {
    github: "https://github.com/yashshinde0080",
    linkedin: "https://linkedin.com/in/yashshinde",
    twitter: "https://twitter.com/yashshinde",
    email: "mailto:contact@yashshinde.com",
  },
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/yashshinde0080",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yashshinde",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yashshinde",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:contact@yashshinde.com",
      icon: Mail,
    },
  ],
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Experience", href: "/experience" },
    { title: "Projects", href: "/projects" },
    { title: "Skills", href: "/skills" },
    { title: "Contact", href: "/contact" },
  ],
  sections: {
    hero: {
      headline: "Building Intelligence,",
      subheadline: "Coding the Future.",
      description:
        "I'm an AI & ML Engineer Student specializing in deep learning, computer vision, and scalable software architecture.",
      primaryCta: {
        title: "View Projects",
        href: "/projects",
      },
      secondaryCta: {
        title: "Contact Me",
        href: "/contact",
      },
    },
    about: {
      title: "About Me",
      description:
        "I am currently pursuing my degree in Artificial Intelligence and Machine Learning. My journey involves deep diving into neural networks, reinforcement learning, and full-stack development to bring AI models to life in real-world applications.",
      philosophy: {
        title: "Design Philosophy",
        content: "I believe that the best designs are invisible. They facilitate user goals without drawing attention to themselves. My approach blends data-driven decision making with intuitive aesthetics.",
        values: ["User-Centric", "Accessibility First", "Performance Oriented", "Continuous Iteration"],
      },
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Tech Startups Inc.",
          role: "AI Intern",
          duration: "Jun 2025 - Present",
          description:
            "Developing NLP models for customer support automation and optimizing inference pipelines.",
        },
        {
          company: "Open Source",
          role: "Contributor",
          duration: "Jan 2024 - Present",
          description:
            "Contributing to various machine learning libraries and tools in the open-source ecosystem.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "AI Image Generator",
          description:
            "A web application that uses Stable Diffusion to generate images from text prompts.",
          longDescription: "This project explores the capabilities of Generative AI by implementing a Stable Diffusion pipeline accessible via a React frontend. The application allows users to input natural language prompts and receive high-quality generated images in real-time.",
          challenges: "Handling the computational load of the Stable Diffusion model on limited hardware and optimizing the inference latency for a smooth user experience.",
          solution: "Implemented an asynchronous queueing system using Celery and Redis to manage requests, and used model quantization to reduce memory usage without significant loss in quality.",
          impact: "Enabled a community of 500+ users to experiment with generative art without requiring high-end GPUs.",
          github: "https://github.com/yashshinde0080/ai-image-gen",
          demo: "https://ai-image-gen.demo.com",
          tags: ["Python", "PyTorch", "React", "FastAPI"],
        },
        {
          title: "Portfolio Website",
          description:
            "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
          longDescription: "A personal brand portfolio designed to showcase technical skills and projects. It features a modern, clean aesthetic with a focus on usability and performance.",
          challenges: "Ensuring cross-browser compatibility and a seamless responsive design across all devices while maintaining high accessibility standards.",
          solution: "Utilized Tailwind CSS for a utility-first approach to styling and Shadcn UI for accessible, pre-built components. Implemented a config-driven architecture for easy content updates.",
          impact: "Established a professional online presence that effectively communicates my skills and experience to potential employers.",
          github: "https://github.com/yashshinde0080/portfolio",
          demo: "https://yashshinde.com",
          tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "Traffic Sign Recognition",
          description:
            "Deep learning model to classify traffic signs with 98% accuracy using CNNs.",
          longDescription: "A computer vision project designed to assist autonomous driving systems by accurately identifying and classifying traffic signs in real-time video feeds.",
          challenges: "Training a model that is robust to varying lighting conditions, occlusions, and image noise found in real-world driving scenarios.",
          solution: "Curated a diverse dataset with extensive data augmentation techniques. Designed a custom CNN architecture inspired by ResNet and utilized transfer learning to improve accuracy.",
          impact: "Achieved a 98% classification accuracy on the test set, demonstrating the potential for reliable integration into driver assistance systems.",
          github: "https://github.com/yashshinde0080/traffic-sign-recognition",
          demo: null,
          tags: ["Python", "TensorFlow", "OpenCV"],
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      categories: [
        {
          name: "Languages",
          icon: Code,
          skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
        },
        {
          name: "AI/ML",
          icon: Brain,
          skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "NLP", "LLMs"],
        },
        {
          name: "Web Dev",
          icon: Globe,
          skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
        },
        {
          name: "Tools",
          icon: Wrench,
          skills: ["Git", "Docker", "AWS", "Linux", "VS Code"],
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
      email: "contact@yashshinde.com",
    },
  },
}
