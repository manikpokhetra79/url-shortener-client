import React, { useState } from "react";
import "./styles.scss";
const App = () => {
  const [url, seturl] = useState("");
  const [shortCode, setShortCode] = useState(null);
  const handleClick = () => {
    // console.log(`${process.env.REACT_APP_API_URL}/shortener`);
    fetch(`${process.env.REACT_APP_API_URL}/shortener`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ longUrl: url }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setShortCode(data.Item.urlCode);
      });
  };
  return (
    <div>
      <div className="urlBox">
        <h1>Url Shortener</h1>
        <input
          type="text"
          placeholder="Enter url"
          onChange={(e) => seturl(e.target.value)}
        />
        <button className="submit-btn" onClick={handleClick}>
          Submit Url
        </button>
      </div>

      <div className="urlRespBox">
        {shortCode !== null && (
          <h4>
            Short url{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://1wg5lowei0.execute-api.us-east-1.amazonaws.com/prod/${shortCode}`}
            >{`https://1wg5lowei0.execute-api.us-east-1.amazonaws.com/prod/${shortCode}`}</a>
          </h4>
        )}
      </div>
    </div>
  );
};

export default App;
