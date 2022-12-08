//Make if function that compares 1 2 3. and A B C
// Make it so you can tie or lose.

// Attaches 1 2 3 values to buttons and A B C values to boxes.
//Make pop-up function run if function if user confirms.
//If user cancels, quit popup and allow user to select again.

//When if function runs call two boxes.
//If tie, copy element and announce tie.
//If failure red background with YOU LOSE text.
//play again text as per if win prompt below.

//If win simple you win play again? prompt.

//If confirm, exit prompt and allow play again.
//If no close website.



//This function is the generic barebones of the popup confirm leaving to build on later
//function myFunction() {
  //  var txt;
    //if (confirm("Are you sure?")) {
      //txt = "You pressed OK!";
    //} else {
      //txt = "You pressed Cancel!";
    //}

  //}
  
 
  function rock(){
    if (confirm("Would you like to play rock?")){
      let x = Math.floor(Math.random()* 3);
      
    let RPS = 1;
    RPS = Number(RPS);
    if(RPS === 1 && x === 0){ alert("Here are your results");
    text= "You have tied rock paper scissors"
    hrock.classList.add('animate');
    hscissors.classList.remove('animate');
    hpaper.classList.remove('animate');
  }
  else if(RPS === 1 && x === 1 ){ 
    alert("Here are your results");
    text = "You have lost rock paper scissors"
    hscissors.classList.remove('animate');
    hrock.classList.remove('animate');
    hpaper.classList.add('animate');
}
else if(RPS === 1 && x === 2 ) { alert("Here are your results");

hscissors.classList.add('animate');
hrock.classList.remove('animate');
hpaper.classList.remove('animate');
text = "You have won rock paper scissors";

}else{

}

    }else { text = "Please select another option.";

}
document.getElementById('output').textContent = text

}
function scissors(){
  if (confirm("Would you like to play scissors?")){
    let x = Math.floor(Math.random()* 3);
    let RPS = 2;
    RPS = Number(RPS);
if(RPS === 2 && x === 0) { alert("Here are your results");

hrock.classList.add('animate');
hscissors.classList.remove('animate');
hpaper.classList.remove('animate');
text = "You have lost rock paper scissors";

}
else if(RPS === 2 && x === 1) { alert("Here are your results");

hpaper.classList.add('animate');
hrock.classList.remove('animate');
hscissors.classList.remove('animate');
text = "You have won rock paper scissors";

}
else if(RPS === 2 && x === 2) { alert("Here are your results");

hscissors.classList.add('animate');
hrock.classList.remove('animate');
hpaper.classList.remove('animate');
text = "You have tied rock paper scissors";

}else{

}
  }else{
    text = "Please select another option."
  }
  
document.getElementById('output').textContent = text
}
function paper(){
  if(confirm("Would you like to play paper?")){
    let x = Math.floor(Math.random()* 3);
    let RPS = 3;
    RPS = Number(RPS);
if (RPS === 3 && x === 0) { alert("Here are your results");

hrock.classList.add('animate');
hscissors.classList.remove('animate');
hpaper.classList.remove('animate');
text = "You have won rock paper scissors";

}else if (RPS === 3 && x === 1) { alert("Here are your results");

hpaper.classList.add('animate');
hscissors.classList.remove('animate');
hrock.classList.remove('animate');
text = "You have tied rock paper scissors";

}
else if (RPS === 3 && x === 2) { alert("Here are your results");

hscissors.classList.add('animate');
hrock.classList.remove('animate');
hpaper.classList.remove('animate');
text = "You have lost rock paper scissors";

}else{

}
  }else{
    text ="Please select another option."
  }
  
document.getElementById('output').textContent = text
}
