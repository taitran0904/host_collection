import * as authConstants from "../constants/events/auth";

export const loginFlow = (email, password, history, checked) => ({
  type: authConstants.LOGIN_FLOW,
  payload: { email, password, history, checked }
});

export const loginFlowSuccess = data => ({
  type: authConstants.LOGIN_FLOW_SUCCESS,
  payload: { data }
});

export const loginFlowFailed = error => ({
  type: authConstants.LOGIN_FLOW_FAILED,
  payload: { error }
});

export const setAuth = authStatus => ({
  type: authConstants.SET_AUTH,
  payload: { authStatus }
});

export const logout = history => ({
  type: authConstants.LOGOUT,
  payload: { history }
});

export const register = (params) => ({
  type: authConstants.REGISTER,
  payload: { params }
});

export const registerSuccess = data => ({
  type: authConstants.REGISTER_SUCCESS,
  payload: { data }
});

export const registerFailed = error => ({
  type: authConstants.REGISTER_FAILED,
  payload: { error }
});
