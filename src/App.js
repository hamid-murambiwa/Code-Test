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
    document.querySelectorAll('#h').forEach((e) => {
      let seconds = 0;
      setInterval(() => {
        if (seconds <= 5) {
          e.style.display = 'flex';
          // eslint-disable-next-line
          e.innerHTML = seconds++;
        } else {
          e.style.display = 'none';
        }
      }, 700);
    });
    setTimeout(() => {
      const userData = document.createElement('p');
      userData.innerHTML = `You picked: ${user}`;
      const compData = document.createElement('p');
      compData.innerHTML = `Computer picked: ${computer}`;
      const message = document.createElement('strong');
      message.innerHTML = 'Next round &#x2193';
      document.querySelectorAll('#res').forEach((e) => {
        e.appendChild(userData);
        e.appendChild(compData);
        e.appendChild(message);
      });
      document.querySelectorAll('.Paper').forEach((e) => { e.style.display = 'flex'; });
      document.querySelectorAll('.Scissors').forEach((e) => { e.style.display = 'flex'; });
      document.querySelectorAll('.Rock').forEach((e) => { e.style.display = 'flex'; });
    }, 5000);
  }

  function game(user) {
    if (user === 1) {
      document.querySelectorAll('.Paper').forEach((e) => { e.style.display = 'none'; });
      document.querySelectorAll('.Scissors').forEach((e) => { e.style.display = 'none'; });
    } else if (user === 2) {
      document.querySelectorAll('.Rock').forEach((e) => { e.style.display = 'none'; });
      document.querySelectorAll('.Scissors').forEach((e) => { e.style.display = 'none'; });
    } else if (user === 3) {
      document.querySelectorAll('.Rock').forEach((e) => { e.style.display = 'none'; });
      document.querySelectorAll('.Paper').forEach((e) => { e.style.display = 'none'; });
    }
    document.querySelectorAll('#res').forEach((e) => { e.innerHTML = ''; });
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
        setTimeout(() => { setResult('You lose &#9785;'); }, 5000);
      } else if (options[computer - 1] === 'scissors') {
        setTimeout(() => { setResult('🕺🏽 You WIN! 🍾 🥂'); }, 5000);
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setPlayerScore(playerScore + 1); }, 5000);
      }
    } else if (options[user - 1] === 'paper') {
      if (options[computer - 1] === 'rock') {
        setTimeout(() => { setResult('🕺🏽 You WIN! 🍾 🥂'); }, 5000);
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setPlayerScore(playerScore + 1); }, 5000);
      } else if (options[computer - 1] === 'paper') {
        setTimeout(() => { setResult("It's a draw"); }, 5000);
        counter(options[user - 1], options[computer - 1]);
      } else if (options[computer - 1] === 'scissors') {
        setTimeout(() => { setResult('You lose ☹️'); }, 5000);
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setComputerScore(computerScore + 1); }, 5000);
      }
    } else if (options[user - 1] === 'scissors') {
      if (options[computer - 1] === 'rock') {
        setTimeout(() => { setResult('You lose &#9785;'); }, 5000);
        counter(options[user - 1], options[computer - 1]);
        setTimeout(() => { setComputerScore(computerScore + 1); }, 5000);
      } else if (options[computer - 1] === 'paper') {
        setTimeout(() => { setResult('🕺🏽 You WIN! 🍾 🥂'); }, 5000);
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
    document.querySelectorAll('.button').forEach((e) => { e.style.display = 'none'; });
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
            <h3 id="P">{result}</h3>
            <div id="res" />
          </div>
        </div>
        <section className="h-con">
          <div id="h" />
        </section>
        <hr />
        <div className="option-container">
          <button className="Rock btn" type="button" onClick={() => { game(1); }}><img src={img} alt="rock icon" style={{ width: '100px', height: '100px' }} className="img" /></button>

          <button className="Paper btn" type="button" onClick={() => { game(2); }}><img src={img2} alt="rock icon" style={{ width: '100px', height: '100px' }} className="img" /></button>

          <button className="Scissors btn" type="button" onClick={() => { game(3); }}><img src={img3} alt="rock icon" style={{ width: '100px', height: '100px' }} className="img" /></button>
        </div>

        <button className="button" type="button" onClick={() => { handleEvent(); }}>Click here to start</button>

      </div>
    </div>
  );
}

export default App;
