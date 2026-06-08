import { ProjectCard } from "../components/HomeCards"

export function ProjectsSection({ projects, registerRevealSection }) {
    return (
        <section className="projects-section reveal-section" id="projects" ref={registerRevealSection}>
            <div className="projects-shell">
                <h2 className="projects-title reveal-item">Реализованные проекты</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
