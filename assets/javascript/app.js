$(document).ready(function() {
    //variables for types of answers to be displayed at end of game
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //variable for timer, interval, and number of questions
    var timer = 30;
    var interval;
    var questionCount = 0;

    //variable with questions, answers, and correct answer stored in objects/arrays 
    var qAndA = [
        {
            question: "What horror movie features a serial killer wearing a mask inspired by an Edvard Munch painting?", 
            answers: ["Halloween", "Friday the 13th", "Scream", "Nightmare on Elm Street"],
            correctAnswer: "Scream",
        },

        { 
            question: "What is the name of the Clive Barker novella that is the basis for Hellraiser?", 
            answers: ["Coldheart Canyon", "The Hellbound Heart", "Cabal", "Books of Blood"],
            correctAnswer: "The Hellbound Heart",
        },

        {
            question: "Who was the killer in the original Friday the 13th movie?",
            answers: ["Mrs. Vorhees", "Alice Hardy", "Jason Vorhees", "Steve Christy"],
            correctAnswer: "Mrs. Vorhees",
        },

        {
            question: "Which movie in the Friday the 13th franchise features an abundance of crop tops?",
            answers: ["Friday the 13th: The Final Chapter", "Jason Goes to Hell: The Final Friday", "Freddy vs Jason", "Jason X"],
            correctAnswer: "Jason X",
        }
    ];
    
    
    //function to load questions on game start
    function questions() {
        //clear and set interval for timer
        clearInterval(interval);
        interval = setInterval(decrement, 1000);
        timer = 30;

        //run function decrement to count down
        decrement();

        var question = qAndA[questionCount].question;
        var answerOptions = qAndA[questionCount].answers;

        //generates html for questions and answers
        $("#timer").html(timer);
        $("#game-section").html(`<h2>${question}</h2>
            ${answers(answerOptions)}
        `);
    }

    //functions to loop through and list answers based on question number
    function answers(answerOptions) {
        var userChoice = "";

        for (var a = 0; a < answerOptions.length; a++) {
            userChoice += `<p class="userChoice" data-answer="${answerOptions[a]}">${answerOptions[a]}</p>`;
        }

        return userChoice;
    }
    
     //function to count down time
     function decrement() {
        timer--;
        $("#timer").text(timer);

        if (timer === 0) {
            stop();
            console.log("Time's up!");
        }
    }

    //function stops countdown at 0
    function stop() {
        clearInterval(interval);
    }
    
    questions();

    //only one answer can be selected per question
    //timer counts down on each question 
    //if player selects correct answer show screen congratulating them
    //if player selects wrong answer show screen telling them the answer is wrong and display correct answer
    //if the timer runs out before the player selects an answer - tell player time has run out and display correct answer
    //after a few seconds show next question - repeat

    //if questionCount = number of questions - show final screen
    //on final screen show how many correct and incorrect answers player gave and give option to restart game

})