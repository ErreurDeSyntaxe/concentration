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
      handler([...new FormData(this)]);
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
   * Render the vocabulary in the form of 'cards' to be flipped by clicking
   * Add event handler to enable play
   * @param {Array} deck The model.state.deck array containing the vocabulary
   * @returns {undefined}
   */
  renderDeck = function (deck) {
    console.log(deck);
    const markup = deck.reduce((accu, curr) => {
      // return (
      //   accu +
      //   `<div class="face-down card" data-word="${curr.word}" data-eq="${curr.equivalent}"></div>`
      // );
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

    // Event delegation: 'flipping' a card
    this._playArea.addEventListener('click', (e) => {
      e.target
        .closest('.card-div')
        .querySelector('.card-face')
        .classList.toggle('flipped');
    });
  };
}

export default new View();
