export function manageFriends(state, action){
  const friends = state.friends[0] ? [...state.friends] : []
  const newStateProp =
  {
    ADD_FRIEND: {friends: [...friends,{...action.friend}]},
    REMOVE_FRIEND: {friends: friends.filter((f) => f.id != action.id)},
  }
  const newState = newStateProp[action.type]
  return newState ? newState : state
}


