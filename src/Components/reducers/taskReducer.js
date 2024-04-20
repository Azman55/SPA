const initState = {
  tasks: [],
};

function taskReducer(state = initState, action) {
  if (action.type === "CREATE_TASK") {
    return {
      ...state,
      tasks: state.tasks.concat(action.payload),
    };
  } else if (action.type === "UPDATE_TASK") {
  } else if (action.type === "DELETE_TASK") {
  } else {
    return state;
  }
}

export default taskReducer;
