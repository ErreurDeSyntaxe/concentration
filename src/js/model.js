export const state = {
  deck: {},
};

/**
 * Create deck of identical/equivalent cards to play the game
 * @param {String} left String obtained from the form
 * @param {String} right String obtained from the form
 */
export const loadDeck = function (left, right) {
  const leftArr = left.split('\n');
  const rightArr = right.split('\n');
  leftArr.forEach((vocab, index) => {
    state.deck[vocab] = rightArr[index];
  });
};
