const styles = theme => ({
  infoBottom: {
    display: "flex",
    flexWrap: "wrap",
    margin: -5,
    marginTop: 20,

    "& div": {
      width: "calc(100% / 5 - 10px)",
      margin: 5,
      cursor: "pointer",
      transition: ".3s",

      "&:hover": {
        filter: "brightness(0.5)"
      }
    }
  },
  [theme.breakpoints.down("lg")]: {
    infoBottom: {
      "& div": {
        width: "calc(100% / 4 - 10px)"
      }
    }
  },
  [theme.breakpoints.down("md")]: {
    infoBottom: {
      "& div": {
        width: "calc(100% / 3 - 10px)"
      }
    }
  },
  [theme.breakpoints.down("sm")]: {
    infoBottom: {
      "& div": {
        width: "calc(100% / 3 - 10px)"
      }
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
    bannerWrap: {
      overflowX: "auto",
      overflowY: "hidden",
      margin: "0 -10px"
    },
    infoBottom: {
      display: "block",

      "& div": {
        width: "calc(100% - 5px)",
        marginTop: 0,
        marginBottom: 0,
        paddingBottom: 0,
        paddingTop: 2
      }
    }
  }
});

export default styles;
