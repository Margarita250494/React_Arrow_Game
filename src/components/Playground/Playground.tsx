import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useEffect, useRef, useState, useCallback } from "react"
import Controls from "./components/controls"
import { INTERVAL_TIME, END_GAME_CONDITION } from "./constants"
import RandomKeys from "./components/randomKeys"
import KeyPressed from "./components/keyPressed"
import Score from "./components/score"
import Modal from "./components/modal"

type Props = {}

const Playground = (props: Props) => {
  const state = useAppSelector(state => state.playground)
  const dispatch = useAppDispatch()
  const refreshIntervalID = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)

  const startTimer = useCallback(() => {
    refreshIntervalID.current = setInterval(() => {
      dispatch(setUnsuccess())
      dispatch(setCurrentStep())
      dispatch(setSteps())
    }, INTERVAL_TIME)
  }, [dispatch])

  const stopTimer = useCallback(() => {
    if (refreshIntervalID.current !== null) {
      clearInterval(refreshIntervalID.current)
      refreshIntervalID.current = null
    }
  }, [])

  useEffect(() => {
    if (isTimerActive) {
      startTimer()
    } else {
      stopTimer()
    }

    return stopTimer // Cleanup function
  }, [isTimerActive, startTimer, stopTimer])

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITION.SUCCESS_COUNT
    const isUnseccessful =
      state.totalUnsuccessful === END_GAME_CONDITION.UNSUCCESS_COUNT

    isSuccessful ? setIsSuccessEndGame(true) : setIsSuccessEndGame(false)

    if (isSuccessful || isUnseccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccessful, state.totalUnsuccessful])
  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  )
}

export default Playground
