import { useState } from 'react';
import './App.css';
import Flashcard from './Flashcard';

const cardPairs = [
  {
    question: 'What creature is Gollum?',
    answer: 'He is a Stoor Hobbit who was corrupted by the One Ring.',
  },
  {
    question: 'Who carries the One Ring to Mordor?',
    answer: 'Frodo Baggins.',
  },
  {
    question: 'What is the name of Aragorn’s sword?',
    answer: 'Andúril, Flame of the West.',
  },
  {
    question: 'What are the Elves’ three Rings called?',
    answer: 'Narya, Nenya, and Vilya.',
  },
  {
    question: 'What is Gandalf the Grey’s horse called in Rohan?',
    answer: 'Shadowfax.',
  },
  {
    question: 'Who is the Lord of the Nazgûl?',
    answer: 'The Witch-king of Angmar.',
  },
  {
    question: 'What does “Mellon” mean in Elvish?',
    answer: 'Friend.',
  },
  {
    question: 'Where is the One Ring destroyed?',
    answer: 'In the fires of Mount Doom.',
  },
  {
    question: 'What is the home of the Hobbits called?',
    answer: 'The Shire.',
  },
  {
    question: 'Who forges the Rings of Power with Celebrimbor?',
    answer: 'Sauron, disguised as Annatar.',
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