const styles = theme => ({
  donateItem: {
    position: "relative",
    width: "calc(100% / 4 - 20px)",
    margin: 10,
    borderRadius: 5,
    cursor: "pointer",
    overflow: "hidden",

    "&:hover": {
      filter: "brightness(0.5)"
    },

    "& h5": {
      display: "flex",
      justifyContent: "space-between",
      width: "calc(100% - 40px)"
    },

    "&.list": {
      overflow: "initial",
      width: "100%",
      borderBottom: "1px solid #e1e1e1",
      paddingBottom: 20,
      borderRadius: 0,
      display: "flex",
      alignItems: "center",

      "& h5 .money": {
        display: "none"
      },

      "&.isPage": {
        borderTop: "1px solid #e1e1e1",
        borderBottom: 0,
        paddingBottom: 0,
        paddingTop: 20,

        "&:before": {
          top: 10
        }
      },

      "& > img": {
        display: "none"
      },

      "& > div": {
        height: "auto",
        position: "initial",
        bottom: "initial",
        left: "initial",
        background: "none",
        padding: 0,
        color: theme.colors.gray,

        "& img": {
          width: 60,
          height: 60
        }
      },

      "& h4": {
        fontWeight: "600"
      },

      "&:before": {
        content: "attr(href)",
        width: "calc(100% + 20px)",
        height: "100%",
        position: "absolute",
        top: -10,
        left: -10,
        background: "rgba(0, 0, 0, .1)",
        transition: ".3s",
        opacity: 0
      },

      "&:hover:before": {
        opacity: 1
      }
    },

    "& img": {
      width: "100%"
    },

    "& > div": {
      position: "absolute",
      height: 40,
      bottom: 3,
      left: 0,
      padding: "0 10px",
      width: "100%",
      background: "rgba(0, 0, 0, .5)",
      color: "white",
      display: "flex",
      alignItems: "center",

      "& img": {
        width: 30,
        height: 30,
        objectFit: "cover",
        marginRight: 10,
        borderRadius: "50%"
      }
    }

    // "&.list": {
    //   width: "100%",
    //   borderBottom: "1px solid #e1e1e1",
    //   paddingBottom: 20,
    //   borderRadius: 0,
    //   display: "flex",
    //   alignItems: "center",

    //   "& > img": {
    //     display: "none"
    //   },

    //   "& > div": {
    //     height: "auto",
    //     position: "initial",
    //     bottom: "initial",
    //     left: "initial",
    //     background: "none",
    //     padding: 0,
    //     color: theme.colors.gray,

    //     "& img": {
    //       width: 60,
    //       height: 60
    //     }
    //   },

    //   "& h4": {
    //     fontWeight: "600"
    //   }
    // }
  },
  [theme.breakpoints.down("lg")]: {
    donateItem: {
      width: "calc(100% / 3 - 20px)"
    }
  },
  [theme.breakpoints.down("md")]: {
    donateItem: {
      width: "calc(100% / 2 - 20px)"
    }
  },
  [theme.breakpoints.down("xs")]: {
    donateItem: {
      width: "calc(100% - 20px)",
      marginBottom: 30,

      "&:before": {
        content: "attr(href)",
        position: "absolute",
        width: 2,
        height: 43,
        background: "white",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: -40
      },

      "&.list:before": {
        display: "none"
      },

      "&.list": {
        marginBottom: 10
      }
    }
  }
});

export default styles;
