// Get the current page URL
const currentPage = window.location.href;

// Get all navbar links
const navbarLinks = document.querySelectorAll("header nav ul li a");

// Loop through each navbar link
navbarLinks.forEach((link) => {
  // If the link's href matches the current page URL
  if (link.href === currentPage) {
    // Add a class to highlight the link
    link.classList.add("active");
  }
});

////

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
