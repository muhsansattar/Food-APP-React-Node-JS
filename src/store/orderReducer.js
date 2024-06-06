const initialValue = {
  order: [],
  selectedFilter: "New Orders",
};

const orderReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "order/setorder":
      console.log(action);
      return { ...state, order: action.payload };
    case "order/setfilter":
      return { ...state, selectedFilter: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
