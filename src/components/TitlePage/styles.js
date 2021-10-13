const styles = theme => ({
  titlePage: {
    border: `4px solid ${theme.color.color2}`,
    borderRadius: 10,
    background: "white",
    width: "100%",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
    "& h1": {
      color: theme.color.color6,
      lineHeight: 1,
      margin: 0,
    }
  },
  [theme.breakpoints.down("xs")]: {
    titlePage: {
      border: 0,
      background: "none",
      margin: "0 -15px",
      borderRadius: 0,

      "& h1": {
        fontSize: 20,
        fontWeight: "600",
        color: "black"
      },
      "& svg": {
        fontSize: 20,
        color: "black"
      }
    }
  }
});

export default styles;
