import { useState, useEffect } from "react"
import styles from "./game.module.css"
import GameOption from "../gameOption/gameOption"
import Icon from "../icons/icon"


function Warning(){
    alert("Espaço já preenchido, favor escolher um espaço vazio.")
}

function Game() {

    const [gameState, setGameState] = useState(Array(9).fill(0))

    const [currentPlayer, setCurrentPlayer] = useState(1)

    const handleClick = (position) => {
        if (gameState[position] === 0){
            let newGameState = [...gameState]
            newGameState[position] = currentPlayer
            setCurrentPlayer(currentPlayer * -1)
            setGameState(newGameState)
        } else{
            Warning()
        }
        
    }

    useEffect(() => {

    }, [

    ])
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
            <div className={styles.gameNext}>
                <h4>Próximo a jogar:</h4>
                {
                    currentPlayer === 1 && <Icon iconName="circle"/>
                }
                {
                    currentPlayer === -1 && <Icon iconName="x"/>
                }
            </div>
        </div>
    )
}

export default Game