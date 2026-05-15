import React, { useState } from "react";
import "./Birthday.css";

const Birthday = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <h1>🎂 Happy Birthday My Love ❤️</h1>
        <p>You are the most special person in my life.</p>
        <p>May your day be filled with happiness and joy 💖</p>

        <button onClick={() => setShowMessage(true)}>
          Click for Surprise 🎁
        </button>

        {showMessage && (
          <div className="message">
            💌 I’m so lucky to have you in my life. <br />
            You mean everything to me. <br />
            I love you forever ❤️
          </div>
        )}
      </div>
    </div>
  );
};

export default Birthday;