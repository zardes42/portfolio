// Navigation bar Effects Scroll 
window.addEventListener("scroll", function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 0) ;
});

//  Light Dark Theme Button;
const themeBtn= document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');
    themeBtn.classList.toggle('sun');
    localStorage.setItem('saved-theme' , getCurrentTheme());
    localStorage.setItem('saved-icon' , getCurrentIcon());


});

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? "dark" : "light" ;
const getCurrentIcon= () => themeBtn.classList.contains('sun') ? 'sun' : 'moon' ;

const savedTheme = localStorage.getItem('saved-theme');
const savedIcon = localStorage.getItem('saved-icon');

if (savedTheme) {
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    themeBtn.classList[savedIcon === 'sun' ? "add" : "remove"]("sun");
}



// scroll to Top Button

const scrollToTopBtn = document.querySelector('.scrollToTop-btn');
window.addEventListener('scroll',() =>{
    scrollToTopBtn.classList.toggle('active', window.scrollY > 500);
} );

scrollToTopBtn.addEventListener('click', () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
})
// Navigation menu items active on scroll

window.addEventListener("scroll", () =>{
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop -50;
        let id = current.getAttribute('id');
        console.log(id);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-items a[href*=' + id + ']').classList.add('active');
        }
        else{
            document.querySelector('.nav-items a[href*=' + id + ']').classList.remove('active');
        };
    });
});



// Services Section - Modal
const serviceModals = document.querySelectorAll('.service-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

var modal = (modalClick) =>{
    serviceModals[modalClick].classList.add('active');
};
learnMoreBtn.forEach((btn , i) =>{
    btn.addEventListener("click", () =>{
        modal(i);
    })

})
modalCloseBtn.forEach((btn) => {
    btn.addEventListener('click' , () =>{
        serviceModals.forEach((modalView) => modalView.classList.remove('active'));
    })
});
// Portflio Section - Morals
const portfolioModals = document.querySelectorAll('.portfolio-model');
const imgCards = document.querySelectorAll('.img-card');
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn');

var showModal = (modalClick) =>{
    portfolioModals[modalClick].classList.add('active');
};
imgCards.forEach((card , i) =>{
    card.addEventListener("click", () =>{
        showModal(i);
    })

});
portfolioCloseBtns.forEach((btn) => {
    btn.addEventListener('click' , () =>{
        portfolioModals.forEach((modalView) => modalView.classList.remove('active'));
    })
});

//Our Clients - Swiper 
var swiper = new Swiper(".client-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   Responsive Navigation Menu toggle button

const menuBtn = document.querySelector('.nav-menu-btn');
const menu = document.querySelector('.navigation');
const closeBtn = document.querySelector('.nav-close-btn');
const navItems = document.querySelectorAll('.nav-items a')

menuBtn.addEventListener('click' , () =>{
    menu.classList.add('active');
});
closeBtn.addEventListener('click' , () =>{
    menu.classList.remove('active');

});
navItems.forEach(item =>{
    item.addEventListener('click' , ()=>{
        menu.classList.remove('active');
    })
});

// Scroll Reveal Animations
// Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance : '60px',
    duration : 2500,
    delay : 100

 });
ScrollReveal().reveal('.home .info h2 , .section-title-01,.section-title-02', {delay:500,origin:'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay:600,origin:'right' });
ScrollReveal().reveal('.home .info .btn ', {delay: 700 , origin:'bottom'});
ScrollReveal().reveal('.media-icons i , .contact-left li', {delay: 500 , origin:'left', interval:200});
ScrollReveal().reveal('.home-img , .about-img', {delay: 500 , origin:'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay: 500 , origin:'right', interval:200});
ScrollReveal().reveal('.about .professional-list li', {delay: 500 , origin:'right', interval:200});
ScrollReveal().reveal('.skills-description , .services-description, .contact-card, .client-slider, .contact-left h2', {delay: 700 , origin:'left'});
ScrollReveal().reveal('.experience-card , .service-card ,.education, .portfolio .img-card', {delay: 800 , origin:'bottom', interval:200});
ScrollReveal().reveal('footer .group', {delay: 500 , origin:'top', interval:200});







