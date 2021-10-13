const styles = theme => ({
  birthdayItem: {
    width: "calc(100% / 7 - 10px)",
    margin: 5,
    position: "relative",
    display: "block",
    cursor: "pointer",
    background: "none",
    border: 0,
    transition: "0s!important",

    "&.item-1, &.item-2, &.item-3": {
      width: "calc(100% / 3 - 10px)",

      "&.recent": {
        width: "calc(100% / 4 - 10px)"
      }
    },

    "&.recent": {
      width: "calc(100% / 6 - 10px)",

      "&.item-4": {
        width: "calc(100% / 4 - 10px)"
      }
    },

    "&.date": {
      width: "calc(100% / 6 - 10px)!important"
    },

    "& h5": {
      position: "absolute",
      bottom: 3,
      height: 40,
      width: "100%",
      left: 0,
      background: "rgba(0, 0, 0, .7)",
      color: "white",
      padding: "0 10px",
      overflow: "hidden",
      display: "-webkit-box",
      lineHeight: "40px",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical",
      transition: ".3s",
      textAlign: "center"
    },

    "& p": {
      position: "absolute",
      padding: 3,
      background: "#2E3191",
      top: 0,
      right: 0,
      color: "white",
      fontSize: 12
    },

    "& img": {
      width: "100%",
      objectFit: "cover"
    },

    "&:hover img": {
      filter: "brightness(0.7)"
    }
  },

  [theme.breakpoints.down("md")]: {
    birthdayItem: {
      width: "calc(100% / 6 - 10px)",

      "&.item-1, &.item-2, &.item-3, &.item-4 ": {
        width: "calc(100% / 4 - 10px)"
      },

      "&.date": {
        width: "calc(100% / 5 - 10px)!important"
      }
    }
  },
  [theme.breakpoints.down("sm")]: {
    birthdayItem: {
      width: "calc(100% / 4 - 10px)",

      "&.item-1, &.item-2": {
        width: "calc(100% / 2 - 10px)"
      },

      "&.date": {
        width: "calc(100% / 4 - 10px)!important"
      }
    }
  },
  [theme.breakpoints.down("xs")]: {
    birthdayItem: {
      width: "calc(100% / 2 - 2px)",
      margin: 1,
      marginBottom: -2,

      "&.item-1, &.item-2, &.item-3": {
        width: "calc(100% - 2px)"
      },

      "&.item-4, &.item-5, &.item-6, &.item-7": {
        width: "calc(100% / 2 - 2px)"
      },

      "&.date": {
        width: "calc(100% / 3 - 2px)!important"
      },

      "&.recent, &.month": {
        width: "calc(100% / 2 - 2px)!important"
      },

      "& h5": {
        height: 30,
        lineHeight: "30px"
      }
    }
  }
});

export default styles;
