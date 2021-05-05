// document.querySelector("button").addEventListener("click", handleclick); //this is function which will ask two parameters 1st is click which will clicks the button and second we are calling the function


// function handleclick(){
//     alert("hurray i got clicked");
// }

//below is directly i am calling function instead of handle click
// document.querySelectorAll("button")[0].addEventListener("click", function () {alert("hurray i got clicked");})
// document.querySelectorAll("button")[1].addEventListener("click", function () {alert("hurray i got clicked");})
// document.querySelectorAll("button")[2].addEventListener("click", function () {alert("hurray i got clicked");})
// document.querySelectorAll("button")[3].addEventListener("click", function () {alert("hurray i got clicked");})
// document.querySelectorAll("button")[4].addEventListener("click", function () {alert("hurray i got clicked");})
// document.querySelectorAll("button")[5].addEventListener("click", function () {alert("hurray i got clicked");})
// document.querySelectorAll("button")[6].addEventListener("click", function () {alert("hurray i got clicked");})

//instead of writing the above 7 lines individually we can use for loop

var numberOfdrums=document.querySelectorAll(".drum").length;

for (i=0; i< numberOfdrums; i++){

//this code is for Mouse click i.e for buttons
document.querySelectorAll("button")[i].addEventListener("click", function (){   
// this.style.color="white"; this thing we used for changing the color
// console.log(this.innerHTML);
var InnerHTML=this.innerHTML;  //innerHTML will select the words which u type and store it in a variable

makeSound(InnerHTML);   //invoking the make sound method which has all the coditions defined in switch statement

buttonAnimation(InnerHTML);
});

}

//this code is for keyboard press 

//here i used only document since the key whichever u are pressing should be reacted to whole website
document.addEventListener("keypress", function(event){   //keypress is standard method The keypress event is fired when a key that produces a character value is pressed down. Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys.
//An event can be triggered by the user action e.g. clicking the mouse button or tapping keyboard
   makeSound(event.key);  //here we are calling make sound function passing event.key as a parameter ,suppose if u enter w key that key will be recorded by using event and that w key key will make sound since we made a function called makeSound
buttonAnimation(event.key);
});

function makeSound(key){   //key is passed as a parameter since this will be used in switch statement


    switch (key) {
        case "w":
            var tom= new Audio("sounds/tom-1.mp3");
            tom.play();
            break;
         case "a":
             var tom2audio = new Audio("sounds/tom-2.mp3");
             tom2audio.play();
             break;
         case "s":
            var tom3audio = new Audio("sounds/tom-3.mp3");
            tom3audio.play();
            break; 
         case "d":
            var tom4audio = new Audio("sounds/tom-4.mp3");
            tom4audio.play();
            break;
        case "j":
            var crashaudio = new Audio("sounds/crash.mp3");
            crashaudio.play();
            break;
         case "k":
            var kickaudio = new Audio("sounds/kick-bass.mp3");
            kickaudio.play();
            break;
        case "l":
            var snareaudio = new Audio("sounds/snare.mp3");
            snareaudio.play();
            break;   
        
    
        default:
            console.log(InnerHTML);
            break;
    }
    

}
//this code is for hovering and animation of the buttons when they click

function buttonAnimation(currentkey){     //buttonanimation is function which holds the parameter as current key this function we are calling in both the above codes and passing their InnerHTML and event.key as parameter

 var activeButton= document.querySelector("."+currentkey); //since class will be used as ".currentkey" so we are concatinating the dot

 activeButton.classList.add("pressed");   //here we are adding the class called pressed ,once the button is pressed this code gets activated and give hover

 setTimeout(function(){     //we need to come back to normal position once after clicking hence we are using settimeout inbuilt function which takes two parameters once is function and another is timestamp.
     activeButton.classList.remove("pressed")},100);
}

