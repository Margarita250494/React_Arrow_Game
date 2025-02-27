import { useAppSelector } from "../../../../../../app/hooks"
import styles from "./RandomArrow.module.css"
import type { PlaygroundStepsState } from "../../../../store/types"
import { MAP_ARROW_CODES } from "../../../../constants"
import type { MapArrowCodesI } from "../../../../types"

const RandomArrow = () => {
  const state = useAppSelector(state => state.playground)

  const getStylesRandomKeys = (element: PlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess
    }
    if (!element.success && element.success !== null) {
      return styles.iconUnsuccess
    }

    return styles.icon
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      {state.steps.map(element => {
        const ArrowComponent =
          MAP_ARROW_CODES[element.currentValue as keyof MapArrowCodesI]
        return (
          <span
            key={element.step}
            style={{
              border: "0.5px solid black",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              padding: "0.2rem",
            }}
            className={getStylesRandomKeys(element)}
          >
            <ArrowComponent
              sx={{
                "& path": {
                  stroke: "#c52642",
                  strokeWidth: 0.7,
                  fill: "#ab9fd4",
                },
              }}
            />
          </span>
        )
      })}
    </div>
  )
}

export default RandomArrow
