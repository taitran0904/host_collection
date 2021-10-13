const styles = theme => ({
  switchGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingBottom: 20,
    borderBottom: `1px dashed ${theme.color.color3}`,
    "& h5": {
      color: theme.color.color6
    }
  }
});

export default styles;
