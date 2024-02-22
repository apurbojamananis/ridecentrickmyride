const toggleBtn = document.getElementById("toggleBtn");
const responsiveMenuBar = document.getElementById("responsiveMenuBar");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");

toggleBtn.addEventListener("click", () => {
  responsiveMenuBar.classList.toggle("d-none");
  responsiveMenuBar.classList.toggle("d-block");
  openIcon.classList.toggle("d-none");
  openIcon.classList.toggle("d-block");
  closeIcon.classList.toggle("d-none");
  closeIcon.classList.toggle("d-block");
});