function classicButtons(id) {
    const textfield = document.querySelector("#textInput");
    let element = document.getElementById(id);
    let text = element.value;
    textfield.value += text;
}

export default classicButtons