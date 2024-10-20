class View {
  _parentElement = document.querySelector('.play-form');

  /**
   * Pass the user's input vocabulary to the controller
   * @param {function} handler Retrieves the user's input
   */
  addHandlerPrint = function (handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler([...new FormData(this)]);
    });
  };
}

export default new View();
