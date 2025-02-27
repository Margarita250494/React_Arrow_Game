import type{ MapArrowCodesI } from "../types"

export interface PlaygroundStepsState {
    step:number;
    currentValue: keyof MapArrowCodesI | null;
    enteredValue: keyof MapArrowCodesI | null;
    success:boolean | null,
  }


export interface PlaygroundState {
    currentStep:number,
    steps: PlaygroundStepsState [],
    totalSuccessful:number,
    totalUnsuccessful:number,
}