const styles = theme => ({
  icon: {
    fontSize: 30,
    marginRight: 10,
    color: theme.colors.primary
  },
  container: {
    marginTop: 15,
    margin: "0 -10px",
    display: "flex",
    flexWrap: "wrap"
  },
  type: {
    display: "flex",
    margin: "0 -3px",
    marginTop: 15,

    "& button": {
      background: theme.colors.gray3,
      borderRadius: 5,
      margin: "0 3px",
      padding: "7px 15px",
      color: theme.colors.gray,
      fontWeight: "500",
      fontSize: 16,

      "&.active": {
        background: theme.colors.primary,
        color: "white"
      }
    }
  },

  monthWrap: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 10,

    "& button": {
      height: 22.5,
      width: 22.5,
      background: "#e1e1e1",
      color: theme.color.gray2,
      borderRadius: 3,
      margin: 2,

      "&.active": {
        background: theme.colors.primary,
        color: "white"
      }
    }
  },

  [theme.breakpoints.down("xs")]: {
    container: {
      margin: "10px -14px"
    },

    monthZone: {
      margin: "0 -15px"
    },

    type: {
      margin: "0 -6px",

      "& button": {
        fontSize: 13,
        padding: "7px 10px",

        "& .willHidden": {
          display: "none"
        }
      }
    }
  }
});

export default styles;
