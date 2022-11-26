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
clear.addEventListener("click", clearFunction);

let result = "";

function number() {
	if (this.textContent === "." && nownum.innerHTML.includes(".")) return;
	if (this.textContent === "." && nownum.innerHTML === "")
		nownum.innerHTML = "0";
	nownum.innerHTML += this.textContent;
}

function operate() {
	if (nownum.innerHTML === "" && prevnum.innerHTML === '' && this.textContent === "-") {
		nownum.innerHTML = "-";
		return;
	}

	if (sign.innerHTML !== "" && nownum.innerHTML !== "") {
		resultFunction();
	}

	if (sign.innerHTML !== "") {
		sign.innerHTML = this.textContent;
		return;
	}

	prevnum.innerHTML = nownum.innerHTML;
	sign.innerHTML = this.textContent;
	nownum.innerHTML = "";
}

function resultFunction() {
	if (prevnum.innerHTML === "" || nownum.innerHTML === "") return;

	let a = Number(nownum.innerHTML);
	let b = Number(prevnum.innerHTML);
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

	nownum.innerHTML = result;
	prevnum.innerHTML = "";
	sign.innerHTML = "";
}

function clearFunction() {
	result = "";
	nownum.innerHTML = "";
	prevnum.innerHTML = "";
	sign.innerHTML = "";
}
