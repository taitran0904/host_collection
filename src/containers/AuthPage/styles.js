const styles = (theme) => ({
  auth__page: {
    padding: "40px 0",
  },

  loginWrapper: {
    width: 500,
    backgroundPosition: "top",
    backgroundSize: "cover",
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    overflow: "hidden",

    [theme.breakpoints.down("sm")]: {
      background: "none",
      position: "relative",
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      "& img": {
        width: "150px !important",
      },
    },
  },
});

export default styles;
