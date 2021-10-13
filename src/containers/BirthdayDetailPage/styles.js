const styles = theme => ({
  icon: {
    fontSize: 30,
    marginRight: 10,
    color: theme.color.primary
  },
  info: {
    marginBottom: 20,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& div": {
      justifyContent: "center",
      display: "flex",
      flexDirection: "column"
    },

    "& .left": {
      display: "flex",

      "& img": {
        width: 120,
        height: 120,
        objectFit: "cover",
        marginRight: 10,
        borderRadius: "50%"
      },

      "& h2": {
        fontWeight: "600",
        marginBottom: 5
      },

      "& h4": {
        padding: "3px 10px",
        background: theme.colors.primary,
        color: "white",
        borderRadius: 3,
        marginBottom: 5,
        width: "fit-content",
        fontSize: 14
      },

      "&:hover h2": {
        color: theme.colors.primary
      }
    },

    "& .right": {
      border: `2px solid ${theme.colors.color3}`,
      borderRadius: 5,
      fontSize: 12,
      color: theme.colors.color3,
      width: 120,
      height: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",

      "& svg": {
        fontSize: 70,
        marginBottom: 5
      },

      "&:hover": {
        backgroundColor: theme.color.primary,
        borderColor: theme.color.primary,
        color: "white"
      }
    }
  },
  donateList: {
    display: "flex",
    flexWrap: "wrap",
    margin: -10,
    marginTop: 10
  },

  back: {
    position: "fixed",
    zIndex: 10,
    right: 40,
    top: 25,
    background: theme.colors.gray2,
    width: 40,
    height: 40,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
      fontSize: 20,
      color: "white"
    },

    "&:hover": {
      background: theme.colors.primary
    }
  },

  titleChild: {
    position: "relative",
    background: theme.colors.color3
  },

  switch: {
    position: "absolute",
    right: 7,
    top: 7,
    display: "flex",
    alignItems: "center",

    "& button": {
      cursor: "pointer",
      width: 30,
      height: 30,
      background: "white",
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #e1e1e1",
      borderRadius: 3,

      "& svg": {
        fontSize: 24
      },

      "&.active": {
        background: theme.colors.primary,
        color: "white"
      }
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContent: {
    padding: 0,
    borderRadius: 5,
    maxWidth: 500,
    position: "relative",

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
      maxWidth: "calc(100% - 20px)",
      padding: 0
    }
  },

  animationGif: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10001,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  cardText: {
    position: "absolute",
    top: 0,
    left: 0,
    maxWidth: 500,
    maxHeight: 500,
    padding: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "calc(100% - 40px)",
      padding: 0
    }
  },

  [theme.breakpoints.down("md")]: {
    back: {
      top: 65
    }
  },
  [theme.breakpoints.down("sm")]: {
    back: {
      right: 25
    }
  },
  [theme.breakpoints.down("xs")]: {
    back: {
      right: 5,
      top: 45
    },
    container: {
      background: theme.colors.color3,
      margin: -15,
      padding: 15,
      marginBottom: -30
    },
    titleChild: {
      background: "white"
    },
    info: {
      "& .left": {
        "& img": {
          width: 80,
          height: 80
        },

        "& h2": {
          fontSize: 16,
          marginBottom: 3
        },

        "& h4": {
          fontSize: 12,
          marginBottom: 3
        }
      },

      "& .right": {
        width: 80,
        height: 80,
        color: theme.colors.primary,
        borderColor: theme.colors.primary,

        "& svg": {
          fontSize: 30
        }
      }
    },
    animationGif: {
      width: "100%"
    }
  }
});

export default styles;
