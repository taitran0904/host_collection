import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as errorCts from "../constants/ui/error";

export const errorToast = (message, position = "top-right") => {
  const MySwal = withReactContent(Swal);

  const Toast = Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer: 3000
  });

  Toast.fire({
    type: "error",
    title: message
  });

  return MySwal;
};

export const expiredLoginToast = title => {
  Swal.fire({
    title,
    type: "warning",
    html: "Please login again",
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<a href="/login">Login now</a>',
    cancelButtonText: "Later"
  });
};

export const ActiveUserToast = title => {
  Swal.fire({
    title,
    type: "warning",
    html: "Please active the user before login",
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<a href="/member/resend-code" style="color:#fff">Resend code</a>',
    cancelButtonText: "Later"
  });
};

export const successToast = (message, position) => {
  const MySwal = withReactContent(Swal);

  const Toast = Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer: 3000
  });

  Toast.fire({
    type: "success",
    title: message
  });

  return MySwal;
};

export const failedToast = (error, title) => {
  if (error.message === "Network Error") {
    errorToast(errorCts.NETWORK_DISCONNECTED, "top-right");
  } else {
    errorToast(title, "top-right");
  }
};
