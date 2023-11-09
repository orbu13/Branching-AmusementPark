// USER INTERFACE LOGIC

function hideResults (){
    document.getElementById("swings").setAttribute("class", "hidden");
    document.getElementById("coaster").setAttribute("class", "hidden");
    document.getElementById("tower").setAttribute("class", "hidden");
    document.getElementById("sorry").setAttribute("class", "hidden");
}

document.querySelector("form").onsubmit = function (e){
    e.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

    if (age>= 12 && height >= 60){
        document.getElementById("swings").removeAttribute("class");
        document.getElementById("coaster").removeAttribute("class");
        document.getElementById("tower").removeAttribute("class");
    }
};
