import React from "react";
import { withStyles } from "@mui/styles";
import { FaRegUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import TitlePage from "../../TitlePage";
import * as titleConstants from "../../../constants/ui/homepage";

const images = [
  {
    id: 1,
    name: "Alex",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 2,
    name: "Johnny Banks",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 3,
    name: "Tom",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 4,
    name: "Dennis Marshall",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 5,
    name: "Will Gibson",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },

  {
    id: 21,
    name: "Jerry",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 31,
    name: "Daniel Wellington",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 37,
    name: "Tom",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 47,
    name: "Dennis Marshall",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 57,
    name: "Will Gibson",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 41,
    name: "Tony Stark",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 51,
    name: "Alexandre Pato",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 12,
    name: "Cristiano Ronaldo",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 22,
    name: "David Beckham",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 32,
    name: "Leona Messi",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 42,
    name: "Neymar Jr.",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 52,
    name: "Will Gibson",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 33,
    name: "Jeremy McDonald ",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
];

function CastComponent(props) {
  const { classes } = props;

  const renderImg = () => {
    if (images && images.length > 0) {
      return images.map((item) => {
        return (
          <NavLink
            to={`/host-detail/${item.id}`}
            title={titleConstants.VIEW_DETAIL}
            className={classes.castItem}
            key={item.id}
          >
            <img alt="img" src={item.avatar} />
            <h5>{item.name}</h5>
            <p>Tokyo shop</p>
          </NavLink>
        );
      });
    }
  };

  return (
    <div className={classes.container}>
      <TitlePage
        title={titleConstants.CASTS}
        icon={<FaRegUserCircle className={classes.icon} />}
      />

      <div className={classes.castWrap}>
        <div className={`${classes.castContainer} pick-up`}>{renderImg()}</div>
      </div>
    </div>
  );
}

CastComponent.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(CastComponent);
