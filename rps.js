//text align circle//

// let h1 = document.querySelector(".pick");
// var comp = h1.textContent;

// for (i = 0; i < comp.length; i++) {
// 	console.log(comp.charAt);
// 	const e = document.createElement("p");
// 	e.className = `letter${i}`;
// 	e.innerHTML = comp.charAt(i);
// 	h1.append(e);
// }

const comp = document.querySelector(".computer");
const choices = document.querySelectorAll(".btn");
const play = document.querySelector(".play");
const results = document.querySelector(".results__results");
const summary = document.querySelector(".results__summary");

let userChoice;

choices.forEach((choice) =>
	choice.addEventListener("click", (e) => {
		userChoice = e.target.id;
		e.target.setAttribute("style", "transform: scale(1.1)");
		console.log(userChoice);
	})
);

play.addEventListener("click", (genComp) => {
	const randomNumber = Math.floor(Math.random() * choices.length);
	console.log(randomNumber);
	let compIcon = document.getElementById(randomNumber);
	let clone = compIcon.cloneNode(true);
	comp.append(clone);
});
