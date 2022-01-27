const projectName = 'portfolio';
const env = 'LOCAL'    // LOCAL | CLOUD
const dirName = 'Personal-Portfolio'
const cloudPath = 'https://raw.githubusercontent.com/louisyoungx/freeCodeCamp-projects/master/' + dirName + '/img/';
(function cloudPics() {
    function chore() {
        document.querySelectorAll('img').forEach(img => {
            console.log(img.getAttribute('src'))
            let src = img.getAttribute('src').replace('./img/', cloudPath)
            img.setAttribute('src', src)
        });
    }
    if (env === 'CLOUD') {
        chore()
    }
})()

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
    {
        title: 'Random Quote',
        name: 'Louis Young',
        img: 'random-quote.png',
        href: 'https://codepen.io/louisyoungx/full/wvPBYON'
    },
]

function replaceProjectImg(projects) {
    let imgPath
    if (env === 'LOCAL') {
        imgPath = '../docs/'
    } else {
        imgPath = 'https://raw.githubusercontent.com/louisyoungx/freecodecamp-projects/master/docs/'
    }
    for (let project of projects) {
        project.img = imgPath + project.img
    }
    return projects
}


function render(projects) {
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
}


function goto(href) {
    window.location.href = href
}

(function main() {
    projects = replaceProjectImg(projects)
    render(projects)
})()

