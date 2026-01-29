import { projects } from './projects-data.js';

const roadmapProjects = document.getElementById('roadmap-projects');

projects.forEach(project => {
    if (project.type === "roadmap") {
    roadmapProjects.innerHTML += `
      <section id="${project.id}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div>
          <a href="${project.link}" target="_blank">Website</a>
        </div>
      </section>
    `;
    }
  });