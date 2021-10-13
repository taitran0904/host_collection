import { all } from "redux-saga/effects";
import generalWatcher from "./general";
import authWatcher from "./auth";
import userWatcher from "./user";
import shopWatcher from "./shop";
import birthdayWatcher from "./birthday";
import uploadImageWatcher from "./uploadImage";
import posWatcher from "./pos";

function* rootSaga() {
  yield all([
    generalWatcher(),
    authWatcher(),
    userWatcher(),
    shopWatcher(),
    uploadImageWatcher(),
    birthdayWatcher(),
    posWatcher()
  ]);
}

export default rootSaga;
