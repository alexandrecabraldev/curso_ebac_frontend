const userName = 'alexandrecabraldev';
const githubURL = `https://api.github.com/users/${userName}`;

const imageProfileHTMLItem = document.querySelector('.profile-avatar')
const nameHTMLItem = document.querySelector('.profile-name');
const usernameHTMLItem = document.querySelector('.profile-username')

const reposHTMLItem = document.querySelector('#repos');
const followersHTMLItem = document.querySelector('#followers');
const followingHTMLItem = document.querySelector('#following');


async function dataUsers(){
    const response = await fetch(githubURL);
    const data = await response.json();

    imageProfileHTMLItem.src = data.avatar_url;
    nameHTMLItem.innerHTML= data.name;
    usernameHTMLItem.innerHTML = `@${data.login}`;

    reposHTMLItem.innerHTML=`<h4>Repositórios</h4> ${data.public_repos}`;
    followersHTMLItem.innerHTML= `<h4>Seguidores</h4> ${data.followers}`;
    followingHTMLItem.innerHTML=`<h4>Seguindo</h4> ${data.following} `;
} 

dataUsers()

