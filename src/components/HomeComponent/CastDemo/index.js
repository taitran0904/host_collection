import React from "react";
import { withStyles, makeStyles } from "@mui/styles";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
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
    avatar: "https://i.picsum.photos/id/458/400/400.jpg",
  },

  {
    id: 21,
    name: "Jerry",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/459/400/400.jpg",
  },
  {
    id: 31,
    name: "Daniel Wellington",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/460/400/400.jpg",
  },
  {
    id: 41,
    name: "Tony Stark",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/461/400/400.jpg",
  },
  {
    id: 51,
    name: "Alexandre Pato",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/471/400/400.jpg",
  },
  {
    id: 12,
    name: "Cristiano Ronaldo",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/472/400/400.jpg",
  },
  {
    id: 22,
    name: "David Beckham",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/464/400/400.jpg",
  },
  {
    id: 32,
    name: "Leona Messi",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/466/400/400.jpg",
  },
  {
    id: 42,
    name: "Neymar Jr.",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/467/400/400.jpg",
  },
  {
    id: 52,
    name: "Will Gibson",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/468/400/400.jpg",
  },
  {
    id: 33,
    name: "Jeremy McDonald ",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar: "https://i.picsum.photos/id/469/400/400.jpg",
  },
];

function CastComponent(props) {
  const { classes } = props;

  const roundedLength = images && 2 * Math.round(images.length / 2);

  const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("xs")]: {
      castMB: {
        columnCount: images && (images.length > 4 ? roundedLength / 2 : 2),
        width:
          images && (images.length > 4 ? `${roundedLength * 40}vw` : "100%"),
        columnGap: 0,
      },
    },
  }));
  const classMB = useStyles();
  const [focused, setFocused] = React.useState();

  const _renderCast = () => {
    if (images && images.length > 0) {
      return images.map((item) => {
        return (
          <NavLink
            onClick={(e) => focused && e.preventDefault()}
            to={`/host-detail/${item.id}`}
            title={titleConstants.VIEW_DETAIL}
            className={classes.castItem}
            key={item.id}
          >
            <div>
              <img alt="img" src={item.avatar} />
              <div>
                <h3>{item.name}</h3>
                <h5>173cm / A / Gemini</h5>
              </div>
            </div>
            <button
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onClick={() => alert("You just liked you")}
              type="button"
            >
              <IoMdHeart />
            </button>
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
        <div className={`${classes.castContainer} ${classMB.castMB}`}>
          {_renderCast()}
        </div>
      </div>
    </div>
  );
}

CastComponent.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(CastComponent);
