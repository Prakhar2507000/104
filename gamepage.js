var y = Maths.floor(Maths.random() * 10 + 1);

playername = localStorage.getItem("player_name");
// count of attempts
// until hit
  

var guess = 1;

function submit()
{
    var x = document.getElementById("guessFeild").value;
    if(x == y)
    {
        alert("CONGRATULATION!!!"+playername+"  YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
        guess= 1;
    }

    else if(x > y)
    {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
    else{
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER")
    }
}

function playAgain()
    {
        y = maths.floor(maths.random() * 10 + 1);
    }
