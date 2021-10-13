const styles = theme => ({
  giftItem: {
    position: "relative",
    width: "calc(100% / 4 - 10px)",
    margin: 5,
    transition: "0s!important",
    cursor: "pointer",

    "& h5": {
      position: "absolute",
      width: "100%",
      height: 30,
      bottom: 3,
      background: "rgba(0, 0, 0,.5)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },

    "&.active img": {
      border: `3px solid ${theme.colors.color7}`
    },

    "&.gift.list": {
      width: "calc(100% - 10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #e1e1e1",
      paddingBottom: 10,

      "& img": {
        width: 40,
        height: 40,
        borderRadius: 3,
        zIndex: 3
      },
      "& h5": {
        position: "relative",
        bottom: "initial",
        background: "none",
        color: theme.colors.gray,
        justifyContent: "flex-end",
        fontWeight: "600",
        fontSize: 16
      },

      "&:before": {
        content: "attr(href)",
        width: "calc(100% + 10px)",
        height: "100%",
        position: "absolute",
        top: -5,
        left: -5,
        background: "#e1e1e1",
        opacity: 0
      },

      "&.active": {
        "& img": {
          border: 0
        },

        "&:before": {
          opacity: 1
        }
      }
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    maxWidth: 800,
    width: "100%",

    maxHeight: "95vh",

    "&:focus": {
      outline: "none"
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "calc(100% - 40px)",
      padding: 10
    }
  },
  indicator: {
    background: theme.colors.primary
  },
  tabPanel: {
    "& > div": {
      display: "flex",
      flexWrap: "wrap",
      margin: -5,
      marginTop: 10,
      maxHeight: "calc(95vh - 160px)",
      marginBottom: 5,
      overflowY: "auto"
    }
  },
  tabBar: {
    "& > div": {
      minHeight: "initial"
    }
  },
  tabItem: {
    minWidth: "initial",
    minHeight: 30,
    padding: "7px 20px"
  },

  switch: {
    display: "flex",
    alignItems: "center",
    marginLeft: 10,

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
        fontSize: 24,
        color: theme.colors.gray2
      },

      "&.active": {
        background: theme.colors.primary,

        "& svg": {
          color: "white"
        }
      }
    }
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: -10,
    padding: 10,
    marginBottom: 10,
    borderBottom: "1px solid #e1e1e1",

    "& .left": {
      display: "flex",
      alignItems: "center"
    },

    "& .right": {
      "& svg": {
        fontSize: 30,
        color: theme.colors.gray
      }
    }
  },
  submit: {
    height: 30,
    width: "100%",
    background: theme.colors.primary,
    color: "white"
  },
  cardWrap: {
    display: "flex",
    flexWrap: "wrap",
    margin: -5,
    marginBottom: 10,
    maxHeight: "calc(95vh - 160px)",
    overflowY: "auto"
  },

  [theme.breakpoints.down("sm")]: {
    giftItem: {
      width: "calc(100% / 3 - 10px)"
    }
  },
  [theme.breakpoints.down("xs")]: {
    giftItem: {
      width: "calc(100% / 2 - 10px)"
    }
  }
});

export default styles;
