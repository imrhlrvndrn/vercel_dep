let express = require("express");
let app = express();
let PORT = 3000;

let githubPublicData = {
  username: "ankit123",
  fullName: "Ankit Kumar",
  email: "ankit@gmail.com",
  repositories: 24,
  gists: 12,
  joinedOn: "Sep 2018",
};

// Question 1:

function getProfileUrl(githubPublicData) {
  return "https://github.com/" + githubPublicData.username;
}

app.get("/github-profile", (req, res) => {
  let ProfileUrl = getProfileUrl(githubPublicData);
  res.json({ profileurl: ProfileUrl });
});

// Question 2:

function getPublicEmail(githubPublicData) {
  return githubPublicData.email;
}

app.get("/github-public-email", (req, res) => {
  let PublicEmail = getPublicEmail(githubPublicData);
  res.json({ publicEmail: PublicEmail });
});

// Question 3:

function getReposCount(githubPublicData) {
  return githubPublicData.repositories;
}

app.get("/github-repos-count", (req, res) => {
  let ReposCount = getReposCount(githubPublicData);
  res.json({ reposCount: ReposCount });
});

// Question 4:

function getGistsCount(githubPublicData) {
  return githubPublicData.gists;
}

app.get("/github-gists-count", (req, res) => {
  let GistsCount = getGistsCount(githubPublicData);
  res.json({ gistsCount: GistsCount });
});

// Question 5:

function getUserBio(githubPublicData) {
  return {
    fullName: githubPublicData.fullName,
    joinedOn: githubPublicData.joinedOn,
    email: githubPublicData.email,
  };
}

app.get("/github-user-bio", (req, res) => {
  let UserBio = getUserBio(githubPublicData);
  res.json(UserBio);
});

// Question 6:

function getRepoUrl(githubPublicData, repoName) {
  return "https://github.com/" + githubPublicData.username + "/" + repoName;
}

app.get("/github-repo-url", (req, res) => {
  let repoName = req.query.repoName;
  let RepoUrl = getRepoUrl(githubPublicData, repoName);
  res.json({ repoUrl: RepoUrl });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
