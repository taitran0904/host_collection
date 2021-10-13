const styles = theme => ({
  icon: {
    fontSize: 30,
    marginRight: 10,
    color: theme.colors.primary
  },
  container: {
    marginTop: 30
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    background: "white",
    borderRadius: 10,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, .2)",
    marginTop: 15,

    "&:hover": {
      background: theme.color.primary,
      color: "white",

      "& h5, & svg": {
        color: "white"
      }
    },

    "& > div": {
      width: "calc(100% - 60px)",
      marginLeft: 10
    },

    "& svg": {
      fontSize: 40,
      color: theme.colors.color7
    },

    "& p": {
      fontWeight: "500",
      marginRight: 10
    },

    "& h5": {
      color: theme.colors.gray,
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical"
    }
  },
  [theme.breakpoints.down("xs")]: {
    container: {
      background: "white",
      margin: -15,
      padding: "0 10px",
      paddingTop: 1,
      marginTop: 25
    },
    infoItem: {
      background: theme.colors.gray3
    }
  }
});

export default styles;
