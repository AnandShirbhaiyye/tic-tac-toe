import { useState } from "react";
import "./App.css";

function App() {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });

  const play = () => {};
  return (
    <>
      <div className="App">
        <h1 className="text-center">✅...TIC-TAC-TOE...❎</h1>

        <div className="players-container">
          <span className="player-title"> Player 1: ✅</span>

          <span className="player-title"> Player 2: ❎</span>
        </div>

        <p className="text-center current-text">
          Current Player : {player === 1 ? "✅" : "❎"}
        </p>

        <div className="board">
          <div className="row">
            <div
              className="box"
              onClick={() => {
                play(1);
              }}
            >
              {board[1]}
            </div>
            <div
              className="box"
              onClick={() => {
                play(2);
              }}
            >
              {board[2]}
            </div>
            <div
              className="box"
              onClick={() => {
                play(3);
              }}
            >
              {board[3]}
            </div>
          </div>
          <div className="row">
            <div
              className="box"
              onClick={() => {
                play(4);
              }}
            >
              {board[4]}
            </div>
            <div
              className="box"
              onClick={() => {
                play(5);
              }}
            >
              {board[5]}
            </div>
            <div
              className="box"
              onClick={() => {
                play(6);
              }}
            >
              {board[6]}
            </div>
          </div>
          <div className="row">
            <div
              className="box"
              onClick={() => {
                play(7);
              }}
            >
              {board[7]}
            </div>
            <div
              className="box"
              onClick={() => {
                play(8);
              }}
            >
              {board[8]}
            </div>
            <div
              className="box"
              onClick={() => {
                play(9);
              }}
            >
              {board[9]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
