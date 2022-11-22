let btn = document.querySelector(".switch");
let dot = document.querySelector(".dot");
console.log(dot);

let bulb = document.querySelector(".bulb-light");

btn.addEventListener("click", (active) => {
	//alternative with if

	// let activecheck = ".activedot, .activelight";

	// if (dot.matches(activecheck)) {
	// 	dot.classList.remove("activedot");
	// 	bulb.classList.remove("activelight");
	// 	dot.classList.add("passivedot");
	// 	bulb.classList.add("passivelight");
	// } else {
	// 	dot.classList.add("activedot");
	// 	bulb.classList.add("activelight");
	// 	dot.classList.remove("passivedot");
	// 	bulb.classList.remove("passivelight");
	// }

	bulb.classList.toggle("activelight2");
	dot.classList.toggle("activedot2");
});
