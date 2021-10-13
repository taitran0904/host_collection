const styles = theme => ({
  giftItem: {
    position: "relative",
    width: "calc(100% / 4 - 10px)",
    margin: 5,
    transition: "0s!important",
    cursor: "pointer",
    border: "1px solid #e1e1e1",

    "& h5": {
      position: "absolute",
      width: "100%",
      height: 30,
      bottom: 0,
      left: 0,
      background: "rgba(0, 0, 0,.5)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },

    "&.active .image": {
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
    },

    "& .image": {
      height: "calc(800px / 4 - 18.5px)",
      objectFit: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },

  [theme.breakpoints.down("sm")]: {
    giftItem: {
      width: "calc(100% / 3 - 10px)",

      "& .image": {
        height: "calc(100vw / 3 - 27px)"
      }
    }
  },
  [theme.breakpoints.down("xs")]: {
    giftItem: {
      width: "calc(100% / 2 - 10px)",

      "& .image": {
        height: "calc(100vw / 2 - 35px)"
      }
    }
  }
});

export default styles;
