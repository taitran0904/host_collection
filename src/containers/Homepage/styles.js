const styles = theme => ({
  slider: {
    margin: "-15px -30px 30px -30px",
    [theme.breakpoints.down("sm")]: {
      margin: "-15px -15px 30px -15px"
    }
  },
  [theme.breakpoints.down("xs")]: {
    container: {
      background: "#ccc",
      margin: "0 -15px!important",
      padding: "0 15px"
    }
  }
});

export default styles;
