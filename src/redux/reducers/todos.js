const todos = (state = 1, action) => {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      return state + 2;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default todos;
