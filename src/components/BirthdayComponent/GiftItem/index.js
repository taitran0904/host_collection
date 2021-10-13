import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { IMAGE_BASE_URL } from "../../../constants";
import { formatMoney } from "../../../commons/functionHelpers";

class GiftModal extends React.PureComponent {
  render() {
    const {
      classes,
      item,
      type,
      selected,
      setSelected,
      view,
      giftSelected,
      setGiftSelected,
    } = this.props;

    return (
      <div
        href=""
        onClick={() => {
          if (type === "gift") {
            setGiftSelected(item);
          } else {
            setSelected(item);
          }
        }}
        type="button"
        className={`${classes.giftItem} ${type === "gift" ? "gift" : ""} ${
          view === "list" ? "list" : ""
        } ${giftSelected === item || selected === item ? "active" : ""}`}
      >
        <div className="image">
          <img
            alt="avatar"
            src={`${IMAGE_BASE_URL}/card_birthday/${item.image}`}
          />
        </div>
        {type === "gift" && <h5>{`¥ ${formatMoney(`${item.prices}`)}`}</h5>}
      </div>
    );
  }
}

GiftModal.propTypes = {
  classes: PropTypes.object,
  selected: PropTypes.object,
  setSelected: PropTypes.func,
  type: PropTypes.string,
  view: PropTypes.string,
  item: PropTypes.object,
  giftSelected: PropTypes.object,
  setGiftSelected: PropTypes.func,
};

export default withStyles(styles)(GiftModal);
