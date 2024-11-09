
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


// let PlayerHitCounter_1 = 0;
// let PlayerHitCounter_2 = 0;

// let pushBtnKeyHeld_1 = false;
// let pushBtnKeyHeld_2 = false;

// // Player 1
// function playerHit_1() {

//     meterBar1.style.height = (50 + (PlayerHitCounter_1 = PlayerHitCounter_1 + 10)) + "px";

//     document.getElementById("displayPLayerCounter1").innerHTML = PlayerHitCounter_1;
// }

// // Player 2
// function playerHit_2() {

//     meterBar2.style.height = (50 + (PlayerHitCounter_2 = PlayerHitCounter_2 + 10)) + "px";

//     document.getElementById("displayPLayerCounter2").innerHTML = PlayerHitCounter_2;
// }







let PlayerHitCounter_1 = 0;
let PlayerHitCounter_2 = 0;

const meterBar1 = document.getElementById("meterBar1");
const meterBar2 = document.getElementById("meterBar2");

// Player 1
function playerHit_1() {
    PlayerHitCounter_1 += 10;
    meterBar1.style.height = (50 + PlayerHitCounter_1) + "px";
    document.getElementById("displayPLayerCounter1").innerHTML = PlayerHitCounter_1;
}

// Player 2
function playerHit_2() {
    PlayerHitCounter_2 += 10;
    meterBar2.style.height = (50 + PlayerHitCounter_2) + "px";
    document.getElementById("displayPLayerCounter2").innerHTML = PlayerHitCounter_2;
}

// Debounced Button Handlers
let button1Timeout;
let button2Timeout;

document.getElementById("playerBtn01").addEventListener("click", function() {
    clearTimeout(button1Timeout);
    button1Timeout = setTimeout(playerHit_1, 10);
});

document.getElementById("playerBtn02").addEventListener("click", function() {
    clearTimeout(button2Timeout);
    button2Timeout = setTimeout(playerHit_2, 10);
});





// Use 'touchstart' instead of 'click' for mobile compatibility
document.getElementById("playerBtn01").addEventListener("touchstart", function(event) {
    event.preventDefault(); // Prevents default touch behavior
    playerHit_1();
});

document.getElementById("playerBtn02").addEventListener("touchstart", function(event) {
    event.preventDefault();
    playerHit_2();
});

/*********************************************************************************************************
 * 
 * 
 *  Player keyboard controller
 * 
 * 
 *********************************************************************************************************/

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
