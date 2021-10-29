
window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

//example on how to change an element with an onclick
function changeHeading(){
    let heading = <HTMLElement>this;
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    heading.style.color = "rgb("+ red + ", " + green + ", " + blue + ")";
}

function main():void {

    let messageHeading = document.createElement("h2");
    messageHeading.innerText = "Processing form";
    messageHeading.setAttribute("class", "message")
    messageHeading.onclick = changeHeading;  //example on how to change an element with an onclick

    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", messageHeading)

    setTimeout(function(){
        messageHeading.remove();
    }, 5000)


    resetErrorMessages();
    hasText("first-name", "First name is required.");
    hasText("last-name", "Last name is required.");
    
    // Validate date
    // need to cast as an input element to get the .value property as inputs have a .value property
    checkValidDate();
}

function checkValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        //dobBox.nextElementSibling.innerHTML = "Invalid format, format should be mm/dd/yyyy."
        let errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "Invalid format, format should be mm/dd/yyyy.";
    }
}

/**
 * Returns true if text box with given id is not empty
 * @param id of the <input type = "text"> to validate
 * @param errorMsg message that displays in the sibling span of the txt box 
 * @returns 
 */
function hasText(id:string, errorMsg:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id); // gets the name element
    let txtValue = textBox.value; // gets the value out of the name box

    if (txtValue == "") {
        let errorSpan = <HTMLSpanElement>textBox.nextElementSibling; // need <HTMLSpanElement> to cast to span element 
        errorSpan.innerText = errorMsg;
        return false;
    }
    return true;
}

/**
 * Resets spans back to default
 */
function resetErrorMessages():void {
    let allSpans = document.querySelectorAll("form > span");
    for(let i = 0; i < allSpans.length; i++) {
        let currSpan = <HTMLElement>allSpans[i];
        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }
        else{
            currSpan.innerText = "";
        }
    }
}

function isValidDate(input:string):boolean{
    // Validating mm/dd/yyyy and m/d/yyyy
    //   \d{1,2}\/\d{1,2}\/\d{4}   <---regular expression for date
    let datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g     //need to start and end with forward slashes and a g
    return datePattern.test(input);
}
