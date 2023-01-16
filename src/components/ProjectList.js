function ProjectList({ projects }) {
  console.log(projects);
  const projectL = projects.map( project =>{
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
      <div id="project-list">
        {/* render ProjectItem components here */ }
        { projectL }
        </div>
    </div>
  );
}
export default ProjectList;







