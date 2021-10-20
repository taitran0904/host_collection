const styles = (theme) => ({
  mainMenu: {
    // margin: 10,
    // marginTop: 0,
    // background: theme.color.color5,
    // border: "1px solid #e1e1e1",
    // padding: 10,
    // borderRadius: 5,
    "&.mainMenuMobile": {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      "&.mainMenuMobile": {
        // display: "flex",
        // position: "fixed",
        // bottom: 0,
        // left: 0,
        // right: 0,
        // zIndex: 998,
        // height: 45,
        // background: "white",
        // padding: "0 10px",
        // width: "100%",
        // margin: 0,
        // boxShadow: "0 -4px 3px rgba(0, 0, 0, .4)",
        // alignItems: "center",
        // borderRadius: 0,
        // justifyContent: "space-between",

        "& a": {
          // flexDirection: "column",
          // alignItems: "center",
          // background: "none",
          // padding: "2px 10px",
          // fontSize: 13,
          // color: theme.color.color4,
          // width: "25%",

          "& svg": {
            fontSize: 24,
            // display: "block",
            color: "#aaa",
            transition: ".3s",
          },
          "& span": {
            margin: 0,
          },
          "&:hover, &.active": {
            "& svg": {
              color: "#3737a0",
            },
          },
        },
      },
    },
  },
  mainLink: {
    background: "white",
    color: theme.color.color4,
    borderRadius: 3,
    marginBottom: 1,
    padding: "5px 10px",
    display: "flex",
    fontSize: 16,
    "&:hover, &.active": {
      background: theme.color.primary,
      color: "white",
    },
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;
