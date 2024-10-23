export const state = {
  deck: [], // all the cards
  selected: [], // up to two cards selected during a round
  paired: [], // matching cards found by the player
  locked: false, // lock play to give the player time to read the 2nd card
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
 * @param {Array} left Array obtained from the form
 * @param {Array} right Array obtained from the form
 */
export const loadDeck = function (left, right) {
  left.forEach((word, index) =>
    state.deck.push(createCardObject(word, right[index]))
  );
  right.forEach((word, index) =>
    state.deck.push(createCardObject(word, left[index]))
  );
};
