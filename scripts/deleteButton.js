function deleteButton(){
    const textfield = document.querySelector("#textInput");
    textfield.value = textfield.value.substring(0, textfield.value.length - 1)
    
    
}


export default deleteButton