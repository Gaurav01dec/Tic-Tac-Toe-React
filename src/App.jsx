
import Player from "./components/Player"
import Gameboard from "./components/Gameboard"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player initialName="Player 1" logo="X"/>
        <Player initialName="Player 2" logo="O"/>
        </ol>
        <Gameboard/>
      </div>
    </main>
  )
}

export default App
