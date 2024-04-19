import { useState,useEffect } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function Gameboard({ onSelectSquare, activePlayerSymbol }) {

    

    const [winner, setWinner] = useState();
    const [gameBoard, setGameBoard] = useState(initialGameBoard)


    const resetGame =()=>{
        setGameBoard(initialGameBoard);
        setWinner();
    }

    function handleSelectSquare(rowIndex, colIndex) {

        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

            winnerCHecker(updatedBoard);
            return updatedBoard;
        })
        
        onSelectSquare();
    }

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
            {winner?winner+' Won':null}
            <button onClick={resetGame}>Reset</button>
        </>
    )
};
