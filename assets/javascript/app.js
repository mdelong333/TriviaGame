$(document).ready(function() {
    $(".answer").hide();
    
    //variables for types of answers to be displayed at end of game
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //variable for timer, interval, and number of questions
    var timer = 0;
    var interval;
    var questionCount = 0;

    //array of objects? questions with array of answers per question? I'll come back to this
    var questions = ["q1", "q2", "q3", "q4"];
    var answers = [["a", "b", "c", "d"], ["a", "b", "c", "d"], ["a", "b", "c", "d"], ["a", "b", "c", "d"]];
    var correctAnswers = [];


    var answerSelected = false;
    
    //game begins on click of start button
    $("#start").on("click", function startQuiz() {
        //hides start button after clicked
        $("#start").hide();
        $(".answer").show();

        clearInterval(interval);
        interval = setInterval(decrement, 1000);

        //sets timer to 30 seconds
        timer = 30;

        //function counts down timer and logs times up to console on 0
        decrement()

        //question/answer populated - placeholder nested arrays and nested loops??

        $("#question").text(questions[questionCount]);
        $("#first-ans").text(answers[questionCount][0]);
        $("#second-ans").text(answers[questionCount][1]);
        $("#third-ans").text(answers[questionCount][2]);
        $("#fourth-ans").text(answers[questionCount][3]);

        //if answer button clicked answerselected = true 
        $(".answer").on("click", function() {
            answerSelected = true;
            console.log("answer chosen");
            stop();
            checkAnswer();
            

        })


        //if answer is correct display congratulations
        //if answer is incorrect tell player and display correct answer
        //if no answer selected tell player time's up and display correct answer
       


    });

    //function to count down time
    function decrement() {
        timer--;
        $("#timer").text(timer);

        if (timer === 0) {
            stop()
        }
    }

    //function stops countdown at 0
    function stop() {
        clearInterval(interval);
    }

    function checkAnswer() {
        if (answerSelected === true) {
            //compare selected answer to correct answers array
            //if answer is correct show congratulatory screen - 7 seconds - increment correct
            //if answer is incorrect show correct answer - 7 seconds - increment incorrect
            //increment questionCount
            console.log("answer chosen")
        } else {
            //if no answer is selected show correct answer - 7 seconds
            //increment unanswered
            //increment questionCount
            console.log("Time's up!")
        }
    }



//only one answer can be selected per question
//timer counts down on each question 
//if player selects correct answer show screen congratulating them
//if player selects wrong answer show screen telling them the answer is wrong and display correct answer
//if the timer runs out before the player selects an answer - tell player time has run out and display correct answer
//after a few seconds show next question - repeat

//if questionCount = number of questions - show final screen
//on final screen show how many correct and incorrect answers player gave and give option to restart game

})