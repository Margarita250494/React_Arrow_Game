import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import Button from "../ui/Button"
import ResultMessage from "./components/resultMessage"
import styles from "./Modal.module.css"
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded"

type Props = {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal = ({ setIsShowModal, isSuccessEndGame }: Props) => {
  const dispatch = useAppDispatch()
  const handleClose = () => {
    setIsShowModal(false)
    dispatch(resetStore())
  }
  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <Button
        className={styles.modalbutton}
        type="button"
        onClick={handleClose}
        endIcon={<KeyboardArrowRightRoundedIcon />}
      >
        Start New Game
      </Button>
    </div>
  )
}

export default Modal
