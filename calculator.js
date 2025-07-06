let answer={
    solution:0,
    clear:0
}

function appendValue(Value){
    document.querySelector(".input").value+=Value;  //we will get a string as "234-2"
}



function calculateValue(){
    const Value=document.querySelector(".input").value
    const result=eval(Value)                                   // eval -> is an inbuilt fuction to solve numbers inside the string
    answer.solution=result
    document.querySelector(".input").value=answer.solution

    if(document.querySelector(".input").value==='undefined'){
        document.querySelector(".input").value=0
    }
    
}


function clearValue(){
    document.querySelector(".input").value=answer.clear
}

function deleteValue(){
    string = document.querySelector(".input").value.slice(0, -1);;
    //console.log(string)
    document.querySelector(".input").value=string
}


let score=JSON.parse(localStorage.getItem("score")) || {
    wins:0,
    ties:0,
    losses:0
};                                  //reads the data from localstorage created in the fuction.
                                    // Again we convert it into a JS-Object from JSON-String
                                    // we can also use " !score " instead of " score===null "
/*
if(score===null){ 
    score={
        wins:0,
        ties:0,
        losses:0
    }
}
    */
displayScore()

function playGame(playerMove){
    const Move=getComputerMove();
    let result='';
    if(playerMove==='rock'){
        
        if(Move==='rock'){
            result='You Tie';
            document.querySelector(".outcomes2").innerHTML=`You <img src="pictures/rock-emoji.png"> <img src="pictures/rock-emoji.png"> Computer`;
        }else if(Move==='paper'){
            result='You Lose';
            document.querySelector(".outcomes2").innerHTML=`You <img src="pictures/rock-emoji.png"> <img src="pictures/paper-emoji.png"> Computer`;
        }else if(Move==='scissors'){
            result='You Win';
            document.querySelector(".outcomes2").innerHTML=`You <img src="pictures/rock-emoji.png"> <img src="pictures/scissors-emoji.png"> Computer`;
        }
        
    }
    else if(playerMove==='paper'){
        if(Move==='rock'){
            result='You Win';
            document.querySelector(".outcomes2").innerHTML=`You <img src="pictures/paper-emoji.png"> <img src="pictures/rock-emoji.png"> Computer`;
        }else if(Move==='paper'){
            result='You Tie';
            document.querySelector(".outcomes2").innerHTML=`You <img src="pictures/paper-emoji.png"> <img src="pictures/paper-emoji.png"> Computer`;
        }else if(Move==='scissors'){
            result='You Lose';
            document.querySelector(".outcomes2").innerHTML=`You <img src="pictures/paper-emoji.png"> <img src="pictures/scissors-emoji.png"> Computer`;
        }
    }
    else if(playerMove==='scissors'){
        if(Move==='rock'){
            result='You Lose';
            document.querySelector(".outcomes2").innerHTML=`You <img src="pictures/scissors-emoji.png"> <img src="pictures/rock-emoji.png"> Computer`;
        }else if(Move==='paper'){
            result='You Win';
            document.querySelector(".outcomes2").innerHTML=`You <img src="pictures/scissors-emoji.png"> <img src="pictures/paper-emoji.png"> Computer`;
        }else if(Move==='scissors'){
            result='You Tie';
            document.querySelector(".outcomes2").innerHTML=`You <img src="pictures/scissors-emoji.png"> <img src="pictures/scissors-emoji.png"> Computer`;
        }
    }



    if(result==='You Win'){
        score.wins+=1;
    }else if(result==='You Lose'){
        score.losses+=1;
    }else if(result==='You Tie'){
        score.ties+=1;
    }

    localStorage.setItem("score",JSON.stringify(score));  // setting the data stored in the system web localstorage.
                                                          //also we save the data as JSON-String by converting it
    displayScore();                                                     
    document.querySelector('.outcomes1').innerText=`${result}`;
    
}
function getComputerMove(){
    let random =Math.random();
    
    let move ='';

    if(random>0 && random<1/3){
        move='rock';
    }else if(random<2/3 && random>=1/3){
        move='paper';
    }else{
        move='scissors';}
    return move;
}
function displayScore(){
    document.querySelector('.scores').innerText=`wins: ${score.wins}, losses :${score.losses}, ties: ${score.ties}`;
}
function changeTitle(name){
    document.querySelector('h1').innerText=`${name} - by Vamsi..`
}