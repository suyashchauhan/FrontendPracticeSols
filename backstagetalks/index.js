const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('ul li a')
const container = document.querySelector('.container')
const height = sections[0].offsetHeight;

let currentSlide = 1;
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        currentSlide = link.getAttribute('href').substr(6, 1) - 1
        updateLinkHighlight()
    })
})
let array = ["00c1b5", "ff6519", "ffbe00", "1d3fbb", "e30512"];
let previousTime = new Date().getTime();
document.addEventListener('wheel', function (e) {
    let currentTime = new Date().getTime();
    let difference = currentTime - previousTime;
    if (difference > 500) {
        if (e.deltaY > 0) {
            if (currentSlide < sections.length - 1) currentSlide++;
            container.scrollTo(0, height * currentSlide)
            container.style.background = `#${array[currentSlide]}`;
            updateLinkHighlight();
        }
        else {
            if (currentSlide > 0)
                currentSlide--;
            container.scrollTo(0, height * currentSlide)
            container.style.background = `#${array[currentSlide]}`;
            updateLinkHighlight();

        }

        previousTime = currentTime;
    }
})
function updateLinkHighlight() {

    links.forEach((a) => {
        a.classList.remove('active')
        let slideno = currentSlide + 1;
        if (a.href.includes('#issue' + slideno))
            a.classList.add('active')
    })
}
