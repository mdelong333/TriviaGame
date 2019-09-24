$(document).ready(function() {
    //variables for types of answers to be displayed at end of game
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //variable for timer, interval, and number of questions
    var timer = 0;
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
            question: "Which slasher movie features a young Johnny Depp in a crop top?", 
            answers: ["A Nightmare on Elm Street", "Halloween", "Silent Night, Deadly Night", "The House on Sorrority Row"],
            correctAnswer: "A Nightmare on Elm Street",
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
            question: "Which 80s zombie movie includes the line 'I like it spooky'?",
            answers: ["Night of the Creeps", "Day of the Dead", "Return of the Living Dead", "The Beyond"],
            correctAnswer: "Return of the Living Dead",
        },

        {
            question: "Which movie in the Friday the 13th franchise features an abundance of crop tops?",
            answers: ["Friday the 13th: The Final Chapter", "Jason Goes to Hell: The Final Friday", "Freddy vs Jason", "Jason X"],
            correctAnswer: "Jason X",
        }
    ];

    //variable for images to show when a user selects the right answer
    var correctImages = [
        
    ];

    //variable for images to show when a user selects the wrong answer
    var incorrectImages = [

    ];

    //to start game press start button
    $(document).on("click", "#start", function() {
        $("#start").hide();
        questions();
    })
    
    //function to load questions on game start
    function questions() {
        $("#timer").show();
        //clear and set interval for timer
        clearInterval(interval);
        interval = setInterval(decrement, 1000);
        timer = 16;

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
        var userChoiceOptions = "";

        for (var a = 0; a < answerOptions.length; a++) {
            userChoiceOptions += `<button class="userChoice" data-answer="${answerOptions[a]}">${answerOptions[a]}</button>`;
        }

        return userChoiceOptions;
    }
    
    //function to count down time - increments uanswered questions variable if timer reaches 0 with no answer having been selected
    function decrement() {
        timer--;
        
        $("#timer").text(timer);

        if (timer === 0) {
            stop();
            unanswered++;
        }
    }

    //function stops countdown at 0
    function stop() {
        userAnswerDisplay("unanswered");
        clearInterval(interval);
        setTimeout(nextQuestion, 3 * 1000);
    }

    //function to move to next question
    function nextQuestion() {
        $("#timer").show();
        if (qAndA.length -1 === questionCount) {
            clearInterval(interval);
            finalScreen();
        } else {
            clearInterval(interval);
            questionCount++;
            questions();
        };
        
    }
    
    //checks users selection for correctness - logs correct or incorrect to console
    $(document).on("click", ".userChoice", function() {
        var userChoice = $(this).attr("data-answer")
        var correctAnswer = qAndA[questionCount].correctAnswer;
        
        if (correctAnswer === userChoice) {
            correct++;
            userAnswerDisplay("correct");
            clearInterval(interval);
            setTimeout(nextQuestion, 3 * 1000);
            console.log("correct: ", correct);
        } else {
            incorrect++;
            userAnswerDisplay("incorrect");
            clearInterval(interval);
            setTimeout(nextQuestion, 3 * 1000);
            console.log("incorrect: ", incorrect);
        };
    })

    //final screen displays quiz results: correct, incorrect, and unanswered questions - gives player option to restart
    function finalScreen() {
        $("#timer").hide();
        var results = `<p>Correct Answers: ${correct}</p>
        <p>Incorrect Answers: ${incorrect}</p>
        <p>Unanswered Questions: ${unanswered}</p>
        <button type="button" class="btn btn-outline-danger" id="replay">Replay</button>`
        $("#game-section").html(results);
    }

    //resets variables and begins with first question
    $(document).on("click", "#replay", function() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        timer = 0;
        questionCount = 0;

        questions();
    })

    //function to show when user selects correct answer
    function userAnswerDisplay(status) {
        $("#timer").hide();

        var correctAnswer = qAndA[questionCount].correctAnswer
        //if player selects correct answer show screen congratulating them
        if (status === "correct") {
            $("#game-section").html(`<p>You chose the correct answer!</p>
            <p>"${correctAnswer}"</p>`)
        } 
        
        //if player selects wrong answer show screen telling them the answer is wrong and display correct answer
        if (status === "incorrect") {
            $("#game-section").html(`<p>Sorry, wrong answer!</p>
            <p>The correct answer is: "${correctAnswer}"</p>`)
        } 
        
        //if player doesn't select an answer before the time runs out display text telling them time's up and showing the correct answer
        if (status === "unanswered") {
            $("#game-section").html(`<p>Time's up!</p>
            <p>The correct answer is: "${correctAnswer}"</p>`)
        }
    }
})