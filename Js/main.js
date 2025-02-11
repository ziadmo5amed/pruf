
// projects 
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".projects .container .row .card");

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);  
            }
        });
    }, { threshold: 0.3 });   

    cards.forEach((card) => observer.observe(card));
});

// header 

document.addEventListener("DOMContentLoaded", function () {
    let content = document.querySelector(".main-section .content");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                content.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(content);
});
