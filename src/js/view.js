class View {
  _playArea = document.querySelector('.play-area');
  _playForm = document.querySelector('.play-form');
  _btnCopy = document.querySelector('.btn-copy');

  /**
   * Pass the user's input vocabulary to the controller
   * @param {function} handler Retrieves the user's input
   * @returns {undefined}
   */
  addHandlerInput = function (handler) {
    this._playForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // extract the information from the form & make arrays
      const [[, left], [, right]] = [...new FormData(this)];
      const leftArr = left.split('\n');
      const rightArr = right.split('\n');

      // validate form input
      if (leftArr.length !== rightArr.length && rightArr[0] !== '') {
        alert('You must provide an equal number of items on each side');
        return;
      }

      // send the input to the controller
      handler(leftArr, rightArr);
      this.classList.add('hidden');
    });
  };

  /**
   * Copy text from left textarea to right textarea
   * This function is purely for user friendliness, as the application will
   * work the same way if the right textarea is empty or if it contains the
   * same vocabulary words.
   * @returns {undefined}
   */
  addHandlerCopy = function () {
    this._btnCopy.addEventListener('click', function (e) {
      e.preventDefault();
      const leftWords = document.getElementById('words-left');
      const rightWords = document.getElementById('words-right');
      rightWords.value = leftWords.value;
    });
  };

  /**
   * Flip the card and send it to the controller
   * @param {function} handler
   */
  addHandlerFlip = function (handler) {
    // Event delegation: 'flipping' a card
    this._playArea.addEventListener('click', (e) => {
      const card = e.target.closest('.card-div');
      if (!card) return; // if the click was not on a card
      if (card.classList.contains('paired')) return; // if the card was matched
      if (card.querySelector('.card-face').classList.contains('flipped'))
        return; // if the card was already selected

      handler(card);
    });
  };

  /**
   * Shuffle deck of cards
   * @param {Array} deck Card objects
   * @returns {Array} Shuffled deck
   */
  _randomize(deck) {
    const tempDeck = [...deck];
    return deck.map(() => {
      const randomIndex = Math.floor(Math.random() * tempDeck.length);
      return tempDeck.splice(randomIndex, 1)[0];
    });
  }

  /**
   * Render the vocabulary in the form of 'cards' to be flipped by clicking
   * @param {Array} deck The model.state.deck array containing the vocabulary
   * @returns {undefined}
   */
  renderDeck = function (deck) {
    const markup = this._randomize(deck).reduce((accu, curr) => {
      return (
        accu +
        `
        <div class="card-div">
          <div class="card-face">${curr.word}</div>
          <div class="card-back">What's Here?</div>
        </div>`
      );
    }, '');
    this._playArea.insertAdjacentHTML('afterbegin', markup);
  };
}

export default new View();
