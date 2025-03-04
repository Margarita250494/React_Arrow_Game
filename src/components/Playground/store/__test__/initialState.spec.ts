import playgroundReducer, {initialState} from "../slices"

// "" - name of test, () - callback

describe("initial state",() =>{
    // "" - name, () - function
    it("check initial state", () =>{
        const state = playgroundReducer(undefined, {type:'unknow'})
        expect(state).toEqual(initialState)
    })
})