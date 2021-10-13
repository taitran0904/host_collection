const styles = (theme) => ({
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
  buttonGroup: {
    textAlign: 'center',
    zIndex: 10,
    '& button': {
      background: theme.color.primary,
      border: 0,
      width: 100,
      textAlign: 'center',
      height: 40,
      lineHeight: '40px',
      color: 'white',
      fontSize: 16,
      borderRadius: 5,
      marginRight: 10,
      cursor: 'pointer'
    },
    '& a': {
      display: 'inline-block',
      background: theme.color.color2,
      width: 100,
      textAlign: 'center',
      height: 40,
      lineHeight: '40px',
      color: theme.color.color6,
      fontSize: 16,
      borderRadius: 5,
    },
    '& a:hover, & button:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 3px 10px rgba(0, 0, 0, .5)'
    }
  }
});

export default styles;
