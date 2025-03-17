// Плавный скролл к верху страницы
window.onscroll = function() {
    var scrollButton = document.querySelector(".scrollTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Анимация появления блоков
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".fade-in");

    function showSections() {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", showSections);
    showSections();
});
