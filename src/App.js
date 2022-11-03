import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="game">
        <div class="info">
          <h1>TRES EN RAYA</h1>
          <button class="buttonSelect">Player X</button>
          <button class="buttonSelect">Player O</button>
          <h3>Player X Starts</h3>
          <h3>Turn of X // Turn of O</h3>
        </div>
        <div class="grid">
          <div class="column">
            <div class="row"></div>
            <div class="row">O</div>
            <div class="row">X</div>
          </div>
          <div class="column">
            <div class="row">O</div>
            <div class="row">X</div>
            <div class="row">O</div>
          </div>
          <div class="column">
            <div class="row">X</div>
            <div class="row"></div>
            <div class="row">O</div>
          </div>
        </div>
        <div class="WinLoseDraw">
          <h1> O </h1>
          <h2> ¡Wins! </h2>
        </div>
        <button class="buttonReset">PLAY</button>
      </div>
    </div>
  );
}
