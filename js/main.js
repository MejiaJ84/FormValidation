window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrorMessages();
    hasText("first-name", "First name is required.");
    hasText("last-name", "Last name is required.");
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Invalid format, format should be mm/dd/yyyy.";
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
