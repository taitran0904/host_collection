const styles = (theme) => ({
  welcome: {
    display: "flex",
    padding: "2px 10px",
    background: theme.color.color2,
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.color.color6,
  },
  logo: {
    display: "block",
    width: 180,
    margin: "10px auto",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      height: 30,
    },
  },
  loginBtn: {
    fontSize: 14,
    textAlign: "center",
    color: "#4d4d4d",
    "& svg": {
      fontSize: 24,
    },

    "& h6": {
      marginTop: -5,
    },
    "&:hover": {
      color: "black",
    },
  },
  logoutBtn: {
    display: "flex",
    alignItems: "center",
    background: "none",
    border: 0,
    color: theme.color.color6,
    cursor: "pointer",

    "& svg": {
      fontSize: 24,
    },
    "& h6": {
      marginTop: -5,
    },
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      color: "black",
    },
  },
  closeBtn: {
    display: "none",
    background: "none",
    border: 0,
    position: "absolute",
    top: 5,
    right: 5,
    fontSize: 8,
    "& svg": {
      fontSize: 30,
      color: theme.color.gray2,
    },
    "&:focus": {
      outline: "none",
    },
    "& h6": {
      marginTop: -5,
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  openBtn: {
    display: "none",
  },
  welcomeMobile: {
    position: "fixed",
    display: "none",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 40,
    zIndex: 998,
    background: "white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",

    "& .logoMobile": {
      width: 280,
      position: "fixed",
      left: "50%",
      transform: "translateX(-50%)",
      top: 5,
    },

    "& h5": {
      display: "none",
      padding: "5px 10px",
      height: "auto",
      lineHeight: "initial",
      order: 1,
    },
    "& img": {
      height: 30,
      width: "auto",
      margin: "auto",
    },
    "& .menuMobile": {
      order: -1,
      display: "block",
    },
    "& .closeMobile, & .Welcome-closeBtn-11": {
      display: "none",
    },
    "& a, & button": {
      background: "none",
      border: 0,
      textTransform: "uppercase",
      color: theme.color.color6,
      "& h6": {
        fontSize: 8,
        margin: 0,
      },
      "&:focus": {
        outline: "none",
      },
    },
    "& div": {
      background: "none",
      padding: 0,
    },
    "& svg": {
      fontSize: 30,
    },
    "& .welcomeMobile": {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  welcomeText: {
    display: "block",
    margin: 0,
  },
});

export default styles;
