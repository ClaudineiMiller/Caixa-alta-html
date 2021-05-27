function upper() {
    document.getElementById("text_input").style.textTransform = "uppercase";
}

function lower() {
    document.getElementById("text_input").style.textTransform = "lowercase";
}

function capitalize() {
    document.getElementById("text_input").style.textTransform = "capitalize";
}

function copy() {
    let textArea = document.getElementById('text_input');
    textArea.select();
    document.execCommand('copy');
}
