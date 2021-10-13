const styles = (theme) => ({
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
