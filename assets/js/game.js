var computerGuess = 0;

var score = {
    wins: 0,
    losses: 0,
    total: 0
}
var cristals = {
    red: 0,
    green: 0,
    pink: 0,
    blue: 0
}

//Generate random numbers for cristals from 1-12
function generateCristals(cristals){
    cristals.red = getRandomInt(1,12);
    cristals.green = getRandomInt(1,12);
    cristals.pink = getRandomInt(1,12);
    cristals.blue = getRandomInt(1,12);

    return cristals;
}

function reset(){
    score.total = 0;
    $("#yourScore").text(score.total);

    randomGuess = randomGuess();
    $("#computerGuess").text(randomGuess);
    cristals = generateCristals(cristals);
}
//Generates AI random number from 19-120 
function randomGuess(){
    return getRandomInt(19,120);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crystalClick(button){
    score.total += cristals[$(button).attr("value")];

    console.log(score.total, computerGuess)
    if (score.total > computerGuess){
        alert("You loss")
        losse();

    } else if (score.total === computerGuess){
        alert("You win")
        win();
    }
}

function win(){
    score.wins++;
    $("#wins").text(score.wins);
    reset();
}
function losse(){
    score.losses++;
    $("#loss").text(score.losses);
    reset();
}
cristals = generateCristals(cristals)
computerGuess = randomGuess();
$("#computerGuess").text(computerGuess);


$(document).ready(function(){
    $(".gems").on("click", function(){
        //console.log(cristals[$(this).attr("value")])
        crystalClick(this);
        $("#yourScore").text(score.total);
        //
        //$("#wins").text(score.wins);
        //$("#loss").text(score.losses);
    });
})
