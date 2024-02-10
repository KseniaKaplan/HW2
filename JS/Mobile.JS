//Floating menu

const openMenuButton = document.querySelector("#mobile-nav button");

function setMenuPosition(xCoord) {
  console.log(xCoord);
  const menu = document.querySelector(".floating-menu");
  menu.style.transform = `translateY(${xCoord})`;
}

document
  .querySelector("#desktop-nav ul")
  .addEventListener("keydown", function (event) {
    console.log(event.target);
  });

openMenuButton.addEventListener("click", (event) => {
  console.log(event);
  setMenuPosition(0);
});

const closeMenuButton = document.querySelector("#close-menu");
closeMenuButton.style.zIndex = "999";
closeMenuButton.addEventListener("click", () => setMenuPosition("-100%"));
