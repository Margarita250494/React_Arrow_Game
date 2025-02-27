import { useAppSelector } from "../../../../app/hooks"
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { MAP_ARROW_CODES } from "../../constants";
import type { MapArrowCodesI } from "../../types"

export const useKeyPressedElement = () => {
    const state = useAppSelector((state)=>state.playground)

    if(state.steps.length){
        const enteredValue = state.steps[state.currentStep - 1].enteredValue; //to get last element

        if(enteredValue){
            return MAP_ARROW_CODES[enteredValue as keyof MapArrowCodesI]
        }
    }
    return AccessTimeOutlinedIcon
}