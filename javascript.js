// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop;

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  function update() {
    alert("Thanks for submiting your response")
  }