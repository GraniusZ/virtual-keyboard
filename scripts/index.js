import classicButtons from "./classicButtons.js";
import deleteButton from "./deleteButton.js";
import spaceButton from "./spaceButton.js";

window.onload = () => (document.querySelector("#textInput").value = "");

let classicbuttons = document.querySelectorAll(".classic-button");
classicbuttons.forEach((elem) => {
    elem.addEventListener(
        "click",
        function (e) {
            let id = elem.id;
            classicButtons(id);
        },
        false
    );
});
let numberbuttons = document.querySelectorAll(".number-button");
numberbuttons.forEach((elem) => {
    elem.addEventListener(
        "click",
        function (e) {
            let id = elem.id;
            classisButtons(id);
        },
        false
    );
});

let delbut = document.querySelector("#del");
delbut.addEventListener(
    "click",
    function (e) {
        deleteButton();
    },
    false
);

let spacebut = document.querySelector("#space");
spacebut.addEventListener(
  "click",
  function (e) {
      spaceButton();
      
  },
  false
);
