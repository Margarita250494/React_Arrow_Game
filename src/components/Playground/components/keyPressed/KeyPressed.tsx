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
    <div>
      <h3>Key Pressed</h3>
      <TimeComponent
        sx={{
          "& path": { stroke: "#a4374a", strokeWidth: 0.3, fill: "#7fb77f" },
        }}
      />
    </div>
  )
}

export default KeyPressed
