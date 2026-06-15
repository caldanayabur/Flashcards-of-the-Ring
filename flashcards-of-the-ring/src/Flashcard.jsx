function Flashcard({ card, isFlipped, onFlip, cardNumber }) {
  return (
    <article
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={onFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <span className="card-number">Card {cardNumber}</span>
          <div className="card-image-wrap">
            <img className="card-image" src={card.questionImage} alt={card.question} />
          </div>
          <h2>{card.question}</h2>
        </div>

        <div className="flip-card-back">
          <span className="card-number">Answer</span>
          <div className="card-image-wrap card-image-wrap--back">
            <img className="card-image" src={card.answerImage} alt={card.answer} />
          </div>
          <p>{card.answer}</p>
        </div>
      </div>
    </article>
  );
}

export default Flashcard;