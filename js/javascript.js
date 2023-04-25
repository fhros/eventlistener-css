var inpt = document.querySelector(".otto");
var body = document.querySelector("body");

inpt.addEventListener("keyup", function (event) {
    var lower = event.target.value.toLowerCase()
    if(lower == "koira") {
        body.style.backgroundImage = "url('img/dog.gif')"
    } else if(lower == "kissa") {
        body.style.backgroundImage = "url('img/cat.gif')"
    } else if(lower == "lehmä") {
        body.style.backgroundImage = "url('img/pig.gif')"
    } else if(lower == "john") {
        body.style.backgroundImage = "url('img/chair.gif')"
    } else if(lower == "what the hell") {
            body.style.backgroundImage = "url('img/enderman.gif')"
    } else {
        body.style.backgroundImage = ""
    }
})