import "./quote.css";

function Quote({quote}) {
  return (
    <div className="quote-card">
      <div className="voting">
        <button className="up-vote">
          <i className="fa-solid fa-angle-up"></i>
        </button>
        <span>{quote.score}</span>
        <button className="down-vote">
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div className="quote-part">
        <p>
          {quote.content}
        </p>
        <div className="name-and-avatar">
          <img src="" alt="" />
          <h2>{quote.author.first_name} {quote.author.last_name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Quote;
