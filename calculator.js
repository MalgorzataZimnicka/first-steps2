const numbers = document.querySelectorAll(".main__number");
const operator = document.querySelectorAll(".main__operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

const prevnum = document.querySelector(".aside__prevnum");
const sign = document.querySelector(".aside__operator");
const nownum = document.querySelector(".aside__nownum");

operator.forEach((button) => button.addEventListener("click", operate));
numbers.forEach((button) => button.addEventListener("click", number));
equal.addEventListener("click", resultFunction);
clear.addEventListener("clik", clearFunction);

let result = "";

function number() {
	nownum.innerHTML += this.textContent;
}

function operate() {
	prevnum.innerHTML = nownum.innerHTML;
	sign.innerHTML = this.textContent;
	nownum.innerHTML = "";
}
/*fix conditions*/

function resultFunction() {
	let b = Number(nownum.innerHTML);
	let a = Number(prevnum.innerHTML);
	let operatore = sign.innerHTML;

	switch (operatore) {
		case "+":
			result = a + b;
			break;
		case "-":
			result = b - a;
			break;
		case "*":
			result = a * b;
			break;
		case "/":
			result = b / a;
			break;
	}

	prevnum.innerHTML = result;
	nownum.innerHTML = "";
    sign.innerHTML = '';
}

function clearFunction() {
	result = "";
	nownum.innerHTML = "";
	prevnum.innerHTML = "";
	sign.innerHTML = "";
}

/*check exceptions and correct them*/
