import React, { useEffect, useState } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import { IMAGE_BASE_URL } from "../../../constants";
import NoAvatar from "../../../assets/images/no-avatar.png";

function DonateItem(props) {
  const { classes, item, index, type, isPage } = props;
  const itemRef = React.useRef(null);
  const [width, setWidth] = useState(0);

  const _renderInfo = (item) => {
    if (type === "gift") {
      return `${item.gift_count || 0}人`;
    }
    if (type === "recent") {
      return `${item.countDay}日`;
    }

    const d = new Date(item.birthday);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  };

  const handleResize = () => {
    setWidth(itemRef.current.offsetWidth);
  };

  useEffect(() => {
    handleResize();

    if (type) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [itemRef, type]);

  return (
    <NavLink
      to={{ pathname: `/birthday/${item.id}`, state: item }}
      className={`${classes.birthdayItem} ${isPage ? "date" : type} ${`item-${
        index + 1
      }`}`}
      key={item.id}
      ref={itemRef}
    >
      <img
        style={{ height: width }}
        alt="img"
        src={
          item.avatar === null
            ? NoAvatar
            : `${IMAGE_BASE_URL}/avatar/small/${item.avatar}`
        }
      />
      <h5>{item.name}</h5>
      <p>{_renderInfo(item)}</p>
    </NavLink>
  );
}

DonateItem.propTypes = {
  classes: PropTypes.object,
  item: PropTypes.object,
  index: PropTypes.number,
  type: PropTypes.string,
  isPage: PropTypes.any,
};

export default withStyles(styles)(DonateItem);
