const styles = () => ({
  textField: {
    "& > div": {
      width: "100%",
      marginBottom: 30,
      "& > div": {
        background: "white",
        padding: "5px 10px",
        border: "1px solid #e1e1e1",
        borderRadius: 4,
        "&:before": {
          content: "none"
        }
      },
      "& input": {
        zIndex: 6
      },
      "& label": {
        left: 10,
        zIndex: 2,
        top: 6,
      },
      '& .MuiInputLabel-shrink': {
        transform: 'translate(-10px, -10px)'
      },
      "& select": {
        zIndex: 6,
        margin: "0 -10px",
        padding: "6px 10px 7px",
        width: "100%",
        borderRadius: 4,
        "&:before": {
          content: "none"
        },
        "&:focus": {
          background: "inherit"
        }
      }
    }
  },
  note: {
    color: 'red',
    textAlign: 'center'
  },
  avatarUploader: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottom: '1px solid #e1e1e1'
  },
});

export default styles;
