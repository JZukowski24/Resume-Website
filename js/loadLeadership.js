fetch("data/leadership.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("leadership-container");

data.forEach(item => {

const card = document.createElement("div");
card.classList.add("leadership-card");

card.innerHTML = `
<h3>${item.organization}</h3>
<p><strong>Role:</strong> ${item.role}</p>
<p>${item.description}</p>
`;

container.appendChild(card);

});

});