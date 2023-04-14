import styles from "./gameOption.module.css"
import Icon from "../icons/icon"


const GameIcon = ({iconName}) => <Icon iconName={iconName} size="25px" /> 


function GameOption( {status} ){

    return (
        <div className={styles.gameOption}> 
        {
            status === 1 && <Icon iconName="circle" />
        }
        {
            status === -1 && <Icon iconName="x" />
        }
        </div>
    )
}

export default GameOption