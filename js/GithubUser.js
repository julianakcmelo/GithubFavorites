export class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`
  
    return fetch(endpoint)
    .then(data => data.json())

    // DESESTRUTURAÇÃO
    .then((data) => {
      const { login, name, public_repos, followers } = data

      return {
        login: login,
        name: name,
        public_repos: public_repos,
        followers: followers
      }
    })
  }
}