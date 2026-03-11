async function loadRepos(){

const username = "yourusername"

const response = await fetch(
`https://api.github.com/users/${username}/repos`
)

const repos = await response.json()

console.log(repos)

}

loadRepos()