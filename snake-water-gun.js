// Snake, Water, Gun
let i = 0
let choices = ['S', 'W', 'G']
user_score = 0
comp_score = 0
while (i < 10) {
    let ind = Math.floor(Math.random() * 3)
    comp_choice = choices[ind]
    console.log(comp_choice)
    let user_choice = prompt("Choose S(Snake) or W(Water) or G(Gun): ")
    
    if (user_choice == 'S' && comp_choice=='W') {
        user_score++;
        console.log("Your point!")
    }
    else if (user_choice=='W' && comp_choice=='G') {
        user_score++;
        console.log("Your point!")
    }
    else if (user_choice=='G' && comp_choice=='S') {
        user_score++;
        console.log("Your point!")
    }
        
        
    else if (user_choice=='W' && comp_choice=='S') {
        comp_score++;
        console.log("Computer's point!")
    }
    else if (user_choice=='G' && comp_choice=='W') {
        comp_score++;
        console.log("Computer's point!")
    }
    else if (user_choice=='S' && comp_choice=='G') {
        comp_score++;
        console.log("Computer's point!")
    }
    else if(user_choice==comp_choice)
        console.log("User's choice = Computer's choice!!")
    
    i++;
}

if (user_score > comp_score) {
    alert("You have won! "+"Your score: "+ user_score+"; "+ " Computer score: "+comp_score, ";")
}
else if (comp_score > user_score) {
    alert("Computer has won!"+ "Your score: "+ user_score+ "; "+ "Computer score: "+ comp_score, ";")
}
else {
   alert("Match is a tie!")
}
