const styles = (theme) => ({
  container: {
    "& img": {
      height: 200,
      width: 200,
      marginRight: 10,
      marginBottom: 10,
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "3px",
    },
  },
  avatarUpload: {
    "& .ant-upload.ant-upload-select-picture-card": {
      width: "auto",
      height: "auto",
    },
    "& .ant-upload-select-picture-card": {
      border: "none",
    },
    "& > div.ant-upload > span.ant-upload": {
      width: 140,
      height: 30,
      background: theme.color.primary,
      // border: '1px dashed #d9d9d9',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: 4,
      color: "white",
      cursor: "pointer",
      padding: 10,
      "& svg": {
        fontSize: 18,
      },
      "&:hover": {
        borderColor: theme.color.primary,
      },
    },
  },

  groupImage: {
    marginRight: 10,
    position: "relative",
    "& svg": {
      position: "absolute",
      top: "6px",
      left: "165px",
      backgroundColor: "#fff",
      height: "25px",
      width: "25px",
      padding: "3px",
      borderRadius: "50%",
      color: theme.color.gray1,
      opacity: 0.7,
      fontSize: 12,
      "&:hover": {
        opacity: 1,
        cursor: "pointer",
      },
    },
  },
});

export default styles;
