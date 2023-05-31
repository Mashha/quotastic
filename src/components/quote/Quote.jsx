import "./quote.css";

function Quote() {
  return (
    <div className="quote-card">
      <div className="voting">
        <button className="up-vote">
          <i className="fa-solid fa-angle-up"></i>
        </button>
        <span>0</span>
        <button className="down-vote">
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div className="quote-part">
        <p>
          People will forget what you said. People will forget what you did. But
          people will never forget how you made them feel.
        </p>
        <div className="name-and-avatar">
          <img src="" alt="" />
          <h2></h2>
        </div>
      </div>
    </div>
  );
}

export default Quote;
