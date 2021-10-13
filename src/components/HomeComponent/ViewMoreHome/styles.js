const styles = theme => ({
  container: {
    background: "#F0F0F0",
    height: 60,
    marginTop: 15,
    padding: 10,
    display: "flex",
    justifyContent: "flex-end",

    "& a": {
      background: theme.colors.primary,
      color: "white",
      height: 40,
      lineHeight: "40px",
      padding: "0 30px",
      borderRadius: 3,

      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 3px 6px rgba(0, 0, 0, .5)"
      }
    },

    [theme.breakpoints.down("xs")]: {
      height: 40,
      background: "none",
      padding: 0,
      marginTop: 10,

      "& a": {
        height: 30,
        lineHeight: "30px"
      }
    }
  }
});

export default styles;
