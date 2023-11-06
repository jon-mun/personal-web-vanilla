const projectsData = [
  {
    title: 'Joints Logic Competition',
    imageSrc: 'img/joints.png',
    description:
      'The Joints Logic Competition website serves as an information hub for the ongoing competition and as an exam platform for participants. Their answers are automatically stored in our database and automatically graded when the participant submits their exam.',
    link: 'https://github.com/Jogja-Information-Technology-Session/joints23-jlc',
  },
  {
    title: 'Diet Dash',
    imageSrc: 'img/dietdash.png',
    description:
      'In this college software engineering project, our goal is to develop a food ordering and delivery app similar to GoFood. The project is composed of four repositories: back end, customer app, merchant app, and driver app. The mobile applications communicate with the backend through REST API and Web Sockets. To calculate routes, we utilize Openrouteservice.',
    link: 'https://github.com/Lejhat-Bergijhi',
  },
];

function generateProjectHTML(project) {
  return `
      <article class="project">
        <img src="${project.imageSrc}" alt="${project.title}" />
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}">Read More</a>
        </div>
      </article>
    `;
}

function displayProjects() {
  const projectList = document.querySelector('.project-list');

  // Loop through the project data and generate HTML for each project
  projectsData.forEach((project) => {
    const projectHTML = generateProjectHTML(project);
    projectList.innerHTML += projectHTML;
  });
}

displayProjects();
