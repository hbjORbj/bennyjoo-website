const showClickedCategory = (event) => {
  const id = event.id;
  const links = document.querySelectorAll(".work__category button");
  for (i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("class")) {
      links[i].classList.remove("active");
    }
  }
  event.classList.add("active");

  const category = document.querySelector(`.work__design__${id}`);
  const categories = document.querySelectorAll(".work__design");
  for (i = 0; i < categories.length; i++) {
    categories[i].classList.add("hideCategory");
  }
  category.classList.remove("hideCategory");
};
