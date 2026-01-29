import { projects } from './projects-data.js';

const projectsList = document.getElementById('projects-list');

for (let i = 0; i < 7; i++) {
  projectsList.innerHTML += `<li>
  <a href="${projects[projects.length - 1 - i].link}">${projects[projects.length - 1 - i].title}</a>
</li>`;
};

