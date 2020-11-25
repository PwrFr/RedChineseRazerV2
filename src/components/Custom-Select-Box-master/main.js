const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
let num = 0;
let onum = 0;

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  num += 1;
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});


function myFunction(change, not_change1, not_change2) {
  document.getElementById(change).setAttribute("style", "color: #f5f5f5;font-size:inherit");
  document.getElementById(not_change1).setAttribute("style", "color: 8d8d8d");
  document.getElementById(not_change2).setAttribute("style", "color: 8d8d8d");

}

function onClickColor() {
  if ((onum === num) || (num % 2 == 0)) {
    document.getElementById('box').setAttribute("style", "border: 1px solid #adadad;");
    document.getElementById('box1').setAttribute("style", "color: #adadad;");
    if (num % 2 != 0) {
      optionsContainer.classList.remove("active");
      num += 1;
    }
  }

  else {
    document.getElementById('box').setAttribute("style", "border: 2px solid #43d32b !important;");
    document.getElementById('box1').setAttribute("style", "color: #43d32b;");
  }
  onum = num;
}

// const box = document.querySelector(".box");
// $(box).hover(function(){
//   const box1 = document.querySelector(".box1");
//   // $(box1).css("color", "white");
//   $(this).css("border-color", "white");
//   }, function(){
//   // $(box1).css("color", " #adadad");
//   $(this).css("border-color", "#999999");
// });