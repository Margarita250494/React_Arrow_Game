import { useAppSelector } from "../../../../app/hooks"
import styles from "./Score.module.css"
import { Chip, Stack } from "@mui/material"

const Score = () => {
  const state = useAppSelector(state => state.playground)
  return (
    <section aria-labelledby="score">
      <h2 id="score">Score</h2>
      <Stack direction="row" spacing={1}>
        <Chip
          label={
            <span className={styles.label}>
              Errors: {state.totalUnsuccessful}
            </span>
          }
          variant="outlined"
          sx={{ color: "#FF746C", borderColor: "#FF746C" }}
        />
        <Chip
          label={
            <span className={styles.label}>
              Successful: {state.totalSuccessful}
            </span>
          }
          variant="outlined"
          sx={{ color: "#B2FBA5", borderColor: "#B2FBA5" }}
        />
      </Stack>
    </section>
  )
}

export default Score
