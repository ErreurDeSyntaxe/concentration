import * as model from './model.js'; // import the inner workings
import view from './view.js'; // import the outer workings
import { DELAY_SEC } from './config.js';

/**
 * Get the user's input (works if only one textarea is filled)
 * @param {array} _a Throwaway variable (name of the textarea)
 * @param {array} leftWords Textarea content (value)
 * @param {array} _b Throwaway variable (name of the textarea)
 * @param {array} rightWords Textarea content (value)
 */
const getInputVocab = function ([[_a, leftWords], [_b, rightWords]]) {
  if (rightWords === '') rightWords = leftWords;
  model.loadDeck(leftWords, rightWords);
  view.renderDeck(model.state.deck);
};

/**
 * Receive and ompare the two 'flipped' cards
 * @param {HTML element} cardDiv div holding the card-face and card-back divs
 * @returns {undefined}
 */
const flipCard = function (cardDiv) {
  if (model.state.locked) return;
  cardDiv.querySelector('.card-face').classList.toggle('flipped');

  // keep track of 'flipped' cards
  model.state.selected.push(cardDiv);
  if (model.state.selected.length < 2) return;

  // two cards have been flipped. Play is locked until cards are flipped back
  model.state.locked = true;

  // find the card {} in the deck
  const cardOne = model.state.deck.find(
    (card) => card.word === model.state.selected[0].children?.[0].textContent
  );
  const cardTwo = model.state.deck.find(
    (card) => card.word === model.state.selected[1].children?.[0].textContent
  );

  // compare the two selected cards
  if (cardOne.equivalent === cardTwo.word) {
    model.state.selected.forEach((div) => div.classList.add('paired'));
    model.state.paired.push(cardOne, cardTwo);
    model.state.locked = false; // resume play
    // empty the 'flipped' card array to begin a new turn
    model.state.selected = [];
  } else
    setTimeout(() => {
      model.state.selected.forEach((poorMatch) => {
        poorMatch.querySelector('.card-face').classList.toggle('flipped');
      });
      model.state.locked = false;
      // empty the 'flipped' card array to begin a new turn
      model.state.selected = [];
    }, DELAY_SEC * 1000);
  // model.state.selected.forEach((poorMatch) => {
  //   setTimeout(() => {
  //     poorMatch.querySelector('.card-face').classList.remove('flipped'),
  //       DELAY_SEC * 1000;
  //     model.state.locked = false; // resume play
  //   });
  // });

  // // empty the 'flipped' card array to begin a new turn
  // model.state.selected = [];
};

/**
 * Add handlers to the View part of MVC
 */
const init = function () {
  view.addHandlerInput(getInputVocab);
  view.addHandlerCopy('Not really a handler');
  view.addHandlerFlip(flipCard);
};
init();
