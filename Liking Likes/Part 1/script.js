var count = 3;
var countElement = document.querySelector("#likes");

function addlikes() {
    count++;
    countElement.innerText = count + " like(s)";
}