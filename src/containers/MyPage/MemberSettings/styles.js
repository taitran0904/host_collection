const styles = (theme) => ({
  container: {
    backgroundColor: '#ffff',
    padding: '10px',
    borderRadius: '5px',
    [theme.breakpoints.down("md")]: {
      padding: '15px',
    },
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
    },
    [theme.breakpoints.down("sm")]: {
      display: 'flow-root',
      '& button': {
        float: 'left',
      },
      '&  a': {
        float: 'right',
      }
    },
  },
});

export default styles;
