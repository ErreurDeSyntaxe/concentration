class View {
  _playArea = document.querySelector('.play-area');
  _playAreaHeading = document.querySelector('.form-heading');
  _playForm = document.querySelector('.play-form');
  _btnCopy = document.querySelector('.btn-copy');
  _containerBtn = document.querySelector('.play-btn-container');

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

  addHandlerReshuffle() {
    this._containerBtn.addEventListener('click', (e) => {
      console.log(e.target);
    });
  }

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
   * Help read the code. The function that calls it is now clearer.
   * @returns {String} svg on the 'back' of the cards
   */
  _addSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFD00C"><path d="M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80h-80q-33 0-56.5-23.5T200-280v-80h-80v-80h80v-80h-80v-80h80v-80q0-33 23.5-56.5T280-760h80v-80h80v80h80v-80h80v80h80q33 0 56.5 23.5T760-680v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T680-200h-80v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z"/></svg>';
  }

  /**
   * Change heading text content and display/hide buttons used when playing
   */
  _toggleDisplay() {
    this._playAreaHeading.textContent =
      this._playAreaHeading.textContent === 'Play!' ? 'Input Words' : 'Play!';

    this._containerBtn.classList.toggle('hidden');
  }

  /**
   * Render the vocabulary in the form of 'cards' to be flipped by clicking
   * @param {Array} deck The model.state.deck array containing the vocabulary
   * @returns {undefined}
   */
  renderDeck = function (deck) {
    this._playArea.textContent = '';
    const markup = this._randomize(deck).reduce((accu, curr) => {
      return (
        accu +
        `
        <div class="card-div">
          <div class="card-face">${curr.word}</div>
          <div class="card-back">${this._addSVG()}</div>
        </div>`
      );
    }, '');
    this._playArea.insertAdjacentHTML('afterbegin', markup);

    this._toggleDisplay();
  };
}

export default new View();
