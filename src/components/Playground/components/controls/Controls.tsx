type Props = {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls = (props: Props) => {
  const { isTimerActive, setIsTimerActive } = props
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
      >
        Play
      </button>
      <button
        type="button"
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
      >
        Pause
      </button>
    </div>
  )
}

export default Controls
