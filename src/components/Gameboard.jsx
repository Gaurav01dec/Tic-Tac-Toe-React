import { useState,useEffect } from "react"
// import Winner from "./Winner"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function Gameboard({ onSelectSquare, activePlayerSymbol }) {
    const [winner, setWinner] = useState();
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {

        // const [winner, setWinner] = useState("NA");
        setGameBoard((prevGameBoard) => {
            // debugger;
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

            winnerCHecker(updatedBoard);
            return updatedBoard;
        })
        
        // console.log(gameBoard);
        onSelectSquare();
        // debugger;
       
        // winnerCHecker(gameBoard);

        // console.log(` winner : ${winner}`);

        // else {
        //     setWinner("match draw")
        // }

    }

    // const textArea = <h1>........</h1>

    function checkifxiswinner(gameBoard) {
        if ((gameBoard[0][0] === 'X' && gameBoard[0][1] === 'X' && gameBoard[0][2] === 'X') || (gameBoard[1][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[1][2] === 'X') || (gameBoard[2][0] === 'X' && gameBoard[2][1] === 'X' && gameBoard[2][2] === 'X') || (gameBoard[0][0] === 'X' && gameBoard[1][0] === 'X' && gameBoard[2][0] === 'X') || (gameBoard[0][1] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][1] === 'X') || (gameBoard[0][2] === 'X' && gameBoard[1][2] === 'X' && gameBoard[2][2] === 'X') || (gameBoard[0][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][2] === 'X') || (gameBoard[0][2] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][0] === 'X')) {
            return true;
        }
    }
    function checkifoiswinner(gameBoard) {
        if ((gameBoard[0][0] === 'O' && gameBoard[0][1] === 'O' && gameBoard[0][2] === 'O') || (gameBoard[1][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[1][2] === 'O') || (gameBoard[2][0] === 'O' && gameBoard[2][1] === 'O' && gameBoard[2][2] === 'O') || (gameBoard[0][0] === 'O' && gameBoard[1][0] === 'O' && gameBoard[2][0] === 'O') || (gameBoard[0][1] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][1] === 'O') || (gameBoard[0][2] === 'O' && gameBoard[1][2] === 'O' && gameBoard[2][2] === 'O') || (gameBoard[0][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][2] === 'O') || (gameBoard[0][2] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][0] === 'O')) {
            return true;
        }
    }

    function winnerCHecker(gameBoard) {
        if (checkifxiswinner(gameBoard)) {
            setWinner("X");
        } else if (checkifoiswinner(gameBoard)) {
            setWinner("O");
        }

        // if (winner === "X") {
        //     textArea = <h1>X is winner</h1>
        // } else if (winner === 'O') {
        //     textArea = <h1>O is winner</h1>
        // }
    }


    return (
        <>
            <ol id="game-board">
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => {
                                        handleSelectSquare(rowIndex, colIndex);
                                    }}
                                        disabled={playerSymbol !== null}
                                    >{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
            {console.log(winner)}
            {winner?winner+' Won':null}
        </>
    )
};
