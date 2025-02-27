type Props = {
  isSuccessEndGame: boolean
}

const ResultMessage = ({ isSuccessEndGame }: Props) => {
  return isSuccessEndGame ? (
    <p>
      Congartulations! <br /> You won
    </p>
  ) : (
    <p>
      My regrets. <br /> You lost this game
    </p>
  )
}

export default ResultMessage
