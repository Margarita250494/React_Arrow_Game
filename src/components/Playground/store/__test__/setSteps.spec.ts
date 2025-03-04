import playgroundReducer, {initialState, setCurrentStep, setSteps} from "../slices"

describe("reducer setSteps",() =>{
    
    it("check setSteps", () =>{
        const setCurrentStepState = playgroundReducer(initialState, setCurrentStep())

        const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

        expect(initialState.steps.length).toEqual(0)
        expect(setStepsState.steps.length).toEqual(1)

        const firstStep = {
            step: 1,
            currentValue: setStepsState.steps[0].currentValue,
            enteredValue: null,
            success: null
        }
        expect(setStepsState.steps[0]).toEqual(firstStep)
        
        
    })
})