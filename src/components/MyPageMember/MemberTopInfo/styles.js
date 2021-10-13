const styles = (theme) => ({
  avatarLink: {
    background: "#ffff",
    padding: '10px',
    borderRadius: '5px'
  },

  infoUser: {
    background: '#fff',
    margin: '20px 0 0 0',
    padding: '20px',
    borderRadius: '5px',
    fontSize: '1.1rem'
  },

  lineInfo: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0',

    '& svg': {
      margin: '0 8px 0 0'
    },

    '& span': {
      padding: '0 0 0 10px',
      fontWeight: 'bold'
    }
  },
  titleLine: {
    [theme.breakpoints.down("sm")]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }
  },

  avatarBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: 30,

  },
  avatarBoxLeft: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: 80,
      height: 80,
      objectFit: 'cover',
      objectPosition: 'center',
      marginRight: 20,
      borderRadius: '50%',
      [theme.breakpoints.down("xs")]: {
        width: 70,
        height: 70,
        marginRight: 10
      }
    },
    '& h4': {
      color: theme.color.color4
    },

    '& svg': {

    }
  },
  settingBtn: {
    display: 'flex',
    fontSize: 50,
    color: theme.color.color4,
    '&:hover': {
      color: theme.color.primary
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 40
    }
  },
  nominated: {
    color: theme.color.color6,
    marginBottom: 30
  },
  listFavorite: {
    color: theme.color.color6,
    marginBottom: 30
  },
  goToShopManage: {
    display: 'table',
    padding: '10px 20px',
    background: theme.color.primary,
    color: 'white',
    borderRadius: 3,
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 3px 6px rgba(0, 0, 0, .3)'
    }
  }
});

export default styles;
