async function loadProjects() {

    const response = await fetch("data/projects.json");
    const projects = await response.json();

    const container = document.getElementById("projects-container");

    projects.forEach(project => {

        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <img src="${project.image}" class="project-img">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p>Tech: ${project.tech.join(", ")}</p>
            <a href="${project.github}" target="_blank">GitHub</a>
        `;

        container.appendChild(card);

    });

}

loadProjects();