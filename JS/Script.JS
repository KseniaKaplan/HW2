//Animation for Homepage - move line

let typingText = document.querySelector(".change_txt");
let Designation = ["Front End Developer", "Back End Developer", "More To Come"];

let arrayIndex = 1;

function ChangingTxt() {
  if (arrayIndex < Designation.length) {
    typingText.innerHTML = Designation[arrayIndex];
    arrayIndex = arrayIndex + 1;
  } else {
    arrayIndex = 0;
    typingText.innerHTML = Designation[arrayIndex];
    arrayIndex = arrayIndex + 1;
  }
}

setInterval(ChangingTxt, 5000);
ChangingTxt();
