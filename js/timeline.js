var children = document.getElementById("random").children;

for (var i = 0; i < children.length; i++) {
    children[i].addEventListener("mouseover", onHover, false);
    children[i].addEventListener("mouseout", offHover, false);
}

function onHover(event) {
    var element = event.target;
    element.children[0].hidden = false;
}

function offHover(num) {
    var element = event.target;
    element.children[0].hidden = true;
}