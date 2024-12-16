const filters = document.querySelector(".js-filter-btn");
const filtersClose = document.querySelector(".js-filter-close");
const filtersMenu = document.querySelector(".js-filter-menu");

filters.addEventListener("click", () => {
  filtersMenu.classList.add("filters__filter--active");
});

filtersClose.addEventListener("click", () => {
  filtersMenu.classList.remove("filters__filter--active");
});


const sizeBtn = document.querySelector(".js-size-btn");
const sizeMenu = document.querySelector(".js-size-menu");

sizeBtn.addEventListener("click", () => {
    sizeMenu.classList.toggle("filters__size--active");
});

