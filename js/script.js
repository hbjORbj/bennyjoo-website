var showClickedCategory = function showClickedCategory(event) {
  var id = event.id;
  var links = document.querySelectorAll(".work__category button");

  for (i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("class")) {
      links[i].classList.remove("active");
    }
  }

  event.classList.add("active");
  var category = document.querySelector(".work__design__".concat(id));
  var categories = document.querySelectorAll(".work__design");

  for (i = 0; i < categories.length; i++) {
    categories[i].classList.remove("showCategory");
    categories[i].classList.add("hideCategory");
  }

  category.classList.remove("hideCategory");
  category.classList.add("showCategory");
};
