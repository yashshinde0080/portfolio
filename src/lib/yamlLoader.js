import yaml from "js-yaml"

export async function loadConfig() {
  try {
    const response = await fetch("/src/config/portfolio.yaml")
    if (!response.ok) {
      throw new Error(`Failed to load config: ${response.status}`)
    }
    const text = await response.text()
    return yaml.load(text)
  } catch (error) {
    console.error("Error loading portfolio config:", error)
    return null
  }
}

export function getProjectsBySkill(projects, skillName) {
  return projects.filter(project => {
    const allTech = Object.values(project.tech).flat()
    return allTech.includes(skillName)
  })
}

export function getFeaturedProjects(projects) {
  return projects.filter(project => project.featured)
}