export const addTodoss = () => ({
  type: "INCREMENT"
});

export const reduc = (state, action) => {
  console.log(action());
  switch (action().type) {
    case "INCREMENT":
      return 2;
    case "DECREMENT":
      return 1;
    default:
      return state;
  }
};

export const res = reduc(1, addTodoss);
