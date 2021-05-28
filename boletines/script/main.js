/* let links = document.querySelectorAll("a");
links.forEach(function (link) {
  console.log(link);
}); */
let celdas = document.querySelectorAll("td");
celdas.forEach(function (td) {
  td.addEventListener("click", function () {
    console.log(this);
  });
});
let links = document.querySelectorAll(".close");
links.forEach(function (links) {
  links.addEventListener("click", function (ev) {
    ev.preventDefault();
    let content = document.querySelector(".content");

    content.classList.remove("animate__animated");
    content.classList.remove("animate__fadeInDown");

    content.classList.add("animate__animated");
    content.classList.add("animate__fadeOutUp");

    setTimeout(() => {
      location.href = this.href;
    }, 600);

    return false;
  });
});
