import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { setEnteredValue } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"
import { useKeyPressedElement } from "./hooks"

type Props = {
  isTimerActive: boolean
}

const KeyPressed = ({ isTimerActive }: Props) => {
  const dispatch = useAppDispatch()

  const keyPressedElement = useKeyPressedElement()

  const TimeComponent = keyPressedElement

  const handleKeyDown = useCallback(
    (element: KeyboardEvent) => {
      if (
        Object.hasOwnProperty.call(MAP_ARROW_CODES, element.key) &&
        isTimerActive
      ) {
        dispatch(setEnteredValue(element.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })
  return (
    <section aria-labelledby="key-pressed">
      <h2 id="key-pressed">Key Pressed</h2>
      <p>
        Press the key corresponding to the key <br /> in "Random keys"
      </p>
      <TimeComponent
        sx={{
          fontSize: "2rem",
          "& path": {
            stroke: "#35786F",
            strokeWidth: 0.3,
            fill: "#59baad",
          },
        }}
      />
    </section>
  )
}

export default KeyPressed
