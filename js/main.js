
window.addEventListener("load", function () {
    var items = document.querySelectorAll(".item");
    setTimeout(function () {
        document.getElementById("content").classList.add("visible");
    }, 100);
    items.forEach(function (item, index) {
        setTimeout(function () {
        item.classList.add("visible");
        }, index * 1000);
    });
    });

$(document).ready(function () {
    var navbarHeight = $(".navbarTop").outerHeight();
    $(".info").css("margin-top", navbarHeight);
    $(".home").css("margin-top", navbarHeight);
});




document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav .navbar-nav .nav-item .nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.getAttribute("href") === "#" + current) {
                li.classList.add("active");
            }
        });
    });
});


$(document).ready(function () {
    $(".buttonOne").click(function (e) {
        e.preventDefault();
        $(".buttonOne").removeClass("activeButton");
        $(this).addClass("activeButton");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelectorAll(".details");
    window.addEventListener("scroll", function () {
        let delay = 0;
        details.forEach((detail) => {
        const rect = detail.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            setTimeout(() => {
            detail.classList.add("show");
            }, delay);
            delay += 150;
        }
        });
    });
});

function showDetails(index) {
    const details = document.querySelectorAll(".details");
    details.forEach((detail) => {
        detail.classList.remove("show");
    });
    details[index].classList.add("show");
}

window.onscroll = function () {
    scrollFunction();
    myFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

// booking
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll("#data");
    window.addEventListener("scroll", function () {
        let delay = 0;
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                setTimeout(() => {
                    card.classList.add("show");
                }, delay);
                delay += 150;
            }
        });
    });
});

//  contact us
document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('scroll-section');

    window.addEventListener('scroll', function() {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll('.icons .box');
    
    function checkPosition() {
        boxes.forEach(function(box, index) {
            var position = box.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            
            if (position < windowHeight - 100) {
                setTimeout(function() {
                    box.classList.add('show');
                }, index * 200); 
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();      
});

// About us
document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.content');
    function checkScroll() {
        const screenPosition = window.innerHeight;
        contents.forEach((content, index) => {
            const contentPosition = content.getBoundingClientRect().top;

            if (contentPosition < screenPosition) {
                setTimeout(() => {
                    content.classList.add('visible');
                }, index * 300); 
            }
        });
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll();  
});

// services
document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.paragraph');

    function checkScroll() {
        const screenPosition = window.innerHeight;
        
        paragraphs.forEach((paragraph, index) => {
            const paragraphPosition = paragraph.getBoundingClientRect().top;

            if (paragraphPosition < screenPosition) {
                setTimeout(() => {
                    paragraph.classList.add('visible');
                }, index * 300); 
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();  
});

// car page
document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.querySelector('.form-container');
    setTimeout(() => {
        formContainer.classList.add('show'); 
    }, 500);  
});


//  change background for navbar
var navbar = document.getElementById("header");
var bookingSection = document.getElementById("booking");
var sticky = bookingSection.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// questions
document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll('.accordion-item');
    function checkPosition() {
        items.forEach(function(item, index) {
            var position = item.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            
            if (position < windowHeight - 100) {
                setTimeout(function() {
                    item.classList.add('show');
                }, index * 200);   
            }
        });
    }
    window.addEventListener('scroll', checkPosition);
    checkPosition();
});

// JavaScript code for slider functionality (optional)
var slides = document.querySelectorAll('.slide');
var currentSlide = 1;
var slideInterval = setInterval(nextSlide, 2500);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide active';
}   

//  navbar active 
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('.nav-link'); 

    function changeActiveLink() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight; 
            if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
                currentSection = section.getAttribute('id');
            }
        });
    }

    window.addEventListener('scroll', changeActiveLink);
    window.addEventListener('load', changeActiveLink);        
});



