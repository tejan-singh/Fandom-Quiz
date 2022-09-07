var readlineSync = require('readline-sync');

const questions = [
  {
  question: 'Which is the largest planet in the solar system? \n a. mercury \n b. earth \n c. Jupiter \n d. venus',
  answer:'c'
  },
  
  {
  question: 'How many Olympic rings are there? (answer in figures) \n a. 2 \n b. 3 \n c. 5 \n d. 5',
  answer: 'd'
  },
  
  {
  question: 'How many teeth does an adult human have? (answer in figures)  \n a. 32 \n b. 34 \n c. 35 \n d. 36',
  answer:'a'
  }
  ,
  
  {
  question: 'What do bees produce?\n a. wax \n b. honey \n c. milk \n d. wool',
  answer:'b'
  },

  {question: 'How many colors are there in a rainbow? (answer in figures)  \n a. 2 \n b. 3 \n c. 5 \n d. 7',
  answer: 'd'
  }
]

var score = 0;

var scores = {
  currentScore: score,
  HighestScore: {
    name: 'Tejan',
    score: 5
  }
}

console.log("Welcome to Quiz App! \nPlease enter correct option as a, b, c, d \n")

const quiz = (question, correctAnswer) => {
  const userAnswer = readlineSync.question(`${question} \n`)
  if(userAnswer === correctAnswer){
    console.log('You are right!')
    score = score+1
    scores.currentScore = score
    console.log(`Current score is ${score} \n`)
  }else{
    console.log('You are wrong!')
    console.log(`Current score is ${score} \n`)
  }
}

for (var i = 0; i < questions.length; i++){
  console.log(`Question no. ${i+1}`)
  quiz(questions[i].question,questions[i].answer)
}

console.log(`Final score is ${scores.currentScore}`)
console.log(`Highest score is ${scores.HighestScore.score} created by ${scores.HighestScore.name} \n`)

if(scores.currentScore >= scores.HighestScore.score){
  console.log('Congrats! You have beaten the highest score. Please share your screenshot to update the highest score')
}