const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('ul li a')
const container = document.querySelector('.container')
const height = sections[0].offsetHeight;
let currentSlide = 0;


let array = ["00c1b5", "ff6519", "ffbe00", "1d3fbb", "e30512"];
let previousTime = new Date().getTime();

ScreenSize()
window.addEventListener('resize', function (e) {
    let currentTime = new Date().getTime();
    let difference = currentTime - previousTime;
    if (difference > 1000) {
        ScreenSize()
    }
    previousTime=currentTime;
})

function ScreenSize() {
    if (window.innerWidth > 996) {
        window.removeEventListener('scroll', handleScroll);
        document.addEventListener('wheel', handleWheel)
        links.forEach((link) => {
            link.addEventListener('click', handleLink)
        })
    }
    else {
        document.removeEventListener('wheel', handleWheel)
        window.addEventListener('scroll', handleScroll);
        links.forEach((link) => {
            link.removeEventListener('click', handleLink)
        })
    }
}
function handleWheel(e) {
    let currentTime = new Date().getTime();
    let difference = currentTime - previousTime;
    if (difference > 500) {
        if (e.deltaY > 0) {
            if (currentSlide < sections.length - 1) currentSlide++;
        }
        else {
            if (currentSlide > 0)
                currentSlide--;
        }
        container.scrollTo(0, height * currentSlide)
        container.style.background = `#${array[currentSlide]}`;
        updateLinkHighlight();
        previousTime = currentTime;
    }
}
function handleLink() {
    currentSlide = link.getAttribute('href').substr(6, 1) - 1
    container.style.background = `#${array[currentSlide]}`;
    updateLinkHighlight()
}
function handleScroll() {
    container.style.background = `#${array[Math.floor(window.scrollY / window.innerHeight)]}`;
}

function updateLinkHighlight() {

    links.forEach((a) => {
        a.classList.remove('active')
        let slideno = currentSlide + 1;
        if (a.href.includes('#issue' + slideno))
            a.classList.add('active')
    })
}
