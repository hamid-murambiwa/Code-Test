import { useState } from 'react';
import './App.css';
import img from './style/images/rock-button.png';
import img2 from './style/images/paper-button.png';
import img3 from './style/images/scissor-button.png';

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');

  function counter(user, computer) {
    document.querySelectorAll('#h').forEach((e) => { e.innerHTML = '...computing'; });
    setTimeout(() => { document.querySelectorAll('#h').forEach((e) => { e.innerHTML = `you picked ${user} and the computer picked ${computer}`; }); }, 5000);
  }

  function game(user) {
    setResult('');
    const options = ['rock', 'paper', 'scissors'];
    const computer = Math.floor(Math.random() * 3) + 1;
    if (options[user - 1] === 'rock') {
      if (options[computer - 1] === 'rock') {
        setTimeout(() => { setResult("It's a draw"); }, 5000);
        counter(options[user - 1], options[computer - 1]);
      } else if (options[computer - 1] === 'paper') {
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setComputerScore(computerScore + 1); }, 5000);
        setTimeout(() => { setResult('You lose'); }, 5000);
      } else if (options[computer - 1] === 'scissors') {
        setTimeout(() => { setResult('You win'); }, 5000);
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setPlayerScore(playerScore + 1); }, 5000);
      }
    } else if (options[user - 1] === 'paper') {
      if (options[computer - 1] === 'rock') {
        setTimeout(() => { setResult('You win'); }, 5000);
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setPlayerScore(playerScore + 1); }, 5000);
      } else if (options[computer - 1] === 'paper') {
        setTimeout(() => { setResult("It's a draw"); }, 5000);
        counter(options[user - 1], options[computer - 1]);
      } else if (options[computer - 1] === 'scissors') {
        setTimeout(() => { setResult('You lose'); }, 5000);
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setComputerScore(computerScore + 1); }, 5000);
      }
    } else if (options[user - 1] === 'scissors') {
      if (options[computer - 1] === 'rock') {
        setTimeout(() => { setResult('You lose'); }, 5000);
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setComputerScore(computerScore + 1); }, 5000);
      } else if (options[computer - 1] === 'paper') {
        setTimeout(() => { setResult('You win'); }, 5000);
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setPlayerScore(playerScore + 1); }, 5000);
      } else if (options[computer - 1] === 'scissors') {
        setTimeout(() => { setResult("It's a draw"); }, 5000);
        counter(options[user - 1], options[computer - 1]);
      }
    }
  }

  function handleEvent() {
    document.querySelectorAll('.option-container').forEach((e) => { e.style.display = 'flex'; });
    document.querySelectorAll('.button').forEach((e) => { e.remove(); });
  }
  return (
    <div className="App">
      <div className="header">
        <h1>ROCK PAPER SCISSORS</h1>
      </div>
      <div className="main">

        <div id="A" className="announce-container" />
        <div className="result-container">
          <div className="userResult">
            <h2>Player :</h2>
            <p id="player">{playerScore}</p>
          </div>

          <div className="computerResult">
            <h2>Computer :</h2>
            <p id="computer">{computerScore}</p>
          </div>
        </div>
        <div className="result-con">
          <div className="R1">
            <p id="P">{result}</p>
          </div>
        </div>
        <div id="h">lets play!</div>
        <hr />
        <div className="option-container">
          <button className="Rock" type="button" onClick={() => { game(1); }}><img src={img} alt="rock icon" style={{ width: '100px', height: '100px' }} /></button>

          <button className="Paper" type="button" onClick={() => { game(2); }}><img src={img2} alt="rock icon" style={{ width: '100px', height: '100px' }} /></button>

          <button className="Scissors" type="button" onClick={() => { game(3); }}><img src={img3} alt="rock icon" style={{ width: '100px', height: '100px' }} /></button>
        </div>

        <button className="button" type="button" onClick={() => { handleEvent(); }}>Click here to play</button>

      </div>
    </div>
  );
}

export default App;
