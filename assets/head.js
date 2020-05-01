const nav = document.querySelector("header");
const sectionOne = document.querySelector(".circling");

const sectionOneOptions = {};

const sOO = new InteersectionObserver(function(
  entries,
  sOO
) {
  entries.forEach(entry => {
    alert(entry.target);
    if (!entry.isIntersecting){
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

},
sectionOneOptions);

sOO.observe(sectionOne);
