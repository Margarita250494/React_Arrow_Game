import { useAppSelector } from "../../../../app/hooks"

const Score = () => {
  const state = useAppSelector(state => state.playground)
  return (
    <section aria-labelledby="score">
      <h2 id="score">Score</h2>
      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </section>
  )
}

export default Score
