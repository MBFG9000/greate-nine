import { useState } from "react"

import { ProjectCard } from "../components/HomeCards"
import { ProjectModal } from "../components/ProjectModal"

export function ProjectsSection({ projects, registerRevealSection }) {
    const [activeProject, setActiveProject] = useState(null)

    return (
        <section className="projects-section reveal-section" id="projects" ref={registerRevealSection}>
            <div className="projects-shell">
                <h2 className="projects-title reveal-item">Наше участие в проектах</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} onOpen={setActiveProject} />
                    ))}
                </div>
            </div>
            <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        </section>
    )
}
