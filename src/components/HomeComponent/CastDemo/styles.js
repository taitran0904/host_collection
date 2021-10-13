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
    margin: "0 -10px",
    marginTop: -15
  },
  castItem: {
    width: "calc(100% / 4 - 20px)",
    margin: 10,
    position: "relative",
    display: "block",
    cursor: "pointer",
    border: 0,
    padding: "20px 10px",
    background: theme.colors.gray3,
    borderRadius: 10,

    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 3px 6px rgba(0, 0, 0, .2)"
    },

    "& img": {
      width: "30%",
      borderRadius: "50%",
      marginRight: 10
    },

    "& > div": {
      display: "flex",

      "& > div": {
        width: "calc(70% - 10px)"
      }
    },

    "& h3": {
      color: theme.colors.gray,
      transition: ".3s",
      fontWeight: "600",
      marginBottom: 5,
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical"
    },

    "& button": {
      position: "absolute",
      bottom: 5,
      right: 5,
      width: 30,
      height: 30,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: theme.colors.gray2,

      "&:hover": {
        background: theme.colors.primary
      },

      "& svg": {
        fontSize: 20,
        color: "white"
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
      width: "calc(100% / 3 - 20px)"
    }
  },
  [theme.breakpoints.down("sm")]: {
    castItem: {
      width: "calc(100% / 2 - 20px)"
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
    castWrap: {
      overflowX: "auto",
      overflowY: "hidden",
      margin: "0 -10px"
    },
    castContainer: {
      display: "block",
      marginTop: 0,
      marginLeft: 5
    },
    castItem: {
      width: "calc(100% - 15px)",
      display: "inline-block",
      margin: 5,
      marginBottom: 10
    }
  }
});

export default styles;
