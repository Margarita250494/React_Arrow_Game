import { useAppSelector } from "../../../../../../app/hooks"
import styles from "./RandomArrow.module.css"
import type { PlaygroundStepsState } from "../../../../store/types"
import { MAP_ARROW_CODES } from "../../../../constants"
import type { MapArrowCodesI } from "../../../../types"

const RandomArrow = () => {
  const state = useAppSelector(state => state.playground)

  const getStylesRandomKeys = (element: PlaygroundStepsState): string => {
    if (element.success === null) return styles.icon // Default case
    return element.success ? styles.iconSuccess : styles.iconUnsuccess
  }

  return (
    <div className={styles.container}>
      {state.steps.map(element => {
        const ArrowComponent =
          MAP_ARROW_CODES[element.currentValue as keyof MapArrowCodesI]
        return (
          <span
            key={element.step}
            className={`${getStylesRandomKeys(element)} ${styles.iconWrapper}`}
          >
            <ArrowComponent />
          </span>
        )
      })}
    </div>
  )
}

export default RandomArrow
