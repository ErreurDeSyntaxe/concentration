export const state = {
  deck: [], // all the cards
  selected: [], // up to two cards selected during a round
  paired: [], // matching cards found by the player
};

/**
 *
 * @param {string} word The word to be displayed on the card
 * @param {string} equivalent The matching word (as they might not be identical)
 * @returns {Object} with the word and its equivalent
 */
const createCardObject = function (word, equivalent) {
  return {
    word,
    equivalent,
  };
};

/**
 * Create deck of identical/equivalent cards to play the game
 * @param {String} left String obtained from the form
 * @param {String} right String obtained from the form
 */
export const loadDeck = function (left, right) {
  const leftArr = left.split('\n');
  const rightArr = right.split('\n');

  leftArr.forEach((word, index) =>
    state.deck.push(createCardObject(word, rightArr[index]))
  );
  rightArr.forEach((word, index) =>
    state.deck.push(createCardObject(word, leftArr[index]))
  );
};
