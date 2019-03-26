/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//Pak de img element door de id te pakken en geeft het de naam resetanimation
var resetAnimation = document.getElementById("mayushii");

//Maak een nieuwe audio variabele aan
var mySound1 = new Audio();
var mySound2 = new Audio();
var mySound3 = new Audio();

//Geef de file locatie aan
mySound1.src = "Media/tuturu_1.mp3";
mySound2.src = "Media/tuturubis.mp3";
mySound3.src = "Media/supratuturu.mp3";

//Variabelen
var click = 0;
var random;

//als er op de button geclicked wordt, roep dan loadContent() aan
document.querySelector("#_but").addEventListener('click', loadContent);

//Hier is de function om alles af te spelen.
function loadContent() {
    random = Math.random();
    if (random < 0.1) {
        mySound3.play(); // Speel het geluid meteen af
        document.querySelector('img').classList.add("trigger_animation_3"); //Speel een annimatie af voor de img element
        document.querySelector('h1').classList.add("trigger_animation_3");
        document.querySelector('h2').classList.add("trigger_animation_3");
        click++; //Geef bij iedere click, click +1
        reset();
        resetAnimation.classList.add("trigger_animation_3");
    } else if (random < 0.3 && random > 0.1) {
        mySound2.play(); // Speel het geluid meteen af
        document.querySelector('img').classList.add("trigger_animation_2"); //Speel een annimatie af voor de img element
        click++; //Geef bij iedere click, click +1
        reset();
        resetAnimation.classList.add("trigger_animation_2");
    } else {
        mySound1.play(); // Speel het geluid meteen af
        document.querySelector('img').classList.add("trigger_animation_1"); //Speel een annimatie af voor de img element
        click++; //Geef bij iedere click, click +1
        reset();
        resetAnimation.classList.add("trigger_animation_1");
    }
    document.getElementById("_h2").innerHTML = "You have clicked " + click + " times!";
}

function reset() {
    resetAnimation.classList.remove("trigger_animation_1"); // verwijder deze animaties
    resetAnimation.classList.remove("trigger_animation_2");
    resetAnimation.classList.remove("trigger_animation_3");
    void resetAnimation.offsetWidth; //Void, dus alle calculaties (gemaakte animaties) resseten zodat je animatie nog een keer kan draaien
}
//-----------------------Rock paper scissor-------------------------------


document.querySelector("#_but2").addEventListener('click', playGame);

function playGame() {
    //Maad de button onzichtbaar na een click
    document.getElementById("_but2").style.visibility = "hidden";

    //Het volgende stukje heb ik gehaald van https://www.w3schools.com/js/js_htmldom_nodes.asp
    var rock = document.createElement("BUTTON");
    var createNode1 = document.createTextNode("Rock");
    rock.setAttribute("id", "madeButton1");
    rock.appendChild(createNode1);
    document.body.appendChild(rock);

    var paper = document.createElement("BUTTON");
    var createNode2 = document.createTextNode("Paper");
    paper.setAttribute("id", "madeButton2");
    paper.appendChild(createNode2);
    document.body.appendChild(paper);

    var scissor = document.createElement("BUTTON");
    var createNode3 = document.createTextNode("Scissor");
    scissor.setAttribute("id", "madeButton3");
    scissor.appendChild(createNode3);
    document.body.appendChild(scissor);
}

//document.querySelector("#madeButton1").addEventListener('click', playedRock);
//document.querySelector("#madeButton2").addEventListener('click', playedPaper);
//document.querySelector("#madeButton3").addEventListener('click', playedScissor);

//function playedRock() {
//    var computerChoice = Math.random();
//    console.log("Click");
//    if (computerChoice < 0.34) {
//        console.log("Computer played rock");
//        console.log("I'ts a draw");
//    } else if (computerChoice < 0.67 && computerChoice > 0.34) {
//        console.log("Computer played paper");
//        console.log("You lost");
//    } else {
//        console.log("Computer played scissor");
//        console.log("You won!");
//    }
//}

var value;
var madeBy = ["This ", "assignment ", "is ", "made ", "by ", "Chun ", "Hui ", "Xiao ", "500737351"];

for(value = 0; value < madeBy.length; value++) {
    console.log(madeBy[value]);
}

