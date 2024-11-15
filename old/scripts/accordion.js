const accordions = document.querySelectorAll(".faq .accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const isOpen = !accordion.classList.contains("closed");
    const img = accordion.querySelector("img");

    accordion.classList.toggle("closed");

    if (isOpen) {
      img.src = "/assets/images/dash-black.svg";
    } else {
      img.src = "/assets/new/plus-small.svg";
    }
  });
});
