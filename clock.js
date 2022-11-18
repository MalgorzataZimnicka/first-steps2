setInterval(() => {
let hours = document.querySelector(".tekst__number-h-w");
let minutes = document.querySelector(".tekst__number-min-w");
let seconds = document.querySelector(".tekst__number-sec-w");

let hhw = document.querySelector(".time__circle-h-w");
let mmw = document.querySelector(".time__circle-m-w")
let ssw = document.querySelector(".time__circle-s-w");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

h = h < 10 ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = s < 10 ? "0" + s : s;

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;

hhw.style.strokeDashoffset = 380 - (380 * h/2)/24;
mmw.style.strokeDashoffset = 500 - (500 * m)/60;
ssw.style.strokeDashoffset = 625 - (625 * s)/60;
});

