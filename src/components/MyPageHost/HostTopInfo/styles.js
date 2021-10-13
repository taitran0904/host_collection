const styles = (theme) => ({
  avatarBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,

    "& h5 a": {
      display: "block",
      padding: "10px 15px",
      background: theme.color.primary,
      borderRadius: 3,
      color: "white",
      fontSize: 16,
      textAlign: "center",
      minWidth: 100,
      fontWeight: "500",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 3px 6px rgba(0, 0, 0, .3)",
      },
    },
  },
  avatarBoxLeft: {
    display: "flex",
    alignItems: "center",
    "& img": {
      height: 120,
      objectPosition: "center",
      marginRight: 20,
      borderRadius: "50px",
      [theme.breakpoints.down("xs")]: {
        width: 70,
        height: 70,
        marginRight: 10,
      },
    },
    "& h4": {
      fontWeight: "bold",
      fontSize: 20,
      [theme.breakpoints.down("sm")]: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontSize: 15,
      },
    },
  },

  selectShop: {
    height: 40,
    width: 200,
    border: "1px solid #444",
    background: "#555",
    color: "white",
    padding: "0 10px",
    fontSize: 14,
    borderRadius: "3px",

    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
  },
});

export default styles;
