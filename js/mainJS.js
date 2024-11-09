
// debugging
// alert("Test");

// console.log("Hello world!");



/*********************************************************************************************************
 * 
 * 
 *  PLAYERS FUNCTION
 * 
 * 
 *********************************************************************************************************/
const element = document.getElementById("playerBtn01");
const elementb = document.getElementById("playerBtn02");
element.addEventListener("click", playerHit_1);
elementb.addEventListener("click", playerHit_2);


let PlayerHitCounter_1 = 0;
let PlayerHitCounter_2 = 0;

let pushBtnKeyHeld_1 = false;
let pushBtnKeyHeld_2 = false;

// Player 1
function playerHit_1() {

    meterBar1.style.height = (50 + (PlayerHitCounter_1 = PlayerHitCounter_1 + 10)) + "px";

    document.getElementById("displayPLayerCounter1").innerHTML = PlayerHitCounter_1;
}

// Player 2
function playerHit_2() {

    meterBar2.style.height = (50 + (PlayerHitCounter_2 = PlayerHitCounter_2 + 10)) + "px";

    document.getElementById("displayPLayerCounter2").innerHTML = PlayerHitCounter_2;
}
/*********************************************************************************************************
 * 
 * 
 *  Player keyboard controller
 * 
 * 
 *********************************************************************************************************/
// document.addEventListener("keydown", function(event) {

//     if (event.key === "A" || event.key === "a") {
//         document.getElementById("playerBtn01").click();
//     }
//     if (event.key === "L" || event.key === "l") {
//         document.getElementById("playerBtn02").click();
//     }
// });


// Track whether each key is being held down
let aKeyHeld = false;
let lKeyHeld = false;

document.addEventListener("keydown", function(event) {
    if ((event.key === "A" || event.key === "a") && !aKeyHeld) {
        aKeyHeld = true; // Set the flag to indicate the key is held
        document.getElementById("playerBtn01").click();
    }
    if ((event.key === "L" || event.key === "l") && !lKeyHeld) {
        lKeyHeld = true; // Set the flag to indicate the key is held
        document.getElementById("playerBtn02").click();
    }
});

document.addEventListener("keyup", function(event) {
    // Reset the flags when the keys are released
    if (event.key === "A" || event.key === "a") {
        aKeyHeld = false;
    }
    if (event.key === "L" || event.key === "l") {
        lKeyHeld = false;
    }
});








/*********************************************************************************************************
 * 
 * 
 *  TESTING
 * 
 * 
 *********************************************************************************************************/

// Add an event listener for keydown events
// document.addEventListener("keydown", function(event) {
//     // Check if the pressed key is "K" (event.key === 'k')
//     if (event.key === "k" || event.key === "K") {
//         // Display an alert if the key is "K"
//         alert("You pressed the 'K' key!");
//     }
// });
