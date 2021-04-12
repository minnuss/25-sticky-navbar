// MOBILE HAMB MENU
const hmabBtn = document.querySelector('.hamb-btn');
const ulList = document.querySelector('.navbar__content__nav__container__ul');

hmabBtn.addEventListener('click', () => {
    hmabBtn.classList.toggle('active');
    ulList.classList.toggle('active');
})

// ******************************************************

// STICKY NAVBAR
const nav = document.querySelector('.navbar__content__nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > 400) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

// ******************************************************

// ACTIVE MENU SECTION HIGHLIGHT MENU LINK

// select all sections (they need to have a class section)
const sectionsAll = document.querySelectorAll('.section');
// select all links (there need to be same number of links as it has sections)
const links = document.querySelectorAll('.navbar__content__nav__container__ul--li__a');

window.addEventListener('scroll', menuActive);

function menuActive() {

    let current = 0;

    // console.log(pageYOffset);
    sectionsAll.forEach((section, idx) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // console.log(pageYOffset)
        // console.log(idx, sectionTop, sectionHeight)

        // divider depends of the client width screen
        let inW = window.innerWidth;
        // console.log(innerWidth)
        let divider = inW > 1500 ? 2 : inW > 1200 ? 3.5 : inW > 900 ? 4 : inW > 500 ? 6 : 7;

        if (pageYOffset >= sectionTop - sectionHeight / divider) {
            // current = section.getAttribute('class')
            current = idx;

            // console.log(current)
            links.forEach(link => {
                link.classList.remove('current');
            })
            links[current].classList.add('current')
        }

    })
}

// FIX FOR SECTIONS HIGHLIGHT THAT ARE TOO SMALL FOR DETECTION ON SCREEN (like a contact section here)
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('current');
        })
        link.classList.add('current');
    })
})
