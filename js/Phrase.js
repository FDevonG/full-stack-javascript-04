class Phrase {
	
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}
	
	/**
	 * Retrieves a user by email.
	 * @method
	 */
	addPhraseToDisplay() {
		let html = `<ul>`;
		this.phrase.split('').forEach(char => {
			if(char !== ' '){
				html += `<li class='hide letter ${char}'>${char}</li>`;
			} else {
				html += `<li class='space'> </li>`
			}
		});
		html += `</ul>`;
		document.querySelector('#phrase').innerHTML = html;
	}
	
	/**
	 * checks that the letter is found in the active phrase
	 * @method
	 * @param {String} letter - the letter to check for
	 * @return {boolean} returns true if the letter is found and false if not
	 */
	checkLetter(letter) {
		return this.phrase.includes(letter);
	}
	
	/**
	 * Revieles the matching letters that are hidden
	 * @method
	 * @param {String} letter - the letter to show
	 */
	showMatchedLetter(letter){
		document.querySelectorAll(`.${letter}`).forEach(matchingLetter => {
			matchingLetter.classList.remove('hide');
			matchingLetter.classList.add('show');
		});
	}
}