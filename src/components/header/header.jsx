import Title from "../title/title"
import Subtitle from "../subtitle/subtitle"
import styles from './header.module.css'
import Icon from "../icons/icon"




function Header(){
    return (
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <Subtitle>Criado por Gabriel Gonçalves Vitoretti</Subtitle>
            <div className={styles.iconContent}>
                <Icon iconName="gitHubIcon" link="https://github.com/gabrielvitoretti" />
            </div>
        </div>
    )
}

export default Header