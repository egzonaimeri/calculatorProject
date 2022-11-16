// #7 added a buttonClick event so when we click the button it gives us an event
const buttonClicked = (event) =>{
    // #9 create a buttonText to allow us to see what button we clicked, by getting that innerHTML to know whaat button was clicked
    const buttonText = event.target.innerHTML;
    // #10 output to the console so we can see what we clicked on
    console.log(buttonText);
    //#11 created to show number on our calculator
    const screen = document.getElementById("screen");
    //# 13 added to overwrite the zero when we click on another number and have that number.
     if (screen.innerHTML === "0" || screen.innerHTML === "ERROR") {
        screen.innerHTML = buttonText;
    } else {  
        //#12 we can continue to have the number displayed
        screen.innerHTML =  screen.innerHTML + buttonText;
     }
};

 // #14 create for equal button
const equalClicked = (event) =>{
    // #15 Used to put an error handling for when there is an error 
    try {
    // #15 added to put the event in console
    const input = document.getElementById("screen").innerHTML;
    const output = eval(input);
    // #16 take the evaluted input and put it in the calculator
    document.getElementById("screen").innerHTML = output; 
    } catch (eror) {
        document.getElementById("screen").innerHTML = "ERROR";
    }
    
};
//#17 Create a function to clear the  "C"
const clearClicked = (event) =>{
    document.getElementById("screen").innerHTML = "0";

};

//#19 Functionto use KEYS to press to add on the calculator
document.addEventListener("keydown", (event) => {
    const screen = document.getElementById("screen");
    const numbers = ["1", "2", "3", "4", "5", "6","7", "8", "9", "0"];
    if (numbers.includes(event.key)) {
        if (screen.innerHTML === "0" || screen.innerHTML === "ERROR") {
            screen.innerHTML = buttonText;
        } else {  
            screen.innerHTML =  screen.innerHTML + buttonText;
        }
    } else if (["*", "/", "+", "-"].includes(event.key)) {
        screen.innerHTML = screen.innerHTML + event.key;
    } else if (event.key === "Enter" || event.key === "=") {
        equalClicked ();
    }
});