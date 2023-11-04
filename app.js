const analogBtn = document.querySelector(".analog-btn");
const digitalBtn = document.querySelector(".digital-btn");

// ANALOG CLOCK
const analogClock = document.querySelector(".analog-clock");
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

analogBtn.addEventListener("click", () => {
  analogBtn.style.backgroundColor = "var(--lavender)";
  analogBtn.style.boxShadow = "0 0 8px 2px var(--lavender)";
  analogClock.style.display = "block";
  digitalBtn.style.backgroundColor = "transparent";
  digitalBtn.style.boxShadow = "none";
  digitalClock.style.display = "none";
});

function setAnalogClock() {
    const CURRENT_DATE = new Date();
    const SECOND_RATIO = CURRENT_DATE.getSeconds() / 60;
    const MINUTE_RATIO = (SECOND_RATIO + CURRENT_DATE.getMinutes()) / 60;
    const HOUR_RATIO = (MINUTE_RATIO + CURRENT_DATE.getHours()) / 12;
    
    setRotation(secondHand, SECOND_RATIO);
    setRotation(minuteHand, MINUTE_RATIO);
    setRotation(hourHand, HOUR_RATIO);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("rotate", rotationRatio * 360 + "deg");
}

setAnalogClock();
setInterval(setAnalogClock, 1000);

// DIGITAL CLOCK
const digitalClock = document.querySelector(".digital-clock");
const secondDigit = document.querySelector(".second-digit");
const minuteDigit = document.querySelector(".minute-digit");
const hourDigit = document.querySelector(".hour-digit");

digitalBtn.addEventListener("click", () => {
  digitalBtn.style.backgroundColor = "var(--lavender)";
  digitalBtn.style.boxShadow = "0 0 8px 2px var(--lavender)";
  digitalClock.style.display = "flex";
  analogBtn.style.backgroundColor = "transparent";
  analogBtn.style.boxShadow = "none";
  analogClock.style.display = "none";
});

function setDigitalClock() {
    const CURRENT_DATE = new Date();
    const SECONDS = CURRENT_DATE.getSeconds();
    const MINUTES = CURRENT_DATE.getMinutes();
    const HOURS = CURRENT_DATE.getHours();
    
    secondDigit.innerHTML = SECONDS;
    minuteDigit.innerHTML = MINUTES;
    hourDigit.innerHTML = HOURS;
}

setDigitalClock();
setInterval(setDigitalClock, 1000);
