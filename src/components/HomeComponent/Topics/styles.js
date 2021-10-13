const styles = theme => ({
  icon: {
    fontSize: 30,
    marginRight: 10,
    color: theme.colors.primary
  },
  container: {
    marginTop: 30
  },
  topicItem: {
    display: "flex",
    padding: 10,
    margin: "20px 0",
    background: "white",
    boxShadow: "0 1px 6px rgba(0, 0, 0, .2)",
    borderRadius: 10,
    width: "100%",

    "&:hover": {
      background: "#f4f4f4"
    },

    "& .left": {
      display: "flex",
      alignItems: "center",
      width: 150,
      borderRight: "1px solid #e1e1e1",
      margin: "-10px 0",
      padding: "10px 0",
      marginRight: 10,

      "& img": {
        width: 40,
        height: 40,
        borderRadius: "50%"
      },

      "& > div": {
        width: 100,
        marginLeft: 10
      },

      "& h4": {
        fontWeight: "600"
      },
      "& h5, & h4": {
        textAlign: "left",
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 1,
        "-webkit-box-orient": "vertical"
      }
    },

    "& > h5": {
      textAlign: "left",

      width: "calc(100% - 160px)",
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical"
    },

    "&.active": {
      background: theme.colors.primary,
      color: "white",
      flexWrap: "wrap",

      "& .left": {
        width: "100%",
        border: 0,
        margin: "0 -10px",
        padding: "0 10px",
        marginBottom: 10,
        borderBottom: "1px solid white",
        paddingBottom: 10
      },

      "& > h5": {
        display: "block",
        width: "100%"
      }
    }
  },

  [theme.breakpoints.down("xs")]: {
    container: {
      background: "white",
      margin: -15,
      padding: "0 10px",
      paddingTop: 5,
      marginTop: 25
    },

    titleWrap: {
      marginBottom: -10
    },

    topicItem: {
      flexWrap: "wrap",
      margin: "15px 0",
      padding: 10,

      "& .left": {
        width: "calc(100% + 20px)",
        border: 0,
        margin: "0 -10px",
        padding: "0 10px",
        marginBottom: 10,
        borderBottom: "1px solid #e1e1e1",
        paddingBottom: 10
      },

      "& > h5": {
        width: "100%"
      }
    }
  }
});

export default styles;
