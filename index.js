require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
  "login": "anushkam23",
  "id": 140802626,
  "node_id": "U_kgDOCGR6Qg",
  "avatar_url": "https://avatars.githubusercontent.com/u/140802626?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/anushkam23",
  "html_url": "https://github.com/anushkam23",
  "followers_url": "https://api.github.com/users/anushkam23/followers",
  "following_url": "https://api.github.com/users/anushkam23/following{/other_user}",
  "gists_url": "https://api.github.com/users/anushkam23/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/anushkam23/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/anushkam23/subscriptions",
  "organizations_url": "https://api.github.com/users/anushkam23/orgs",
  "repos_url": "https://api.github.com/users/anushkam23/repos",
  "events_url": "https://api.github.com/users/anushkam23/events{/privacy}",
  "received_events_url": "https://api.github.com/users/anushkam23/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 17,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-28T09:25:15Z",
  "updated_at": "2024-07-16T22:36:43Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('hiteshdotcom')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login at chai aur code </h1>')
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>Chai aur code</h2>")
})

//callback to send github data which is in json format
app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})