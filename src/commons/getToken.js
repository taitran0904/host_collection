import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { ENCODE_SECRET_KEY } from "../constants";

export default function getToken() {
  if (Cookies.get("token")) {
    const bytes = CryptoJS.AES.decrypt(Cookies.get("token"), ENCODE_SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    return originalText;
  }
}
