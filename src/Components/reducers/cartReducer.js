const initState = {
  phones: [],
  length: 0,
};

function cartReducer(state = initState, action) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      phones: state.phones.concat(action.payload),
      length: state.length + 1,
    };
  } else {
    return state;
  }
}

export default cartReducer;
