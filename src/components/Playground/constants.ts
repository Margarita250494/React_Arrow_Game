import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import type {MapArrowCodesI,EndGameConditionI} from "./types"

export const INTERVAL_TIME: number = 2000;


export const MAP_ARROW_CODES: MapArrowCodesI = {
    ArrowUp: ArrowUpwardRoundedIcon,
    ArrowDown: ArrowDownwardRoundedIcon,
    ArrowLeft: ArrowBackRoundedIcon,
    ArrowRight: ArrowForwardRoundedIcon,
  };

export const ARR_ARROW_CODES = Object.keys(MAP_ARROW_CODES);

export const END_GAME_CONDITION:EndGameConditionI = {
  SUCCESS_COUNT:3,
  UNSUCCESS_COUNT:3,
}