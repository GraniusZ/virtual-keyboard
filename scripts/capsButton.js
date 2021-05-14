



let upperCase = false

function capsButton(id) {
    const textfield = document.querySelector("#textInput");
    let elementCaps = document.querySelector("#caps");
    let element = document.getElementById(id);
    
    if ((elementCaps.value == 0)) {
        element.classList.add("caps-button-activated");
        upperCase = true
        elementCaps.value++
    }
    else{
        element.classList.remove("caps-button-activated")
        upperCase = false
        elementCaps.value--
        
    }

    
}

export {upperCase}
export default capsButton