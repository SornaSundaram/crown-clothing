import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const goggleSignInStart = () => ({
  type: UserActionTypes.G00GLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: UserActionTypes.G00GLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const goggleSignInFailure = (error) => ({
  type: UserActionTypes.G00GLE_SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (error) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});
