
window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    hasText("first-name", "First name is required.");
    hasText("last-name", "Last name is required.");
}

/**
 * Returns true if text box with given id is not empty
 * @param id of the <input type = "text"> to validate
 * @param errorMsg message that displays in the sibling span of the txt box 
 * @returns 
 */
function hasText(id:string, errorMsg:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id); // gets the first name element
    let txtValue = textBox.value; // gets the value out of the first name box

    if (txtValue == "") {
        let errorSpan = <HTMLSpanElement>textBox.nextElementSibling; // need to cast to span element 
        errorSpan.innerText = errorMsg;
        return false;
    }
    return true;
}
