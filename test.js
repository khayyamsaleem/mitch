function editParagraph(text){
    document.getElementById("edit").innerHTML = text;
}

function checkValid() {
    var confirm = "";
    if (document.getElementById("idl").validity.rangeOverflow){
        confirm = "Number too large";
    } else if (document.getElementById("idl").validity.typeMismatch){
        confirm = "Value not a number";
    } else if (document.GetElementById("idl").validity.rangeUnderflow){
        confirm = "number too small";
    } else {
        confirm = "good";
    }
    document.getElementById("fill_me").innerHTML = confirm;
}

editParagraph("Hello");
