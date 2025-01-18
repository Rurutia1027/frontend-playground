export const reducer = (state, action) => {
  // always return some kinds of state to overwrite the previous state content
  if (action.type == 'ADD_ITEM') {
    const newItems = [...state.people, action.payload]
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modelContent: 'item added',
    }
  }

  if (action.type == 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modelContent: 'please enter value',
    }
  }

  if (action.type == 'CLOSE_MODEL') {
    return { ...state, isModalOpen: false }
  }

  if ((action.type == 'REMOVE_ITEM', action.payload)) {
    const id = action.payload
    //  console.log(id)
    const newPeople = state.people.filter((item) => item.id !== id)
    return { ...state, people: newPeople }
  }

  throw Error('no matching action type!')
  return state
}
