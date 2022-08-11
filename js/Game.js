class Game {
	constructor(){
		this.missed = 0;
		this.phrases = [
			new Phrase('Make a virtue of necessity'),
			new Phrase('Happy as a clam'),
			new Phrase('Get a word in edgeways'),
			new Phrase('Take a back seat'),
			new Phrase('Back to the drawing board'),
		];
		this.activePhrase = null;
	}
	
	/**
	 * Hides the overlay and sets up the game
	 * @method
	 */
	startGame(){
		this.resetGame();
		document.querySelector('#overlay').style.display = 'none';
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}
	
	/**
	 * resets the game so we can play another
	 * @method
	 */
	resetGame(){
		document.querySelector('#phrase').innerHTML = ``;
		document.querySelectorAll('.key').forEach(key => {
			key.classList.remove('wrong');
			key.classList.remove('chosen');
			key.disabled = false;
		});
		document.querySelectorAll('.tries').forEach(img => img.firstElementChild.setAttribute('src', 'images/liveHeart.png'));
	}
	
	/**
	 * Returns one of the phrases from the phrases array at random
	 * @method
	 */
	getRandomPhrase() {
		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	}
	
	/**
	 * handles the logic of what happens when the keyboard is clicked
	 * @method
	 * @param {Event} e - the event of the keyboard being clicked
	 */
	handleInteraction(letter){
		let keyboardLetter = null;
		document.querySelectorAll('.key').forEach(key => {
			if(key.textContent === letter){
				key.disabled = true;
				keyboardLetter = key;
			}
		})
		if(!this.activePhrase.checkLetter(letter)){
			keyboardLetter.classList.add('wrong');
			this.removeLife();
		} else{
			keyboardLetter.classList.add('chosen');
			this.activePhrase.showMatchedLetter(letter);
			this.checkForWin();
		}
	}
	
	/**
	 * Replaces one of the heart images and increments our missed variable. if missed is 5 or higher we call gameOver
	 * @method
	 */
	removeLife() {
		document.querySelector('.tries [src="images/liveHeart.png"]').setAttribute('src', 'images/lostHeart.png');
		this.missed++;
		if (this.missed >= 5){
			this.gameOver();
		}
	}
	
	/**
	 * checks if all the letter characters have been shown, if so we call gameOver
	 * @method
	 */
	checkForWin(){
		if(!document.querySelector('.hide')){
			this.gameOver();
		}
	}
	
	/**
	 * Determines if we have one or lost and siplays the overlay accordingly
	 * @method
	 */
	gameOver(){
		const overlay = document.querySelector('#overlay');
		if(this.missed >= 5){
			overlay.className = 'lose';
			document.querySelector('#game-over-message').textContent = `You have lost.`;
		} else {
			overlay.className = 'win';
			document.querySelector('#game-over-message').textContent = `Congratulations, you have won!`;
		}
		overlay.style.display = null;
		
	}
}