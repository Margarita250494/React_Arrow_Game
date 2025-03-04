import loader from "./loader.svg"
import styles from "../../RandomKeys.module.css"

type Props = {
  isTimerActive: boolean
}

const WelcomeText = ({ isTimerActive }: Props) => {
  if (isTimerActive) {
    return (
      <p className={styles.loader}>
        <img src={loader} alt="loading" />
      </p>
    )
  }
  return (
    <p>
      Press "Play" to start the game and <br /> wait for the first arrow to
      appear
    </p>
  )
}

export default WelcomeText
