
/*
Rock Paper Scissors
 */

function playAgain() {
  document.getElementById("shose-u").style.visibility = "visible"; 
  document.getElementById("again").style.visibility = "hidden"; 
  document.getElementById("game").style.visibility = "visible"; 
  document.getElementById('final_result').style.visibility= "hidden";

}

//global variable
var arr = ["Rock","Paper","Scissors"];
var computeval ,btn ,com ,res ,playercount=0 ,comcount=0;

//play function
  function playRound() {
/*
    //call the function
  compute();
  result();
  
*/
    console.log('compute  '+compute()+' btn  '+btn);
    console.log('result   '+result()+'  comcount    '+comcount+'  playercount  '+playercount);
// show result
if(result() == "is tie"){
  document.getElementById("shose-u").innerHTML = "is tie";
  document.getElementById("shose-u").className = "rond"
}
if(result() == "you win"){
  document.getElementById("shose-u").innerHTML = "you win";
  document.getElementById("shose-u").className = "win"
  playercount++;
  document.getElementById('s_user').innerHTML = playercount;
  }
if(result() == "you lose"){
  document.getElementById("shose-u").innerHTML = "you lose";
  document.getElementById("shose-u").className = "lose"
  comcount++;
  document.getElementById('s_com').innerHTML = comcount;             
}
if(comcount>4 || playercount>4)
  {
    playercount = 0;comcount = 0;
    document.getElementById('s_user').innerHTML = playercount;
    document.getElementById('s_com').innerHTML = comcount;

    document.getElementById("again").style.visibility = "visible"; 
    document.getElementById("game").style.visibility = "hidden"; 
    document.getElementById('final_result').style.visibility= "visible";
    document.getElementById('final_result').innerHTML = result();
    document.getElementById("shose-u").style.visibility = "hidden"; 
}

}

//get id by click
  function btn_click(btn_id)
  {
    btn = btn_id;
      return btn_id;
  }

// random function
  function compute(){
    computeval = Math.floor(Math.random()*(3));
    com = arr[computeval];
    return com;
  }

//check result
  function result(){
// when result is tie    
    if(    (btn == arr[0] && com == arr[0]) 
        || (btn == arr[1] && com == arr[1])
        || (btn == arr[2] && com == arr[2])){
      res = "is tie";
    }
// when result is win
    else 
      if(   (btn == arr[0] && com == arr[2]) 
        || (btn == arr[1] && com == arr[0])
        || (btn == arr[2] && com == arr[1]))
        {
          res = "you win";
        }
  // when result is lose
      else 
        if(   (btn == arr[0] && com == arr[1]) 
          || (btn == arr[1] && com == arr[2])
          || (btn == arr[2] && com == arr[0]))
        {
          res = "you lose";
        }
  return res;
  }

