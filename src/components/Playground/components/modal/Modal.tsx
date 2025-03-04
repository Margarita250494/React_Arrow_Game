import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import Button from "../ui/Button"
import ResultMessage from "./components/resultMessage"
import styles from "./Modal.module.css"
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded"
import { Modal as MaterialModal } from "@mui/material"

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
    <MaterialModal open onClose={handleClose} className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className="visually-hidden">Modal Window</h3>
        <ResultMessage
          isSuccessEndGame={isSuccessEndGame}
          className={
            isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess
          }
        />
        <Button
          className={styles.modalbutton}
          type="button"
          onClick={handleClose}
          endIcon={<KeyboardArrowRightRoundedIcon />}
        >
          Start New Game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
