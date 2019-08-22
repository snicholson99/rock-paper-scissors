import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [page, changePage] = useState("start");
  const [isTension, toggleTension] = useState(false);

  const onUserSelection = (userSelection) => {
    const botOptions = ["rock", "paper", "scissors"];
    const botSelection = botOptions[Math.floor(Math.random() * botOptions.length)];
    isTension && changePage("loading");
    setTimeout(() => {
      if (userSelection === "rock") {
        if (botSelection === "rock")     { changePage("draw"); }
        if (botSelection === "paper")    { changePage("lose"); }
        if (botSelection === "scissors") { changePage("win");  }
      }
      if (userSelection === "paper") {
        if (botSelection === "rock")     { changePage("win");  }
        if (botSelection === "paper")    { changePage("draw"); }
        if (botSelection === "scissors") { changePage("lose"); }
      }
      if (userSelection === "scissors") {
        if (botSelection === "rock")     { changePage("lose"); }
        if (botSelection === "paper")    { changePage("win");  }
        if (botSelection === "scissors") { changePage("draw"); }
      }
    }, isTension ? 2000 : 0);
  }

  return (
    <div className="App">
      {page === "start" && (
        <div className="page page-start">
          <h1>Rock, Paper, Scissors</h1>
          <button onClick={() => changePage("select")}>Play</button>
          <div className="tension-checkbox">
            <input id="tension" type="checkbox" checked={isTension} onChange={() => toggleTension(!isTension)}/>
            <label htmlFor="tension">With added tension...</label>
          </div>
          {isTension && (
            <React.Fragment>
              <h3>Epilepsy Warning!</h3>
              <p>
                Added tension contains flashing images.<br/>
                Viewer discretion is advised.
              </p>
            </React.Fragment>
          )}
        </div>
      )}
      {page === "select" && (
        <div className="page page-select">
          <div>
            <button onClick={() => onUserSelection("rock")}>
              <i className="fas fa-hand-rock"/>
              <p>Rock</p>
            </button>
            <button onClick={() => onUserSelection("paper")}>
              <i className="fas fa-hand-paper"/>
              <p>Paper</p>
            </button>
            <button onClick={() => onUserSelection("scissors")}>
              <i className="fas fa-hand-scissors"/>
              <p>Scissors</p>
            </button>
          </div>
        </div>
      )}
      {page === "loading" && (
        <div className="page page-loading">
          <i className="fas fa-spinner" />
        </div>
      )}
      {page === "win" && (
        <div className="page page-win">
          <i className="fas fa-trophy"/>
          <h2>You Won!</h2>
          <div>
            <button onClick={() => changePage("select")}>Restart</button>
            <button onClick={() => changePage("start")}>Back To Start</button>
          </div>
        </div>
      )}
      {page === "lose" && (
        <div className="page page-lose">
          <i className="fas fa-skull-crossbones"/>
          <h2>You Lost!</h2>
          <div>
            <button onClick={() => changePage("select")}>Restart</button>
            <button onClick={() => changePage("start")}>Back To Start</button>
          </div>
        </div>
      )}
      {page === "draw" && (
        <div className="page page-draw">
          <i className="fas fa-handshake"/>
          <h2>It's a Draw!</h2>
          <div>
            <button onClick={() => changePage("select")}>Restart</button>
            <button onClick={() => changePage("start")}>Back To Start</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
