import { useState } from 'react';
import './App.css';
import Flashcard from './Flashcard';
import gollumImage from './assets/Gollum.jpg';
import smeagolImage from './assets/Smeagol.jpg';
import frodoImage from './assets/Frodo.png';
import oneRingImage from './assets/One-Ring.png';
import andurilImage from './assets/Anduril.png';
import aragornImage from './assets/Aragorn.jpg';
import elvenRingsImage from './assets/Three_Rings.jpg';
import mirkwoodImage from './assets/Mirkwood.png';
import legolasImage from './assets/Legolas.png';
import gandalfImage from './assets/Gandalf.png';
import arwenImage from './assets/Arwen.png';
import arwenAltImage from './assets/Arwen2.png';
import mountDoomImage from './assets/Mount_Doom.png';
import oneRingAltImage from './assets/One-Ring2.png';
import shireImage from './assets/The-Shire.jpeg';
import hobbitsImage from './assets/Hobbits.jpg';
import pippinSongImage from './assets/Pippin-Song.jpg';
import edgeOfNightImage from './assets/The-Edge-Of-Night.jpg';

const cardPairs = [
  {
    question: 'What creature is Gollum?',
    answer: 'He is a Stoor Hobbit who was corrupted by the One Ring.',
    questionImage: gollumImage,
    answerImage: smeagolImage,
    category: 'characters',
  },
  {
    question: 'Who carries the One Ring to Mordor?',
    answer: 'Frodo Baggins.',
    questionImage: oneRingImage,
    answerImage: frodoImage,
    category: 'characters',
  },
  {
    question: "What is the name of Aragorn's sword?",
    answer: 'Anduril, Flame of the West.',
    questionImage: aragornImage,
    answerImage: andurilImage,
    category: 'artifacts',
  },
  {
    question: "What are the Elves' three Rings called?",
    answer: 'Narya, Nenya, and Vilya.',
    questionImage: elvenRingsImage,
    answerImage: elvenRingsImage,
    category: 'artifacts',
  },
  {
    question: 'Where is Legolas from?',
    answer: 'Mirkwood.',
    questionImage: legolasImage,
    answerImage: mirkwoodImage,
    category: 'characters',
  },
  {
    question: 'What do the Elves call Gandalf?',
    answer: 'Mithrandir.',
    questionImage: gandalfImage,
    answerImage: gandalfImage,
    category: 'characters',
  },
  {
    question: 'What does Arwen mean in Elvish?',
    answer: 'Noble Maiden.',
    questionImage: arwenImage,
    answerImage: arwenAltImage,
    category: 'characters',
  },
  {
    question: 'Where is the One Ring destroyed?',
    answer: 'In the fires of Mount Doom.',
    questionImage: oneRingAltImage,
    answerImage: mountDoomImage,
    category: 'places',
  },
  {
    question: 'What is the home of the Hobbits called?',
    answer: 'The Shire.',
    questionImage: hobbitsImage,
    answerImage: shireImage,
    category: 'places',
  },
  {
    question: 'What song is sung by Pippin in Minas Tirith while Faramir rides out to defend his city?',
    answer: 'The Edge of Night.',
    questionImage: pippinSongImage,
    answerImage: edgeOfNightImage,
    category: 'artifacts',
  },
];

function getRandomIndex(currentIndex, length) {
  if (length === 1) return 0;

  let randomIndex = Math.floor(Math.random() * length);

  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * length);
  }

  return randomIndex;
}

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cardPairs[currentIndex];

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleNextCard = () => {
    const newIndex = getRandomIndex(currentIndex, cardPairs.length);
    setCurrentIndex(newIndex);
    setIsFlipped(false);
  };

  return (
    <main className="app-shell">
      <header className="header">
        <p className="eyebrow">Lord of the Rings study deck</p>
        <h1>Flashcards of the Ring</h1>
        <p className="intro">
          How much do you know about the Tolkien universe? Test yourself with this
          Lord of the Rings themed deck.
        </p>
        <p className="card-count">Number of Cards: {cardPairs.length}</p>
      </header>

      <section className="single-card-section" aria-label="Flashcard viewer">
        <Flashcard
          card={currentCard}
          isFlipped={isFlipped}
          onFlip={handleFlip}
          cardNumber={currentIndex + 1}
        />

        <button className="next-button" onClick={handleNextCard}>
          Next Random Card
        </button>
      </section>
    </main>
  );
};

export default App;
