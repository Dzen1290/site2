const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Плавная прокрутка
  });
}

scrollToTopBtn.addEventListener("click", function() {
  scrollToTop();
});