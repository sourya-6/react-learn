import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clickSound from './sounds/Click.wav';

import winSound from './sounds/Win.wav';
import drawSound from './sounds/Draw.wav';

function App() {
  const chance = useRef(0);
  const [buttons, setButtons] = useState(Array(9).fill(''));
  const [winningCells, setWinningCells] = useState([]);
  const [scores, setScores] = useState({ X: 0, O: 0, Draws: 0 });

  const clickAudio = new Audio(clickSound);
  const winAudio = new Audio(winSound);
  const drawAudio = new Audio(drawSound);

  const isPvC = true; // toggle this to false for PvP

  const click = (i) => {
    if (buttons[i] || winningCells.length > 0) return alert("Invalid Move");

    const newButtons = [...buttons];
    const currentPlayer = chance.current % 2 === 0 ? 'X' : 'O';
    newButtons[i] = currentPlayer;
    setButtons(newButtons);
    clickAudio.play();
    chance.current += 1;

    if (isPvC && currentPlayer === 'X') {
      setTimeout(() => {
        makeComputerMove(newButtons);
      }, 400);
    }
  };

  const makeComputerMove = (currentBoard) => {
    const available = currentBoard.map((val, i) => (val === '' ? i : null)).filter((v) => v !== null);
    if (available.length === 0) return;

    const randomIndex = available[Math.floor(Math.random() * available.length)];
    currentBoard[randomIndex] = 'O';
    setButtons([...currentBoard]);
    clickAudio.play();
    chance.current += 1;
  };

  const checkWinner = () => {
    const wins = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of wins) {
      if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
        setWinningCells([a, b, c]);
        winAudio.play();
        setTimeout(() => {
          toast.dismiss();
          toast.success(`${buttons[a]} wins!`, { autoClose: 2000 });
          setScores((prev) => ({
            ...prev,
            [buttons[a]]: prev[buttons[a]] + 1
          }));
          resetGame();
        }, 500);
        return;
      }
    }

    if (buttons.every((b) => b !== '')) {
      drawAudio.play();
      setTimeout(() => {
        toast.error("It's a draw!", { theme: "dark" });
        setScores((prev) => ({ ...prev, Draws: prev.Draws + 1 }));
        resetGame();
      }, 500);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [buttons]);

  const resetGame = () => {
    setButtons(Array(9).fill(''));
    setWinningCells([]);
    chance.current = 0;
  };

  return (
    <>
    <ToastContainer position="top-center" />
    <div className="bg-gradient-to-br from-purple-600 to-indigo-800 w-full h-screen flex flex-col items-center justify-center text-white font-sans">
      <h1 className="text-4xl font-bold mb-6 tracking-wide">Tic Tac Toe</h1>

      <div className="flex gap-10 mb-6">
        <div className="text-lg bg-white text-black px-4 py-2 rounded-xl shadow-md">X Wins: {scores.X}</div>
        <div className="text-lg bg-white text-black px-4 py-2 rounded-xl shadow-md">O Wins: {scores.O}</div>
        <div className="text-lg bg-white text-black px-4 py-2 rounded-xl shadow-md">Draws: {scores.Draws}</div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-2xl grid grid-cols-3 gap-4">
        {buttons.map((val, i) => (
          <button
            key={i}
            onClick={() => click(i)}
            className={`w-24 h-24 border-4 border-black text-3xl font-bold rounded-xl transition duration-300 ease-in-out 
              ${val === 'X' ? 'text-purple-700' : 'text-indigo-700'} 
              ${winningCells.includes(i) ? 'bg-yellow-300 underline decoration-4' : 'bg-white hover:bg-gray-100'}`}
          >
            {val}
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-lg font-semibold shadow-lg"
      >
        Reset Game
      </button>
    </div> 
    </>
  );
}

export default App;
