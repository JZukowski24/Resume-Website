const projectFiles = [
"projects/motion-guided-mount.md"
];

const container = document.getElementById("projects-container");

let projectCards = [];

projectFiles.forEach(file => {

fetch(file)
.then(res => res.text())
.then(markdown => {

const titleMatch = markdown.match(/title:\s*(.*)/);
const descMatch = markdown.match(/description:\s*(.*)/);
const slugMatch = markdown.match(/slug:\s*(.*)/);
const tagMatch = markdown.match(/tags:\s*(.*)/);

const title = titleMatch ? titleMatch[1] : "Project";
const description = descMatch ? descMatch[1] : "";
const slug = slugMatch ? slugMatch[1] : "";

let tags = [];

if(tagMatch){
tags = tagMatch[1].split(",").map(tag => tag.trim());
}

const card = document.createElement("div");
card.classList.add("project-card");

tags.forEach(tag => card.classList.add(tag));

card.innerHTML = `
<h3>${title}</h3>
<p>${description}</p>
`;

card.onclick = () => {
window.location.href = `project.html?project=${slug}`;
};

container.appendChild(card);

projectCards.push(card);

})
.catch(error => console.error("Project loading error:", error));

});


function filterProjects(tag){

projectCards.forEach(card => {

if(tag === "all"){
card.style.display = "block";
return;
}

if(card.classList.contains(tag)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}