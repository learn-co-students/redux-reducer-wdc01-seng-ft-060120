export function managePresents(state, action){
    switch(action.type){
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
        case 'DECREASE':
            return {numberOfPresents: state.numberOfPresents - 1}
        default:
            return state
    }
}


// const managePresents = (state, action) => {
//     const changeState = {
//         INCREASE: { numberOfPresents: state.numberOfPresents + 1 },
//         DECREASE: { numberOfPresents: state.numberOfPresents - 1 }
//     }

//     const newState = changeState[action]
//     return newState ? newState : state
// }