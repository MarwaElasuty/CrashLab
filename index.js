

function appear() {
    document.querySelector(".ul-list").classList.toggle("display");
}


function showDiv(Div) {
    var x = document.getElementById(Div);
    if (x.style.display == "none") {
        x.style.display = "block";
        
    } else {
        x.style.display = "none";
    }
}


function formDiv(Div) {
    var formDiv = document.getElementById(Div);
    if (formDiv.style.display == "none") {
        formDiv.style.display = "block";
        
    } else {
        formDiv.style.display = "none";
    }
}


function hideDiv(Div) {
    var hide = document.getElementById(Div);
    if (hide.style.display == "none") {
        hide.style.display = "block";
    } else {
        hide.style.display = "none";
    }
}