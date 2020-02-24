// define variables
const endTime = new Date('2021-01-16');
const getP = document.getElementById('timer');
const daysP = document.createElement('p');

// create fx to execute clearInterval
function endT() {
    clearInterval();
}

// Set time interval for updating timer
window.onload = setInterval(function() {
    tickTock();
}, 1000);

// create fx to pull the time and run necessary calculations
function tickTock () {
    let getTime = new Date();
    let difference = endTime - getTime;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // create days p tag when days exist
    if (days >= 1) {
        crP();
    };

    // create separate p tag for number of days
    function crP(){
        daysP.id = 'daysPid';
        document.getElementById('daysDiv').appendChild(daysP);
        daysP.innerHTML = `<span style='color:white;font-size:3.5em;'>${days}</span><span style='color:green;font-size:2.5em;'><br>DAYS</span>`; 
    };

    let display = `${hours}hours <span style='color:purple;font-size:50px'>|</span> ${minutes}minutes <span style='color:purple;font-size:50px'>|</span> ${seconds}seconds`;

    getP.innerHTML = display;

    // execute clearInterval when difference between two times is 0
    if (difference === 0) {
        endT();
    };
}


