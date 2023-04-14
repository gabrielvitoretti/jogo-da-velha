import { useState } from "react"

import styles from "./game.module.css"
import GameOption from "../gameOption/gameOption"



function Game() {

    const [gameState, setGameState] = useState(Array(9).fill(0))

    console.log(gameState)
    return (
        <div className={styles.game}>
            {
                gameState.map( (value, position) => 
                    <GameOption 
                        key = {`game-option-position-${position}`}
                        status={value}
                    />
                ) 
            }
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />

        </div>
    )
}

export default Game