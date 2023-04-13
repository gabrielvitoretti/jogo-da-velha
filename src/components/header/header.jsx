import Title from "../title/title"
import Subtitle from "../subtitle/subtitle"
import styles from './header.module.css'

function Header(){
    return (
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <Subtitle>Criado por Gabriel Gonçalves Vitoretti</Subtitle>
        </div>
    )
}

export default Header