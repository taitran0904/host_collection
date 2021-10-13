import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loadingReducer from "./loading";
import generalReducer from "./general";
import authReducer from "./auth";
import userReducer from "./user";
import shopReducer from "./shop";
import uploadImageReducer from "./uploadImage";
import birthdayReducer from "./birthday";
import posReducer from "./pos";

const rootReducer = combineReducers({
  loading: loadingReducer,
  form: formReducer,
  general: generalReducer,
  auth: authReducer,
  user: userReducer,
  shop: shopReducer,
  uploadImage: uploadImageReducer,
  birthday: birthdayReducer,
  pos: posReducer
});

export default rootReducer;
