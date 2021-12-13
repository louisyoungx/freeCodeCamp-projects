let env = 'CLOUD'    // LOCAL | CLOUD
const projectName = 'portfolio';
let projects = [
    {
        title: 'Tribute Page',
        name: 'Erwin Schrödinger',
        img: 'tribute-page.png',
        href: 'https://codepen.io/louisyoungx/full/bGrXPmd'
    },
    {
        title: 'Survey Form',
        name: 'Wealth Questionnaire',
        img: 'survey-form.png',
        href: 'https://codepen.io/louisyoungx/full/bGobbKm'
    },
    {
        title: 'Product Landing Page',
        name: 'MacBook',
        img: 'product-landing-page.png',
        href: 'https://codepen.io/louisyoungx/full/JjrjBBJ'
    },
    {
        title: 'Technical Docs Page',
        name: 'MarkDown',
        img: 'technical-docs-page.png',
        href: 'https://codepen.io/louisyoungx/full/oNGggmm'
    },
    {
        title: 'Personal Portfolio',
        name: 'Louis Young',
        img: 'personal-portfolio.png',
        href: 'https://codepen.io/louisyoungx/full/mdBRJqW'
    },
]

let imgPath
if (env === 'LOCAL') {
    imgPath = '../docs/'
} else {
    imgPath = 'https://raw.githubusercontent.com/louisyoungx/freecodecamp-projects/master/docs/'
}

for (let project of projects) {
    project.img = imgPath + project.img
}

let projectList = document.getElementById("projects-list")

let domText = ''

for (let project of projects) {
    domText += `
<a class="project" href="${project.href}">
    <figure>
        <div class="project-img-container">
            <img class="project-img" src="${project.img}" alt="${project.title}">
        </div>
        <figcaption class="project-tile">
            <h3>${project.title}</h3>
            <p>${project.name}</p>
        </figcaption>
    </figure>
</a>
`
}

projectList.innerHTML = domText

function goto(href) {
    window.location.href = href
}

