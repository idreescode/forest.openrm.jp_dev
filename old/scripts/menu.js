const menuBtn = document.getElementById("menuBtn");
const menubar = document.querySelector(".menubar");

menuBtn.addEventListener("click", () => {
  const isOpen = !menubar.classList.contains("hidden");
  const menuImg = menuBtn.querySelector("img");

  if (isOpen) {
    menuImg.src = "/assets/new/close.svg";
  } else {
    menuImg.src = "/assets/new/menu.svg";
  }

  menubar.classList.toggle("hidden");
});
