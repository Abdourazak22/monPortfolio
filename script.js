document.querySelectorAll('a[href^="#"]').forEach
(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
    navbar.style.backgroundColor= 'rgba(10,10,10,0.98)':
    navbar.style.backgroundColor= 'rgba(10,10,10,0.95)';
})

const circles = document.querySelectorAll(".circle");
circles.forEach(elem=> {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
    }
});


var mixer = mixitup('.portfolio-gallery');

const header = document.querySelectorAll('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50);
});

let menuIcon = document.querySelector("#menu-icon");
let navlink = document.querySelector(".nav-links");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlink.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlink.classList.remove("open");
}


// SUGGESTION: Améliorer l'expérience de navigation mobile
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        // Fermer le menu mobile après clic
        menuIcon.classList.remove("bx-x");
        navlink.classList.remove("open");
        
        // Ajouter un effet de feedback visuel
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
        }, 150);
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

