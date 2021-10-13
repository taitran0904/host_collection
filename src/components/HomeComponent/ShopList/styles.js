const styles = theme => ({
  icon: {
    fontSize: 30,
    marginRight: 10,
    color: theme.colors.primary
  },
  container: {
    marginTop: 30
  },
  shopContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: -10,
    marginTop: 10
  },
  shopItem: {
    width: "calc(100% / 4 - 20px)",
    padding: "15px",
    margin: 10,
    background: theme.colors.primary,
    borderRadius: 5,
    color: "white",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",

    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 3px 6px rgba(0, 0, 0, .5)"
    }
  },
  [theme.breakpoints.down("md")]: {
    shopItem: {
      fontSize: 14
    }
  },
  [theme.breakpoints.down("sm")]: {
    shopItem: {
      width: "calc(100% / 3 - 20px)"
    }
  },
  [theme.breakpoints.down("xs")]: {
    container: {
      background: "white",
      margin: -15,
      padding: "0 10px",
      paddingTop: 0,
      paddingBottom: 20,
      marginTop: 25
    },
    titleWrap: {
      marginBottom: -10
    },
    shopWrap: {
      overflowX: "auto",
      overflowY: "hidden",
      margin: "0 -10px"
    },
    shopContainer: {
      display: "block",
      margin: 0,
      marginTop: 10,
      marginLeft: -5
    },
    shopItem: {
      width: "calc(100% - 5px)",
      marginTop: 0,
      marginBottom: 2,
      display: "inline-block",

      "& h5": {
        height: 30,
        lineHeight: "30px"
      }
    }
  }
});

export default styles;
