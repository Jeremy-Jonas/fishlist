export default function fishReducer (state = [], action) {
  switch (action.type) {
    case 'GET_FISH_SUCCESS':
      return action.fish

    case 'ADD_NEW_FISH':
      return {
        fish: [...state.fish, action.fish]
      }

    default:
      return state
  }
}
