import Icon from "../icons/icon"
import styles from "./GameInfo.module.css"


function GameInfo( {currentPlayer} ) {

    return (
        <div className={styles.gameNext}>
        <h4>Próximo a jogar:</h4>
        {
            currentPlayer === 1 && <Icon iconName="circle"/>
        }
        {
            currentPlayer === -1 && <Icon iconName="x"/>
        }
    </div>
    )
}

export default GameInfo