window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function changeHeading() {
    var heading = this;
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);
    heading.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
}
function main() {
    var messageHeading = document.createElement("h2");
    messageHeading.innerText = "Processing form";
    messageHeading.setAttribute("class", "message");
    messageHeading.onclick = changeHeading;
    var h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", messageHeading);
    setTimeout(function () {
        messageHeading.remove();
    }, 5000);
    resetErrorMessages();
    hasText("first-name", "First name is required.");
    hasText("last-name", "Last name is required.");
    checkValidDate();
}
function checkValidDate() {
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        var errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "Invalid format, format should be mm/dd/yyyy.";
    }
}
function hasText(id, errorMsg) {
    var textBox = document.getElementById(id);
    var txtValue = textBox.value;
    if (txtValue == "") {
        var errorSpan = textBox.nextElementSibling;
        errorSpan.innerText = errorMsg;
        return false;
    }
    return true;
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form > span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isValidDate(input) {
    var datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return datePattern.test(input);
}
