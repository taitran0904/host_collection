const styles = (theme) => ({
  statistical: {
    color: theme.color.color4,
    marginTop: 30,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  tabBar: {
    display: "table",
    width: "auto",
    background: "none",
    boxShadow: "none",
    margin: "15px 0",
  },
  tabs: {
    minHeight: "auto",
    "& > div": {
      background: theme.color.color5,
    },
  },
  tabItem: {
    position: "relative",
    zIndex: 1,
    minHeight: "auto",
    opacity: 1,
    minWidth: 100,
    borderRadius: 5,
    color: theme.color.color4,
    "& span": {
      fontSize: 16,
      textTransform: "initial",
    },
    "&:hover": {
      color: theme.color.primary,
    },
    "&.active": {
      color: "white!important",
    },
  },
  indicator: {
    height: "100%",
    background: theme.color.primary,
    borderRadius: 5,
  },
  tabPane: {
    background: "white",
    padding: 20,
    color: theme.color.color4,
    "& p": {
      marginBottom: 10,
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
  },

  groupRevenue: {
    fontSize: 18,

    "& p span": {
      fontWeight: "bold",
    },
  },
});

export default styles;
