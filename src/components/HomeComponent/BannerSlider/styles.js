const styles = theme => ({
  container: {
    margin: "-15px -30px",
    marginBottom: 0,

    "& img": {
      height: "35vw",
      width: "100%",
      objectFit: "cover"
    },

    "& .slick-arrow": {
      display: "none!important"
    },

    "& .slick-dots": {
      bottom: 20,

      "& li": {
        margin: 0,
        width: 18
      },

      "& li button": {
        backgroundColor: "white",
        border: 0,
        borderRadius: 6,
        width: 12,
        height: 12,

        "&:before": {
          display: "none"
        }
      },

      "& li.slick-active button": {
        background: theme.color.primary,
        width: 12
      }
    },
    "& button": {
      zIndex: 10
    }
  },
  [theme.breakpoints.down("md")]: {
    container: {
      margin: -15,
      marginTop: -30
    }
  },
  [theme.breakpoints.down("xs")]: {
    container: {
      "& img": {
        height: "45vw"
      },

      "& .slick-dots": {
        bottom: 0,

        "& li": {
          margin: 0,
          width: 12
        },

        "& li button": {
          backgroundColor: "white",
          border: 0,
          borderRadius: 4,
          width: 8,
          height: 8
        },

        "& li.slick-active button": {
          width: 8
        }
      }
    }
  }
});

export default styles;
