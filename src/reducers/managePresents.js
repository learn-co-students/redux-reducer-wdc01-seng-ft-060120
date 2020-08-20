export function managePresents(state, action){
  const presents = 
  {
    INCREASE: {numberOfPresents: state.numberOfPresents + 1}
  }
  const newState = presents[action.type]
  return newState ? newState : state
}
