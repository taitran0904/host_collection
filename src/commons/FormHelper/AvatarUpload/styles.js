const styles = (theme) => ({
  container: {
    "& img": {
      height: 140,
      width: 140,
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
      left: "115px",
      backgroundColor: "#da251c",
      height: "20px",
      width: "20px",
      padding: "3px",
      borderRadius: "50%",
      color: "#fff",
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
