const params = new URLSearchParams(window.location.search);
const slug = params.get("project");

fetch(`projects/${slug}.md`)
.then(res => res.text())
.then(markdown => {

const titleMatch = markdown.match(/title:\s*(.*)/);
const descMatch = markdown.match(/description:\s*(.*)/);
const tagMatch = markdown.match(/tags:\s*(.*)/);

const title = titleMatch ? titleMatch[1] : "Project";
const description = descMatch ? descMatch[1] : "";
const tags = tagMatch ? tagMatch[1].split(",").map(tag => tag.trim()) : [];

// Remove metadata block
const cleanedMarkdown = markdown.replace(/---[\s\S]*?---/, '');

const html = marked.parse(cleanedMarkdown);

// Create tag HTML
const tagHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join("");

// Build project page
document.getElementById("project-content").innerHTML = `
<div class="project-header">

<h1>${title}</h1>

<p class="project-description">
${description}
</p>

<div class="tag-container">
${tagHTML}
</div>

</div>

<hr>

<div class="project-body">
${html}
</div>
`;

})
.catch(error => console.error("Error loading project:", error));