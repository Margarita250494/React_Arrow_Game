type Props = {
  isSuccessEndGame: boolean
  className: string
}

const ResultMessage = ({ isSuccessEndGame, className }: Props) => {
  return (
    <p className={className}>
      {isSuccessEndGame ? (
        <>
          Congratulations! <br /> You won
        </>
      ) : (
        <>
          My regrets. <br /> You lost this game
        </>
      )}
    </p>
  )
}

export default ResultMessage
