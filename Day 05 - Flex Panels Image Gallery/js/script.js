const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  panels.forEach((panel) => {
    console.log(panel);
    console.log(this);
    if (panel !== this) {
      panel.classList.remove("open");
      panel.classList.remove("open-active");
    }
  });

  this.classList.toggle("open");
  this.classList.toggle("open-active");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
