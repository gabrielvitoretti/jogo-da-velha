import { useState, useEffect } from "react"
import styles from "./game.module.css"
import GameOption from "../gameOption/gameOption"
import GameInfo from "../gameInfo/gameInfo"




const winnerTable = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4 ,7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function Game() {

    const [gameState, setGameState] = useState(Array(9).fill(0))

    const [currentPlayer, setCurrentPlayer] = useState(1)

    const[winner, setWinner] = useState(0)

    const Warning = () =>{
        alert("Teste")
    }
    const handleClick = (position) => {
        if (gameState[position] === 0 && winner === 0){
            let newGameState = [...gameState]
            newGameState[position] = currentPlayer
            setGameState(newGameState)
         }
    }

    const verifyGame = () => {
        winnerTable.forEach((line) =>{
            const values = line.map((pos) => gameState[pos])
            const sum = values.reduce((acumulado, total) => acumulado + total)
            if (sum == 3 || sum == -1) setWinner(sum / 3)
        })
    }

    useEffect(() => {
        setCurrentPlayer(currentPlayer * -1)
        verifyGame()
    }, [gameState])
    return (
        <div className={styles.gameContent}>
            <div className={styles.game}>
                {
                    gameState.map( (value, position) => 
                        <GameOption 
                            key = {`game-option-position-${position}`}
                            status={value}
                            onClick={() => handleClick(position)}
                        />
                    ) 
                }
            </div>
            <GameInfo 
                currentPlayer={currentPlayer}
                winner={winner}
            />
        </div>
    )
}

export default Game