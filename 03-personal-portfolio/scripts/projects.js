import { projects } from './projects-data.js';

const roadmapProjects = document.getElementById('roadmap-projects');
const codepenProjects = document.getElementById('codepen-projects');

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
    
    if (project.type === "codepen") {
    codepenProjects.innerHTML += `
      <section id="${project.id}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div>
          <a href="${project.link}" target="_blank">CodePen</a>
        </div>
      </section>
    `;
    }

    if (project.type === "js30") {
    const js30Projects = document.getElementById('js30-projects');
    js30Projects.innerHTML += `
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