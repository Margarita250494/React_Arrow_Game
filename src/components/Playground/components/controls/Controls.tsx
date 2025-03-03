import Button from "../ui/Button"
import styles from "./Controls.module.css"
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded"
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded"

type Props = {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls = (props: Props) => {
  const { isTimerActive, setIsTimerActive } = props
  return (
    <div aria-labelledby="play-puse-buttons" className={styles.buttonContainer}>
      <h2 id="play-puse-buttons" className="visually-hidden">
        Game buttons
      </h2>

      <Button
        id="play"
        type="button"
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        endIcon={<PlayCircleOutlineRoundedIcon />}
      >
        Play
      </Button>
      <Button
        id="pause"
        type="button"
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        endIcon={<PauseCircleOutlineRoundedIcon />}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
