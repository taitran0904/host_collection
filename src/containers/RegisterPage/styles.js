import bg from "../../assets/images/bg-login.jpg";

const styles = (theme) => ({
  loginWrapper: {
    maxWidth: 500,
    margin: "30px auto",
    backgroundPosition: "top",
    backgroundSize: "cover",
    display: "flex",
    flexWrap: "wrap",
    height: 600,
    overflow: "hidden",

    [theme.breakpoints.down("sm")]: {
      background: "white",
      position: "relative",
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      "& img": {
        width: "150px !important",
      },
    },
  },
});

export default styles;
