const choice = document.querySelector(".choice");
const arrayNumb = document.querySelectorAll(".numb");

let draggedBox;

for (let i = 0; i < arrayNumb.length; i++) {
  arrayNumb[i].id = i;
}

choice.ondragover = (e) => {
  e.preventDefault();
};

choice.ondragenter = (e) => {
  choice.style.scale = "1.1";
  choice.style.background = "greenyellow";
  choice.style.border = "2px solid green";
  choice.style.color = "transparent";
};

choice.ondragleave = (e) => {
  choice.style.scale = "1";
  choice.style.border = "2px solid black";
  choice.style.color = "black";
  choice.style.background = "transparent";
};

choice.ondrop = (e) => {
  choice.innerHTML = draggedBox.innerHTML;
};

arrayNumb.forEach((box) => {
  box.ondragstart = (e) => {
    draggedBox = box;

    e.dataTransfer.setData("text/plain", box.innerHTML);
  };

  box.ondragend = (e) => {
    choice.style.scale = "1";
    choice.style.border = "2px solid black";
    choice.style.color = "black";
    choice.style.background = "transparent";
  };
});

document.querySelector("#check").addEventListener("click", (e) => {
  e.preventDefault();
  let response = randomNumber(0, 10);
  console.log(response);
  let tolerance = 1;
  let choiceNb = parseInt(choice.innerHTML);
  if (
    choiceNb == response ||
    (choiceNb >= response - tolerance && choiceNb <= response + tolerance)
  ) {
    alert("Vous avez gagner !!");
  }
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
