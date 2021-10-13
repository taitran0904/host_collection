const styles = theme => ({
  titleChild: {
    width: "100%",
    padding: 15,
    marginBottom: 15,
    textAlign: "center",
    background: theme.color.color3,
    "& h5": {
      color: theme.color.color6,
      lineHeight: 1,
      textTransform: "uppercase"
    }
  },

  // [theme.breakpoints.down("sm")]: {
  //   titleChild: {
  //     width: "calc(100% + 30px)",
  //     marginLeft: -15,
  //     marginRight: -15
  //   }
  // }
});

export default styles;
