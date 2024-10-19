import * as People from './model.js'; // import the inner workings
import view from './view.js'; // import the outer workings

// use both inner & outer workings
view.renderMessage(People.jane.greet());
view.renderMessage(People.john.greet());
