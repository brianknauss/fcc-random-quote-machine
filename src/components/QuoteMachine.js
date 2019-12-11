import React from 'react';
import Button from './Button';

const QuoteMachine = ({assignNewQuoteIndex, selectedQuote}) => (
  <React.Fragment>
  <p id='text'>
    {selectedQuote ?
      (
        <p>
        {selectedQuote.quote} - <span id='author'>{selectedQuote.author}</span>
        </p>
      ) : null
    }

    <Button buttonDisplayName="Quote Me!" clickHandler={assignNewQuoteIndex}/>
  </p>
  <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Me!</a>
  </React.Fragment>
);

export default QuoteMachine
