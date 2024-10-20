export const state = {
  deck: {},
};

export const loadDeck = function (left, right) {
  const leftArr = left.split('\n');
  const rightArr = right.split('\n');
  leftArr.forEach((vocab, index) => {
    state.deck[vocab] = rightArr[index];
  });
};
