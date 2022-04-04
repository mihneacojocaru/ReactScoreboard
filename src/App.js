import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faClose } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";

function App() {
  const [players, setPlayers] = useState([
    {
      name: "John",
      points: 5,
      id: 1,
    },
    {
      name: "Ashley",
      points: 2,
      id: 2,
    },
    {
      name: "Timberly",
      points: 1,
      id: 3,
    },
  ]);

  const addPlayer = (newPlayer = "NewPlayer") => {
    setPlayers((prev) => [
      ...prev,
      {
        name: newPlayer,
        points: 0,
        id: players.length + 1,
      },
    ]);
  };

  const removePlayer = (id) => {
    setPlayers(players.filter((e) => e.id !== id));
  };

  const getHighestScore = () => {
    let scores = [];

    players.forEach((e) => {
      scores.push(e.points);
    });

    return Math.max(...scores);
  };

  const scoreChange = (button, playerName) => {
    if (button === "+") {
      for (let i = 0; i < players.length; i++) {
        if (players[i].name === playerName) {
          players[i].points += 1;
        }
      }
    } else if (button === "-") {
      for (let i = 0; i < players.length; i++) {
        if (players[i].name === playerName) {
          players[i].points -= 1;
        }
      }
    }
  };

  return (
    <div className="app">
      <div className="app-body">
        <Header players={players} />
        <div className="main__container">
          {players.map((item) => (
            <div key={item.id}>
              <div className="main__container-player">
                <FontAwesomeIcon
                  icon={faClose}
                  className="main__container-player-icon close"
                />
                <FontAwesomeIcon
                  icon={faCrown}
                  className="main__container-player-icon crown"
                />
                <span className="main__container-player-name">{item.name}</span>
                <div className="main__container-player-buttons">
                  <span>-</span>
                  <span className="score">{item.points}</span>
                  <span>+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="add-player">
          <input type="text" placeholder="ENTER A PLAYERS NAME" />
          <button>Add Player</button>
        </div>
      </div>
    </div>
  );
}

export default App;
