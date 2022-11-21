setInterval(() => {
	//minutes and seconds
	let boxes = document.querySelectorAll(".container");

	boxes.forEach((box) => {
		let timemin = box.querySelector(".tekst__number-min");
		let timesec = box.querySelector(".tekst__number-sec");

		let mm = box.querySelector(".time__circle-m");
		let ss = box.querySelector(".time__circle-s");

		let m = new Date().getMinutes();
		let s = new Date().getSeconds();

		m = m < 10 ? "0" + m : m;
		s = s < 10 ? "0" + s : s;

		mm.style.strokeDashoffset = 500 - (500 * m) / 60;
		ss.style.strokeDashoffset = 625 - (625 * s) / 60;

		timemin.innerHTML = m;
		timesec.innerHTML = s;
	});
	//hours
	const b = new Date().getTimezoneOffset() / 60;

	let hoursny = document.querySelector(".tekst__number-h-ny");
	let hoursw = document.querySelector(".tekst__number-h-w");
	let hourst = document.querySelector(".tekst__number-h-t");

	let hhny = document.querySelector(".time__circle-h-ny");
	let hhw = document.querySelector(".time__circle-h-w");
	let hht = document.querySelector(".time__circle-h-t");

	const ut = new Date().getHours() + b;
	let hny = ut - 5;
	let hw = ut + 1;
	let ht = ut + 9;

	hny = hny < 1 ? hny + 24 : hny;
	hny = hny < 10 ? "0" + hny : hny;
	hw = hw > 24 ? hw - 24 : hw;
	hw = hw < 10 ? "0" + hw : hw;
	ht = ht > 24 ? ht - 24 : ht;
	ht = ht < 10 ? "0" + ht : ht;

	hoursny.innerHTML = hny;
	hoursw.innerHTML = hw;
	hourst.innerHTML = ht;

	hhny.style.strokeDashoffset = 380 - (380 * hny) / 2 / 24;
	hhw.style.strokeDashoffset = 380 - (380 * hw) / 2 / 24;
	hht.style.strokeDashoffset = 380 - (380 * ht) / 2 / 24;
});
