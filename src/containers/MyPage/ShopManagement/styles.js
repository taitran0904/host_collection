const styles = (theme) => ({
  newBtn: {
    display: 'table',
    padding: '15px 30px',
    background: theme.color.primary,
    textAlign: 'center',
    minWidth: 100,
    color: 'white',
    margin: 'auto',
    marginBottom: 20,
    borderRadius: 5,
    transition: '.3s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 3px 10px rgba(0, 0, 0, .5)'
    }
  },
  shopList: {
    margin: '0 -10px',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 30
  },
  managerList: {
    margin: '0 -10px',
    display: 'flex',
    flexWrap: 'wrap'
  },
});

export default styles;
