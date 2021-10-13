const styles = (theme) => ({
  container: {
    backgroundColor: "#ffff",
    borderRadius: "0 5px 5px 5px",
  },

  bulkhead: {
    height: 10,
    width: "100%",
    backgroundColor: "#e1e1e1",
    position: "absolute",
    marginLeft: -15,
  },

  snsFollowers: {
    marginBottom: 30,
    "& p": {
      color: theme.color.color4,
      marginBottom: 10,
    },
  },
});

export default styles;
