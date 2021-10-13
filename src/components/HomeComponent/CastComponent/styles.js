const styles = theme => ({
  icon: {
    fontSize: 30,
    marginRight: 10,
    color: theme.color.primary
  },
  container: {
    marginTop: 30
  },
  castContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: -5
  },
  castItem: {
    width: "calc(100% / 6 - 10px)",
    margin: 5,
    position: "relative",
    display: "block",
    cursor: "pointer",
    background: "none",
    border: 0,
    overflow: "hidden",

    "& h5": {
      position: "absolute",
      bottom: 3,
      height: 40,
      width: "100%",
      left: 0,
      background: "rgba(0, 0, 0, .7)",
      color: "white",
      lineHeight: "40px",
      padding: "0 10px",
      textAlign: "center",
      overflow: "hidden",
      transition: ".3s",
      transform: "translateY(43px)"
    },

    "& p": {
      position: "absolute",
      top: 0,
      height: 40,
      width: "100%",
      left: 0,
      background: "rgba(255, 255, 255, .7)",
      color: "black",
      lineHeight: "40px",
      padding: "0 10px",
      textAlign: "center",
      overflow: "hidden",
      transition: ".3s",
      transform: "translateY(-40px)"
    },

    "& img": {
      transition: ".3s"
    },

    "&:hover": {
      "& img": {
        filter: "brightness(0.7)"
      },

      "& h5, & p": {
        transform: "none"
      }
    },

    "&:focus": {
      outline: "none"
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    maxWidth: 600,

    "& > div": {
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #e1e1e1",
      marginBottom: 15,
      paddingBottom: 15,

      "& img": {
        width: 40,
        height: 40,
        objectFit: "cover",
        borderRadius: 20,
        marginRight: 10
      }
    },

    "& p": {
      lineHeight: "24px",
      color: theme.colors.gray
    },

    "&:focus": {
      outline: "none"
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: 300,
      padding: 10
    }
  },
  [theme.breakpoints.down("lg")]: {
    castItem: {
      width: "calc(100% / 5 - 10px)"
    }
  },
  [theme.breakpoints.down("md")]: {
    castItem: {
      width: "calc(100% / 5 - 10px)"
    }
  },
  [theme.breakpoints.down("sm")]: {
    castItem: {
      width: "calc(100% / 4 - 10px)"
    }
  },
  [theme.breakpoints.down("xs")]: {
    container: {
      background: "white",
      margin: -15,
      padding: "0 15px",
      paddingTop: 0,
      paddingBottom: 20,
      marginTop: 25
    },
    castWrap: {
      overflow: "hidden",
      margin: "0 -15px"
    },
    castContainer: {
      margin: "0 -1px"
    },
    castItem: {
      width: "calc(100% / 3 - 2px)",
      margin: 1,
      marginBottom: -2,

      "& h5": {
        height: 30,
        lineHeight: "30px"
      }
    }
  }
});

export default styles;
