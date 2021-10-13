import * as authConstants from "../constants/events/auth";
import * as titleConstants from "../constants/ui/login";
import { errorToast, ActiveUserToast, successToast } from "../commons/AlertHelper";

const initialState = {
  token: "",
  userId: "",
  location: "0"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SET_AUTH: {
      const { authStatus } = action.payload;
      return {
        ...state,
        authStatus
      };
    }
    case authConstants.LOGIN_FLOW: {
      return {
        ...state,
        token: ""
      };
    }
    case authConstants.LOGIN_FLOW_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        token: data.token
      };
    }
    case authConstants.LOGIN_FLOW_FAILED: {
      const { error } = action.payload;

      if (error === "UnAuthorized") {
        errorToast(titleConstants.WRONG_PASSWORD, "top-center");
      } else if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      }else if(error === "Inactive"){
        ActiveUserToast();
      }
      return {
        ...state,
        token: ""
      };
    }
    case authConstants.LOGOUT: {
      return {
        ...state,
        userId: {},
        token: ""
      };
    }

    case authConstants.REGISTER_SUCCESS: {
      const { data } = action.payload;
      successToast(titleConstants.REGISTER_SUCCESS, 'top-right');
      return {
        ...state,
        token: data
      };
    }
    case authConstants.REGISTER_FAILED: {
      const { error } = action.payload;

      if (error.errors?.email && error.errors?.email[0] === "The email has already been taken.") {
        errorToast(titleConstants.EMAIL_ALREADY, "top-right");
      } else if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-right");
      }
      return {
        ...state,
        token: ""
      };
    }
    default:
      return state;
  }
};

export default reducer;
