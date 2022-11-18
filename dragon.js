const face = document.querySelector(".face");

face.addEventListener("click", m);

function m() {
	const eye = document.querySelector(".face__eye");
	eye.style.animation = '2s eye 2';
}
