let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice= ()=>{
  const options= ["rock", "paper", "scissors"];
  const randomIdx= Math.floor(Math.random()*3);
  return options[randomIdx];
}

const drawGame= ()=>{
    // console.log("game was Draw.");
    msg.innerHTML="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
 if(userWin)
 {
    userScore++;
    userScorePara.innerHTML= userScore;
    msg.innerHTML=`you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
 }
 else{
   compScore++;
   compScorePara.innerHTML= compScore;
    msg.innerHTML=`You Lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
 }
}

const playGame= (userChoice)=> {
console.log("user Choice = ", userChoice);
// Generate computer choice

const compChoice = genCompChoice();
console.log("comp Choice = ", compChoice);

if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice === "rock")
        {
            // scissors, paper
            userWin= compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
             // rock, scissors
             userWin = compChoice=== "rock" ? true : false;
        }

        else{
            // rock, paper
            userWin = compChoice=== "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
    
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});