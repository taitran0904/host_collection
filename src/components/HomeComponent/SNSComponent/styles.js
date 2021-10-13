const styles = theme => ({
  icon: {
    fontSize: 30,
    marginRight: 10,
    color: theme.color.primary
  },
  container: {
    marginTop: 30
  },
  tabContainer: {
    border: `4px solid ${theme.colors.color2}`,
    borderRadius: 10,
    overflow: "hidden"
  },
  tabBar: {
    width: "100%",
    background: "none",
    boxShadow: "none",
    transition: ".3s",

    "& > div": {
      minHeight: "auto"
    },

    "&.fixed": {
      position: "fixed",
      top: 0,
      zIndex: 10,
      background: "white",
      left: "220px",
      right: 0,
      width: "calc(100% - 220px)"
    }
  },
  tabs: {
    minHeight: "auto",
    width: "100%",
    "& > div": {
      background: theme.color.color5
    }
  },
  tabItem: {
    position: "relative",
    zIndex: 1,
    minHeight: "auto",
    opacity: 1,
    width: "25%",
    color: theme.color.color4,
    border: `1px solid ${theme.colors.color3}`,
    borderRight: 0,
    maxWidth: "initial",
    overflow: "hidden",

    "& span": {
      fontSize: 20,
      textTransform: "initial",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",

      "& svg": {
        marginBottom: "0!important",
        marginRight: 10
      }
    },
    "&:hover": {
      color: theme.color.primary
    },
    "&.active": {
      color: "white!important",
      borderColor: theme.colors.primary,
      background: theme.color.primary
    }
  },
  indicator: {
    height: "100%",
    background: theme.color.primary,
    borderRadius: 5,
    width: "25%!important"
  },
  indicatorHidden: {
    display: "none"
  },
  tabPanel: {
    "& > div": {
      background: "#F0F0F0",
      display: "flex",
      flexWrap: "wrap",
      padding: 10
    }
  },
  photoItem: {
    width: "calc(100% / 5 - 20px)",
    margin: 10,
    position: "relative",
    display: "block",
    cursor: "pointer",

    "&:hover": {
      filter: "brightness(0.7)"
    },

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
      display: "-webkit-box",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical"
    },

    "& > div": {
      position: "absolute",
      background: theme.colors.primary,
      color: "white",
      padding: "10px 10px",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 5,
      transition: ".3s",
      cursor: "pointer",
      opacity: 0,
      visibility: "hidden",
      width: 120,
      textAlign: "center",

      "&:hover": {
        background: "white",
        color: theme.colors.primary
      }
    },

    "&:hover div": {
      opacity: 1,
      visibility: "initial"
    }
  },

  imageViewer: {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 100
  },

  [theme.breakpoints.down("lg")]: {
    photoItem: {
      width: "calc(100% / 4 - 20px)"
    }
  },
  [theme.breakpoints.down("md")]: {
    tabBar: {
      "&.fixed": {
        top: 40,
        left: 0,
        width: "100%"
      }
    }
  },
  [theme.breakpoints.down("sm")]: {
    photoItem: {
      width: "calc(100% / 3 - 20px)"
    }
  },
  [theme.breakpoints.down("xs")]: {
    container: {
      background: "white",
      margin: -15,
      padding: "0 15px"
    },
    tabContainer: {
      margin: "0 -15px",
      border: 0,
      borderRadius: 0
    },

    photoItem: {
      width: "calc(100% / 3 - 2px)",
      margin: 1,
      marginBottom: -2,

      "& h5": {
        display: "none"
      }
    },
    tabPanel: {
      background: "#F0F0F0",

      "& > div": {
        padding: 0,
        margin: -1,
        marginTop: 1
      }
    },
    tabItem: {
      "& span": {
        fontSize: 12,
        justifyContent: "center",

        "& svg": {
          display: "none"
        }
      }
    }
  }
});

export default styles;
