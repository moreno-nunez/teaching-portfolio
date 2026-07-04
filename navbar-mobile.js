document.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("quarto-header");

  if (!header) return;

  function updateNavbar(){

    if (window.innerWidth > 991) {
      header.classList.remove("is-scrolled");
      document.body.classList.remove("is-scrolled");
      return;
    }

    if (window.scrollY > 80){
      header.classList.add("is-scrolled");
      document.body.classList.add("is-scrolled");
    } else{
      header.classList.remove("is-scrolled");
      document.body.classList.remove("is-scrolled");
    }
  }

  updateNavbar();

  window.addEventListener("scroll", updateNavbar);
  window.addEventListener("resize", updateNavbar);

});