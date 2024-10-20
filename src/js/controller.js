import * as model from './model.js'; // import the inner workings
import view from './view.js'; // import the outer workings

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
};

/**
 * Add handlers to the View part of MVC
 */
const init = function () {
  view.addHandlerInput(getInputVocab);
  view.addHandlerCopy('Not really a handler');
};
init();
