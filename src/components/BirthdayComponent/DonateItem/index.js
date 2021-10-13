import React, { useEffect, useState } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { IMAGE_BASE_URL } from "../../../constants";
import NoAvatar from "../../../assets/images/no-avatar.png";
import { formatMoney } from "../../../commons/functionHelpers";
import * as cts from "../../../constants/ui/homepage";

function DonateItem(props) {
  const { classes, item, hostPage, list, onViewDonate, setViewGift } = props;
  const itemRef = React.useRef(null);
  const [width, setWidth] = useState(0);

  const titleStyle = JSON.parse(item.styles);

  const handleResize = () => {
    setWidth(itemRef.current.offsetWidth);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [itemRef]);

  return (
    <div
      onClick={() => {
        if (onViewDonate) {
          onViewDonate(item);
          setViewGift(true);
        }
      }}
      href=""
      key={item.id}
      className={`${classes.donateItem} ${hostPage ? "hostPage" : ""} ${
        list ? "list" : ""
      }`}
      ref={itemRef}
    >
      <img
        style={{ height: width, objectFit: "cover" }}
        alt="img"
        src={`${IMAGE_BASE_URL}/card_birthday/${item.cid_card.image}`}
      />

      {!list && (
        <p
          style={{
            position: "absolute",
            top: `${titleStyle.top}%`,
            left: `${titleStyle.left}%`,
            color: titleStyle.color,
            whiteSpace: "pre-wrap",
          }}
        >
          {item.title}
        </p>
      )}

      <div>
        <img
          alt="avatar"
          src={
            item.sender.avatar === null
              ? NoAvatar
              : `${IMAGE_BASE_URL}/avatar/small/${item.sender.avatar}`
          }
        />
        <h5>
          <span>{item.sender.nick_name}</span>
          {hostPage && (
            <span className="money">
              {item.price_card !== 0
                ? `¥${formatMoney(`${item.price_card}`)}`
                : cts.FREE}
            </span>
          )}
        </h5>
      </div>
      {hostPage && list && (
        <h4>
          {item.price_card !== 0
            ? `¥${formatMoney(`${item.price_card}`)}`
            : cts.FREE}
        </h4>
      )}
    </div>
  );
}

DonateItem.propTypes = {
  classes: PropTypes.object,
  hostPage: PropTypes.any,
  item: PropTypes.object,
  list: PropTypes.bool,
  onViewDonate: PropTypes.func,
  setViewGift: PropTypes.func,
};

export default withStyles(styles)(DonateItem);
