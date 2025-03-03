type Props = {
  isTimerActive: boolean
}

const WelcomeText = ({ isTimerActive }: Props) => {
  if (isTimerActive) {
    return <span>Loading...</span>
  }
  return (
    <p>
      Press "Play" to start the game and <br /> wait for the first arrow to
      appear
    </p>
  )
}

export default WelcomeText
