class View {
  _playArea = document.querySelector('.play-area');
  _playForm = document.querySelector('.play-form');
  _btnCopy = document.querySelector('.btn-copy');

  /**
   * Pass the user's input vocabulary to the controller
   * @param {function} handler Retrieves the user's input
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
   */
  addHandlerCopy = function () {
    this._btnCopy.addEventListener('click', function (e) {
      e.preventDefault();
      const leftWords = document.getElementById('words-left');
      const rightWords = document.getElementById('words-right');
      rightWords.value = leftWords.value;
    });
  };

  renderDeck = function (deck) {
    console.log(deck);
    const markup = deck.reduce((accu, curr) => {
      return accu + `<div>${curr.word}</div>`;
    }, '');
    this._playArea.insertAdjacentHTML('afterbegin', markup);
  };
}

export default new View();
