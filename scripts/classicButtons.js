import {upperCase} from "./capsButton.js"



function classicButtons(id) {
    const textfield = document.querySelector("#textInput");
    let element = document.getElementById(id);
    let text = element.value;
    if(upperCase === true){
        textfield.value += text.toUpperCase();
    }
    else{textfield.value +=  text;
    }
    
}

export default classicButtons