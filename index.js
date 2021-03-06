
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {



        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;

        case "j":
            new Audio("sounds/snare.mp3").play();
            break;

        case "k":
            new Audio("sounds/hihat.mp3").play();
            break;

        case "l":
            new Audio("sounds/kick-bass2.mp3").play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    try {
        activeButton.classList.add("pressed")
    }
    catch (e) {
        console.log(e);
    }


    setTimeout(function () {
        try {
        activeButton.classList.remove("pressed");
        }
        catch(e) {
            console.log(e);
        }
    }, 100);
}