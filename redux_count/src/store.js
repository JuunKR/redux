import { createStore } from "redux";

const PLUS = "PLUS"


function reducer(currentState, action) {
    const newState = { ...currentState }
    console.log(newState)
    switch (action.type) {
        case PLUS:
            newState.number++
            return newState
        default:
            return { number: 1 }
    }
}


const store = createStore(reducer)

export default store