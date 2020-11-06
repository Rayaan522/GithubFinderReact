import axios from 'axios';
 const github = axios.create({
     baseURL:'https://api.github.com',
     timeout:1000,
     headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN}
 })
//  let githubClientId;
// let githubClientSecret;

// if (process.env.NODE_ENV !== 'production') {
//   githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
// } else {
//   githubClientId = process.env.GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
// }

 export const searchUsers = async text => {
     const res = await github.get( `/search/users?q=${text}`);
     return res.data.items;
 }

 export const getUserAndRepos = async username => {
     const repos = await github.get(`/users/${username}/repos?per_page=5&sort=created:asc?`);

     const user = await github.get(`/users/${username}`);
     return { user: user.data,repos: repos.data}

 }
