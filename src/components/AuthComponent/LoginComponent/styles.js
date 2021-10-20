const styles = (theme) => ({
  login: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      top: 50,
      left: 0,
      overflow: "initial",
    },
  },
  button: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
    fontSize: 40,
    fontWeight: "500",
    fontFamily: "inherit",
    color: "white",
    transition: ".3s",
    cursor: "pointer",
    padding: 30,
    width: "100%",
    "&:focus": {
      outline: "none",
    },
    color: theme.color.gray,
    "&:hover": {
      color: theme.color.color7,
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      background: theme.color.color3,
      top: -45,
      left: 5,
      width: "calc(50% - 7.5px)",
      zIndex: 10,
      transform: "none",
      fontSize: 16,
      padding: 10,
      "&:hover": {
        color: "white",
      },
      "&.active": {
        background: theme.color.primary,
      },
    },
  },
  loginContent: {
    background: "white",
    width: "100%",
    height: "100%",
    transition: ".5s",
    padding: 30,

    [theme.breakpoints.down("sm")]: {
      position: "relative",
      zIndex: 10,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 15,
    },
  },
  active: {
    transform: "none",
  },
  divField: {
    display: "flex",
    marginBottom: 40,
    position: "relative",
  },
  showPassword: {
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
    border: 0,
    background: "none",
    "& svg": {
      fontSize: 20,
      color: theme.color.color4,
    },
    "&:focus": {
      outline: "none",
    },
    "&:hover svg": {
      color: theme.color.primary,
    },
  },

  socialBtnBox: {
    "& button": {
      width: "100%",
      height: 50,
      borderRadius: 5,
      position: "relative",
      textAlign: "center",
      marginTop: 20,
      color: "white",
      "&:hover": {
        filter: "brightness(.9)",
        boxShadow: "0 3px 10px rgba(0, 0, 0, .5)",
        transform: "translateY(-3px)",
      },
    },
    "& img": {
      width: 20,
      height: 20,
      position: "absolute",
      left: 15,
      top: 15,
    },
  },
  amebaBtn: {
    background: "#2d8c3c",
    "&:hover": {
      background: "#2d8c3c",
    },
  },
  googleBtn: {
    background: "#dd4b39",
    "&:hover": {
      background: "#dd4b39",
    },
  },

  group__register: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",

    padding: "30px 0 0 0",

    "& span": {
      textAlign: "center",
    },

    "& a": {
      margin: "10px 0 0 0",
      textAlign: "center",
      textDecoration: "underline",
      display: "inline-block",
      textAlign: "center",
      padding: "0 8px",
      cursor: "pointer",
      fontSize: "18px",
      verticalAlign: "middle",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      userSelect: "none",
      outline: "none",
      color: theme.color.primary,
    },
  },
});

export default styles;
