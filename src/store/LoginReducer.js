const initialvalue = {
  token: "",
  error: false,
};

const LoginReducer = (state = initialvalue, action) => {
  switch (action.type) {
    case "account/loginsucess":
      return {
        ...state,
        token: action.payload.Token,
        error: false,
      };
    case "account/loginfailure":
      return {
        ...state,
        token: "",
        error: true,
      };

    default:
      return state;
  }
};

export { LoginReducer };
