import { useAppSelector } from "../../../../app/hooks"
import RandomArrow from "./components/randomArrow"
import WelcomeText from "./components/welcomeText"

type Props = {
  isTimerActive: boolean
}

const RandomKeys = ({ isTimerActive }: Props) => {
  const state = useAppSelector(state => state.playground)

  return (
    <section aria-labelledby="Random-Keys">
      <h3 id="Random-Keys">Random Keys</h3>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrow />
      )}
    </section>
  )
}

export default RandomKeys
