const styles = (theme) => ({
  myPageContent: {
    // background: '#ffff',
    // padding: 10,
    [theme.breakpoints.down("sm")]: {
      padding: 15,
      margin: "0 -15px",
    },
  },
  tabHost: {
    display: "flex",
    width: "100%",
    overflow: "overlay",
    transition: ".3s",
    "&::-webkit-scrollbar": {
      height: 0,
    },
    "&::-webkit-scrollbar-track": {
      background: "#ccc",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(255,0,0,0)!important",
    },
    "&:hover": {
      "&::-webkit-scrollbar-thumb": {
        background: "#aaa!important",
      },
      "&::-webkit-scrollbar": {
        height: 5,
      },
    },
  },
  tabItem: {
    padding: "0px 20px",
    fontSize: 16,
    color: "#c4c4c4",
    textDecoration: "none",
    "&.active": {
      color: theme.color.primary,
      borderBottom: "2px solid #666687",
      "&:hover": {
        color: "black",
      },
    },
    "&:hover": {
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      // minWidth: "20vw",
    },
  },
});

export default styles;
