const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapActiveStatus: {
    border: '1px solid #ccc',
    height: '100px',
    width: '50%',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: "0 0 10px rgba(0,0,0,.15)"
  },

  notification: {
    width: '100%',
    '& p' : {
      textAlign: 'center',
      fontSize: '1.2rem',
      margin: 0,

      '& span': {
        fontWeight: 'bold',
      }
    }
  },

  success: {
    color: '#28a745',
    '& span': {
      color: '#138496'
    }
  },

  reject: {
    color: '#ffc107',
    '& span': {
      color: '#138496'
    }
  },

  error: {
    color: '#bd2130',
    '& span': {
      color: '#138496'
    }
  }

});

export default styles;
