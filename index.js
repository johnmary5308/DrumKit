//select the button inside the html and add an event
//listener that listens for when the button gets clicked

//use a forloop to select all the button
//count or get length of all the objects that have the class .drum
//Detecting button press
var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {
  //takes two input, what event it should listen to and
  //2. what it should do when the event is heard
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;


    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


    //does something when the button gets clicked{
    //this is the identity of the button that triggered the addEventListener
    // this.style.backgroundColor = "pink";
  });
}
//button should trigger this function when it gets clicked



//anonymous version up
// function handleClick()//does something when the button gets clicked,
// {
//   alert("I got clicked");
// }


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

//Detecting keyboard press
//Keyboard addEventListener
document.addEventListener("keydown", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key)
{
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);



  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);

}
