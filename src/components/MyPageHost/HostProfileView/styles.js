const styles = (theme) => ({
  inforHeader: {
    width: "100%",
  },
  coverImage: {
    backgroundColor: theme.color.gray4,
    width: "100%",
    height: 150,
    position: "relative",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  avatarInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -70,
  },
  avatar: {
    position: "relative",
    "& img": {
      width: 120,
      height: 120,
      borderRadius: "50%",
      border: "5px solid #fff",
    },
  },
  item: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },

  itemName: {
    marginLeft: 10,
    color: theme.color.gray,
    fontSize: 14,
    whiteSpace: "nowrap",
    height: 20,
  },
  itemInfor: {
    marginLeft: 5,
    color: theme.color.black,
    fontSize: 14,
    fontWeight: "bold",
  },
  floatBtn: {
    float: "right",
  },
});

export default styles;
