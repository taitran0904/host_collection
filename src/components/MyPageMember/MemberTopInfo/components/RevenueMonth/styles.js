
const styles = (theme) => ({
  wrapRevenue: {
    backgroundColor: '#ffff',
    marginTop: 20,
    borderRadius: 5,
    padding: 20
  },

  titleRevenue: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    position: 'relative',
    width: '100%'
  },

  groupRevenue: {
    fontSize: '1.1rem',

    "& p span": {
      fontWeight: 'bold',
    }
  },

  selectShop: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 40,
    width: 200,
    border: "1px solid #444",
    background: "#555",
    color: "white",
    padding: "0 10px",
    fontSize: 14,
    borderRadius: '3px',

    "&:hover": {
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      width: '30%',
    },
  }
});

export default styles;
