const styles = (theme) => ({
  formGroup: {
    marginBottom: 30,
    "& .uploadPictureContainer": {
      width: "30%",
      margin: "1%",
    },
  },
  bulkhead: {
    left: 0,
    height: 10,
    width: "100%",
    background: theme.color.gray4,
    position: "absolute",
    marginTop: 10,
  },
  textField: {
    marginBottom: 20,
  },
  titleAvatar: {
    marginBottom: 10,
  },
  avatar: {},
});

export default styles;
