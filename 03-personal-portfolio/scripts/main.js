import { projects } from './projects-data.js';

const projectsList = document.getElementById('projects-list');
const projectsShuffled = [...projects];

projectsShuffled.sort(() => Math.random() - 0.5);

for (let i = 0; i < 7; i++) {
  projectsList.innerHTML += `<li>
  <a href="${projectsShuffled[i].link}" target="_blank">${projectsShuffled[i].title}</a>
</li>`;
};

