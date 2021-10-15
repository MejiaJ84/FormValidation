window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    hasText("first-name", "First name is required.");
    hasText("last-name", "Last name is required.");
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
