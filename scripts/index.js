import classicButtons from "./classicButtons.js";
import deleteButton from "./deleteButton.js";
import spaceButton from "./spaceButton.js";
import enterButton from "./enterButton.js";
import capsButton from "./capsButton.js";

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
            classicButtons(id);
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


let enterbut = document.querySelector("#enter");
enterbut.addEventListener(
  "click",
  function (e) {
      enterButton();
      
  },
  false
);

let caps = document.querySelector("#caps");
let capsText = document.querySelector("#caps-text");

caps.addEventListener(
    "click",
    function (e) {
        capsButton(capsText.id);
        
    },
    false
  );

