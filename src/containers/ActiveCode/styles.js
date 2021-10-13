const styles = theme => ({
  wrap__active: {
    backgroundColor: '#ffff',
    borderRadius: '5px'
  },

  title__active: {
    padding: "10px",
    fontSize: '20px',
    textAlign: 'center',
  },

  input__active: {
    padding: '10px',
    textAlign: 'center'
  },

  group__btn__active: {
    padding: '10px',
    textAlign: 'center',

    '& a': {
      color: 'rgba(0, 0, 0, 0.6)',
      cursor: 'pointer',
      padding: '12px 15px',
      marginLeft: '5px',
      borderRadius: '3px',
      textTransform: 'uppercase',
      backgroundColor: '#eeee',
      width: '120px',
    }
  }
});

export default styles;
