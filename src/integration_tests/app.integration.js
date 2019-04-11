import React from 'react';
import { renderIntoDocument, findRenderedDOMComponentWithClass, findRenderedDOMComponentWithTag, Simulate } from 'react-dom/test-utils';
import App from '../App'
import * as flashcardsJson from '../flashcards.json'

describe('Articulate Dev Challenge', () => {

  const flashcards = flashcardsJson.default;
  let component;
  let document;

  beforeEach(() => {
    component = <App flashcards={flashcards} />;
    document = renderIntoDocument(component);
  });

  describe('Initial Content', () => {
    it('should display header', () => {
      var app = getElementByClass('App');
      expect(app.innerHTML).to.contain('Articulate Dev Challenge');
      expect(app.innerHTML).to.contain('Flashcards Block');
    });
  
    it('should display flashcards', () => {
      var flashCardsContainer = getElementByClass('flash-card-container');
      var flashCards = flashCardsContainer.getElementsByTagName('article');
      expect(flashCards.length).to.eq(3);
    });

    it('should add a flashcard', () => {
      var flashCard = getElementByClass('add-flashcard');
      Simulate.click(flashCard);

      var flashCard = getElementByClass('flash-card-3');
      expect(flashCard.innerHTML).to.contain('Hello');
    });
  });

  describe('Flashcard', () => {
    it('should flip the flashcard when it is clicked', () => {
      var flashCard = getElementByClass('flash-card-0');
      expect(flashCard.innerHTML).to.contain('Front of card 1');

      Simulate.click(flashCard);

      var flashCard = getElementByClass('flash-card-0');
      expect(flashCard.innerHTML).to.contain('Back of card 1');
    });

    it('should display an image if one is exists', () => {      
      var flashCard = getElementByClass('flash-card-1');
      expect(flashCard.innerHTML).to.contain('Where is the best vacation destination?');

      Simulate.click(flashCard);

      var flashCard = getElementByClass('flash-card-1');
      var flashCardImage = flashCard.getElementsByTagName('img')
      expect(flashCardImage[0].src).to.contain('http://horizonviaggi.it/wp-content/uploads/2017/10/lipsi-grecia.jpg');
    });
  });

  function getElementByClass(className) {
    return findRenderedDOMComponentWithClass(document, className);
  }

});
