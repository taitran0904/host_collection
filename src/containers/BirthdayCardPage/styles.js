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
      }
    },

    "& > h5": {
      display: "flex",
      alignItems: "center",

      "& span": {
        padding: "3px 5px",
        color: "white",
        background: theme.colors.primary,
        borderRadius: 3,
        marginLeft: 5
      }
    }
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

  donateSettings: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",

    "& .left": {
      width: 500
    },

    "& .top": {
      background: theme.colors.gray3,
      padding: 10,
      marginBottom: 10
    },

    "& .middle": {
      position: "relative",
      backgroundSize: "cover",

      "& .drag": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "calc(100% - 40px)",
        height: 100,

        "& svg": {
          position: "absolute",
          bottom: -10,
          right: -10,
          fontSize: 24,
          color: "gray"
        }
      },

      "& .bg": {
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius: 3
      },

      "& > div:not(.avatar)": {
        "& fieldset": {
          border: 0
        },

        "& textarea": {
          height: 100,
          lineHeight: "21px"
        }
      },

      "& .avatar": {
        position: "absolute",
        bottom: 10,
        left: 10,
        display: "flex",
        alignItems: "center",

        "& img": {
          width: 30,
          height: 30,
          borderRadius: "50%",
          objectFit: "cover",
          marginRight: 10
        }
      }
    },

    "& .right": {
      width: "calc(100% - 500px - 30px)",
      marginLeft: 30,

      "& h4": {
        marginBottom: 10,
        fontWeight: "600"
      },

      "& button": {
        background: theme.colors.primary,
        color: "white",
        borderRadius: 5,
        marginBottom: 10,
        padding: "10px 30px",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        marginRight: 10,

        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 3px 6px rgba(0, 0, 0, .5)"
        }
      },

      "& > div": {
        display: "flex",
        flexWrap: "wrap",
        margin: -5
      }
    }
  },

  donate: {
    padding: "10px 30px",
    fontSize: 16,
    background: theme.colors.primary,
    color: "white",
    borderRadius: 5,
    marginTop: 20
  },

  textContent: {
    width: "100%",
    height: 100,
    border: "1px dashed #e1e1e1",

    "& .textInput > div": {
      padding: 10
    },

    "&.whiteColor textarea": {
      color: "white"
    },

    "& .color": {
      display: "flex",
      position: "absolute",
      bottom: -30,
      left: "50%",
      transform: "translateX(-50%)",

      "& > div": {
        width: 20,
        height: 20,
        borderRadius: 10,
        margin: 3,

        "&.white": {
          backgroundColor: "white",
          border: "1px solid #e1e1e1"
        },
        "&.black": {
          backgroundColor: "black"
        },

        "&.active": {
          border: "2px solid red"
        }
      }
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
    wrap: {
      marginTop: -10
    },

    back: {
      right: 5,
      top: 45
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

    donateSettings: {
      maxWidth: 500,
      margin: "auto",

      "& .top": {
        padding: "0 10px"
      },

      "& .right": {
        width: "100%",
        marginTop: 10,
        marginLeft: 0,

        "& h4": {
          margin: 0
        },

        "& .modalBtn": {
          position: "absolute",
          top: 12,
          right: 1,

          "& button": {
            fontSize: 13,
            padding: "7px 10px",
            minWidth: 70
          }
        }
      }
    },

    donate: {
      display: "block",
      margin: "auto",
      marginTop: 20
    }
  }
});

export default styles;
