function game(){
//it is the function to call for the random colors in the six or three square boxes
var  colors=generateRandomColors(6);

var disres=  document.querySelector(".disres");

var numsquares=6;
var squares=document.querySelectorAll(".square");;
var pickColor=pickColor();
document.querySelector(".pickColor").textContent=pickColor;

//to give the function of easy and hard button
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

//to add the function of the easy button
easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquares=3;
    colors=generateRandomColors(numsquares);
    pickColor=colors[Math.floor(Math.random()*colors.length)];
    document.querySelector(".pickColor").textContent=pickColor;

    //to change the color and text of the result div
    disres.style.color="white";
    disres.textContent="START";


    //to give first three a new colors
    for(i=0;i<squares.length;i++){
        if(colors[i]){
           
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }

  
    //to remove the color of the top div
    document.querySelector("h1").style.backgroundColor="rgb(165, 165, 103)";

    
})

//to add the function of the hard button
hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");

//to remove the color and text of the result div
disres.style.color="white";
disres.textContent="START";

     //to remove the color of the top div
     document.querySelector("h1").style.backgroundColor="rgb(165, 165, 103)";

    //to put the display of last three block back into existance
    numsquares=6
    colors=generateRandomColors(numsquares);
    pickColor=colors[Math.floor(Math.random()*colors.length)];
    document.querySelector(".pickColor").textContent=pickColor;


    //to add different colors when hard button is hitted
    for(i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
       else{
        squares[i].style.display="none"; 
       }
    }
   
})

//to give the colors to each box present in the game
for(var i=0;i<squares.length;i++){
    //to add colors to the square boxes
    squares[i].style.backgroundColor=colors[i];

    //to add click listeners to these boxes
    squares[i].addEventListener("click",function(){
        var reqColor=this.style.backgroundColor;
        if(reqColor===pickColor){
          
            disres.textContent="Correct";
            disres.style.color="Green";
           changeColor(reqColor);
           document.querySelector("h1").style.backgroundColor=reqColor;
        }
        else{
        
          disres.textContent="Try Again!";
          disres.style.color="red";
        }
    });
}

function changeColor(color){
    //loop through all squares
    for(var j=0;j<squares.length;j++){
  //change the color of all squares to the given square
        squares[j].style.backgroundColor=color;

    }
}

//here is the function to select a random color from the color array
function pickColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}

//here the functions to select random colors in the square boxes
function generateRandomColors(num){

//to make an array of size num
var arr=[];

//to put num different colors in that array
for(var i=0;i<num;i++){
    //get random colors and push it in array
    arr[i]=randomColor();
}

//return the array
return arr;
}

//function to select a random color
function randomColor(){
    //pick a red from 0 to 255
var r=Math.floor(Math.random()*255);
    //pick a green from 0 to 255
    var g=Math.floor(Math.random()*255);
    //pick a blue from 0 to 255
    var b=Math.floor(Math.random()*255);
return "rgb(" + r + ", " + g + ", " + b + ")";
}

//to add the functionality to the again button
document.querySelector(".again").addEventListener("click",function(){
    document.querySelector("h1").style.backgroundColor="rgb(165, 165, 103)";
    disres.style.color="white";
    disres.textContent="START";
   
    
    colors=generateRandomColors(numsquares);
    pickColor=colors[Math.floor(Math.random()*colors.length)];
    document.querySelector(".pickColor").textContent=pickColor;


    //to add different colors when hard button is hitted
    for(i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
       else{
        squares[i].style.display="none"; 
       }
    }
});
}
game();
