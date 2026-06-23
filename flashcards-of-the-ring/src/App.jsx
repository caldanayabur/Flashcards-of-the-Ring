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
    answer: 'Hobbit.',
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
    answer: 'Anduril.',
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
    answer: 'Mount Doom.',
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
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState(null);

  const currentCard = cardPairs[currentIndex];

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleNextCard = () => {
    const newIndex = getRandomIndex(currentIndex, cardPairs.length);
    setCurrentIndex(newIndex);
    setIsFlipped(false);
    setGuess('');
    setResult(null);
  };

  const handleGuessSubmit = () => {
    setResult(checkGuess(guess, currentCard.answer) ? 'correct' : 'incorrect');
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

        {!isFlipped && (
          <div className="guess-area">
            <input
              type="text"
              placeholder="Type your guess..."
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
            <button onClick={handleGuessSubmit}>Submit</button>
            {result === 'correct' && <p className="feedback correct">Correct!</p>}
            {result === 'incorrect' && <p className="feedback incorrect">Incorrect — try flipping the card!</p>}
          </div>
        )}

        <button className="next-button" onClick={handleNextCard}>
          Next Random Card
        </button>
      </section>
    </main>
  );
};

function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

const STOP_WORDS = new Set([
  'a','an','the','is','are','was','were','of','in','to','and','or',
  'he','she','it','who','what','where','how','by','on','at','for',
  'with','his','her','their','its','be','been','have','has','had',
]);

function extractKeyWords(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 0 && !STOP_WORDS.has(w));
}

function fuzzyWordMatch(guessWord, targetWord) {
  const maxDist = targetWord.length <= 4 ? 0 : targetWord.length <= 7 ? 1 : 2;
  return levenshtein(guessWord, targetWord) <= maxDist;
}

function checkGuess(guess, answer) {
  const keyWords = extractKeyWords(answer);
  if (keyWords.length === 0) return guess.trim().length > 0;
  const guessWords = extractKeyWords(guess);
  return keyWords.every(kw => guessWords.some(gw => fuzzyWordMatch(gw, kw)));
}

export default App;
