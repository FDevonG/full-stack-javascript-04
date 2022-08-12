let game = null;
document.querySelector('#btn__reset').addEventListener('click', e => {
	game = new Game();
	game.startGame();
});

document.querySelector('#qwerty').addEventListener('click', e => {
	if(e.target.classList.contains('key')){
		game.handleInteraction(e.target.textContent);
	}
});

window.addEventListener('keyup', e => {
	const regex = /[a-z]/i;
	if(regex.test(e.key)){
		game.handleInteraction(e.key);
	}
});

