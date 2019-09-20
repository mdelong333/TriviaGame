$(document).ready(function() {
    //variables for correct and incorrect answers to be displayed at end of game
    var correct = 0;
    var incorrect = 0;

    //variable for timer and interval
    var timer = 0;
    var interval;

    //array of objects? quetions with array of answers per question? I'll come back to this
    var questions = [];
    
    //game begins on click of start button
    $("#start").on("click", function startGame() {
        //hides start button after clicked
        $("#start").hide();

        clearInterval(interval);
        interval = setInterval(decrement, 1000);

        //sets timer to 30 seconds
        timer = 30;

        //function counts down timer and logs times up to console
        decrement()

        //question/answer populated - placeholder
        $("#question").text("Question 1");
        $("#first-ans").text("Answer 1");
        $("#second-ans").text("Answer 2");
        $("#third-ans").text("Answer 3");
        $("#fourth-ans").text("Answer 4");


    });

    //function to count down time
    function decrement() {
        timer--;
        $("#timer").text(timer);

        if (timer === 0) {
            console.log("time's up!");
            stop()
        }
    }

    //function stops countdown at 0
    function stop() {
        clearInterval(interval);
    }


//create html element populated with a question
//create html elements populated with answers
//only one answer can be selected per question
//timer counts down on each question 
//if player selects correct answer show screen congratulating them
//if player selects wrong answer show screen telling them the answer is wrong and display correct answer
//if the timer runs out before the player selects an answer - tell player time has run out and display correct answer
//after a few seconds show next question - repeat
//on final screen show how many correct and incorrect answers player gave and give option to restart game

})