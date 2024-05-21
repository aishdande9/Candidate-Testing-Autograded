input = require('readline-sync'); // Importing the readline-sync module
// // 
// 
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
``
//TODO: Variables for Part 2
const questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
];
const correctAnswers = ["Sally Ride", "true", "40", "Trajectory", '3'];
const candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Hi! Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  console.log("We have a short quiz for you !!");
    for (let i = 0; i < questions.length; i++) {
      candidateAnswer = input.question(questions[i]);
      candidateAnswers.push(candidateAnswer);
    }
  }


function gradeQuiz(candidateAnswers) {
  let candidateScore = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  
    for(let i = 0;i<candidateAnswers.length;i++){
      if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
        candidateScore++;
        console.log(candidateAnswers[i] +":  you answered correctly");
      }else{
        console.log(candidateAnswers[i] +"  : is a wrong answer");
      }
    }
    
    console.log("your total score is :"+candidateScore)
  let grade; //TODO 3.2 use this variable to calculate the candidates score.
  grade = (candidateScore / questions.length) * 100;
  console.log("You scored " + grade + "%.");
  if (grade >= 80) {
    console.log("Congratulations, " + candidateName + "! You passed the quiz!");
  } else {
    console.log("Sorry, " + candidateName + ". You did not pass the quiz. Better luck next time!");
    
  }
  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hi!! ", candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers);

}



// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};
