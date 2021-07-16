
var movecount=0; 
let box_Array=document.getElementsByTagName("th");
for(let i=0;i<box_Array.length;i++)
box_Array[i].style.pointerEvents='none';

function startGame() {
      
  for(let i=0;i<box_Array.length;i++)
         box_Array[i].innerHTML="";  
    document.turn="X";
    document.winner=null;
    if(document.getElementById("gamestater").innerHTML=="Start Game" || document.getElementById("gamestater").innerHTML=="Play Next Game")
    {    
        setMessage("🙋‍♂️'s gets to start !!");
        document.getElementById("gamestater").innerHTML="Cancel Game";
        document.getElementById("gamestater").style.color="white";
        document.getElementById("gamestater").style.background="linear-gradient(to right ,red,rgba(255, 0, 0, 0.95),rgba(255, 0, 0, 0.65),rgba(255, 0, 0, 0.95),red)";
        for(let i=0;i<box_Array.length;i++)
            box_Array[i].style.pointerEvents='auto';
        for(let i=0;i<box_Array.length;i++)
            box_Array[i].style.backgroundColor="white";    

            document.getElementById("player1").style.border = "8px outset green";
            document.getElementById("player1").style.backgroundImage='none';
            document.getElementById("player2").style.backgroundImage='none';
            document.getElementById("player2").style.border = "8px solid  white";

   }
   else
   {
        document.getElementById("gamestater").innerHTML="Start Game";
        document.getElementById("message").innerText="";
        document.getElementById("gamestater").style.background="linear-gradient(to right ,green, rgba(0, 128, 0, 0.95), rgba(0, 128, 0, 0.65), rgba(0, 128, 0, 0.95),green)";

        for(let i=0;i<box_Array.length;i++)
            box_Array[i].style.pointerEvents='none';
            document.getElementById("player1").style.border = "none";
            document.getElementById("player2").style.border = "none";    
    
   }
   
}
function nextmove(square){
    movecount++;
    start=1;
        square.innerText=document.turn;
        switchTurn();
        square.style.pointerEvents='none';
   
  
}

{

function setMessage(msg){
    document.getElementById("message").innerText=msg;
}


function switchTurn() {
   if(cheakforwinner(document.turn)){
       if(document.turn=='X')
       var winner="🙋‍♂️";
       else
       winner="🙋";
       setMessage("congratulation!! "+winner+"'s player you win !");
       document.getElementById("gamestater").style.background="linear-gradient(to right ,green, rgba(0, 128, 0, 0.95), rgba(0, 128, 0, 0.65), rgba(0, 128, 0, 0.95),green)";
       document.winner=document.turn;
       movecount=0;
       if(document.turn=='X')
         document.getElementById("player1").style.backgroundImage="url(congratulation_gif.gif)";
       else
       document.getElementById("player2").style.backgroundImage="url(congratulation_gif.gif)";
       document.getElementById("gamestater").innerHTML="Play Next Game";
       for(let i=0;i<box_Array.length;i++)
            box_Array[i].style.pointerEvents='none';

   }
   else if(movecount==9){
    setMessage("It's Draw ");
    document.getElementById("gamestater").innerHTML="Play Next Game";
    document.getElementById("gamestater").style.background="linear-gradient(to right ,green, rgba(0, 128, 0, 0.95),rgba(0, 128, 0, 0.65), rgba(0, 128, 0, 0.95),green)";
    movecount=0;
   }

   else if ( document.turn=="X"){
   document.turn="O";
   setMessage("It's 🙋's turn !!");
   document.getElementById("player2").style.border = "8px outset green";
   document.getElementById("player1").style.border = "8px solid  white";
   
   }
    else {
        document.turn="X";
   setMessage("It's 🙋‍♂️'s turn");  
   document.getElementById("player1").style.border = "8px outset green";
   document.getElementById("player2").style.border = "8px solid white";
   }
}

function cheakforwinner(move){
    var result=false;
    if(
        cheakrow(1,2,3,move)||
        cheakrow(4,5,6,move)||
        cheakrow(7,8,9,move)||
        cheakrow(1,4,7,move)||
        cheakrow(2,5,8,move)||
        cheakrow(3,6,9,move)||
        cheakrow(1,5,9,move)||
        cheakrow(3,5,7,move)
        ){
      result=true;
    }
    return result;
}

function cheakrow(a,b,c,move){
    var result=false;
    if(getbox(a)==move&&getbox(b)==move&&getbox(c)==move){
        result=true;
        document.getElementById("s"+a).style.backgroundColor="rgb(53, 11, 168)";
        document.getElementById("s"+b).style.backgroundColor="rgb(53, 11, 168)";
        document.getElementById("s"+c).style.backgroundColor="rgb(53, 11, 168)";
    }
    return result;
}

function getbox(number){
   return document.getElementById("s"+number).innerText;
}

}