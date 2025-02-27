import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/resultMessage"

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
      <button type="button" onClick={handleClose}>
        Start New Game
      </button>
    </div>
  )
}

export default Modal
