import { useAppSelector } from "../../../../app/hooks"

const Score = () => {
  const state = useAppSelector(state => state.playground)
  return (
    <section>
      <h3>Score</h3>
      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </section>
  )
}

export default Score
