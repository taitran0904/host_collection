import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { IoIosMove } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Draggable from "react-draggable";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as birthdayActions from "../../actions/birthday";
import { GiftModal } from "../../components/BirthdayComponent";
import TitlePage from "../../components/TitlePage";
import TitleChild from "../../components/TitleChild";
import { IMAGE_BASE_URL } from "../../constants";
import NoAvatar from "../../assets/images/no-avatar.png";
import { japanDate, formatMoney } from "../../commons/functionHelpers";
import { errorToast } from "../../commons/AlertHelper";

import {
  NUMBER_OF_DONATE,
  DONATE_SETTINGS,
  BIRTHDAY_CARD,
  MAKE_PRIVATED,
  DONATE,
  FREE,
  YOU_HAVE_NOT_SELECT,
  PLEASE_ENTER_CONTENT,
} from "../../constants/ui/homepage";

import styles from "./styles";

function BirthdayCardPage(props) {
  const {
    classes,
    history,
    match,
    birthdayActionCreators,
    hostInfo,
    location,
    birthdayCard,
    birthdayGiftCategory,
    birthdayGift,
    userInfo,
  } = props;
  const { id } = match.params;
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("gift");
  const [content, setContent] = useState("");
  const [selected, setSelected] = useState(null);
  const [imgPicked, setImgPicked] = useState(null);
  const [giftSelected, setGiftSelected] = useState(null);
  const [imgGiftPicked, setImgGiftPicked] = useState(null);
  const [isViewGift, setViewGift] = useState(false);

  const [dimension, setDimension] = useState({
    width: null,
    height: null,
  });

  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });

  const [textColor, setTextColor] = useState("#000");

  const contentRef = React.useRef(null);

  const host = location.state;

  const { getHost, fetchBirthdayCard, fetchBirthdayGiftCategory, donateGift } =
    birthdayActionCreators;

  useEffect(() => {
    if (hostInfo.id !== id) {
      getHost(id);
    }

    if (birthdayCard.length < 1) {
      fetchBirthdayCard({ type: 1, category: 0 });
    }

    fetchBirthdayGiftCategory();
  }, [
    fetchBirthdayCard,
    birthdayCard.length,
    getHost,
    id,
    hostInfo.id,
    fetchBirthdayGiftCategory,
  ]);

  useEffect(() => {
    if (birthdayCard.length > 1) {
      setSelected(birthdayCard[0]);
      setImgPicked(birthdayCard[0]);
    }
  }, [birthdayCard]);

  const handleResize = () => {
    if (contentRef.current) {
      setDimension({
        width: contentRef.current.offsetWidth,
        height: contentRef.current.offsetHeight,
      });
    }
  };

  useEffect(() => {
    if (!dimension.width) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimension.width]);

  const handleDrag = (e, data) => {
    if (!dimension.width) {
      handleResize();
    }

    setPosition({
      left: (e.layerX / dimension.width) * 100,
      top: (e.layerY / dimension.height) * 100,
    });
  };

  const onDonate = () => {
    if (content !== "") {
      donateGift(
        history,
        host || hostInfo,
        {
          title: content,
          sender: userInfo.id,
          receiver: host ? host.id : hostInfo.id,
          cid_card: imgPicked.id,
          cid_gift: imgGiftPicked ? imgGiftPicked.id : null,
          type: checked ? 1 : 2,
          styles: JSON.stringify({
            top: position.top || 0,
            left: position.left || 0,
            color: textColor,
          }),
        },
        {
          cid_card: imgPicked,
          cid_gift: imgGiftPicked,
        }
      );
    } else {
      errorToast(PLEASE_ENTER_CONTENT, "top-right");
    }
  };

  const renderInfo = () => {
    return (
      <div className={classes.info}>
        <NavLink to={`/host-detail/${id}`} className="left">
          <img
            alt="avatar"
            src={
              hostInfo.avatar === null
                ? NoAvatar
                : `${IMAGE_BASE_URL}/avatar/small/${hostInfo.avatar}`
            }
          />
          <div>
            <h2>{hostInfo.nick_name}</h2>
            <h4>{japanDate(hostInfo.birthday)}</h4>
          </div>
        </NavLink>
        <h5>
          <>{NUMBER_OF_DONATE}</>
          <span>{hostInfo.gift_count}</span>
        </h5>
      </div>
    );
  };

  return (
    <div>
      <div className={classes.wrap}>
        <button
          className={classes.back}
          type="button"
          onClick={() => history.goBack()}
        >
          <FaArrowLeft />
        </button>
        <TitlePage
          icon={<MdCake className={classes.icon} />}
          title={BIRTHDAY_CARD}
        />
        <div className={classes.container}>
          {host ? renderInfo(host) : hostInfo.id && renderInfo(hostInfo)}

          <TitleChild titleChild={DONATE_SETTINGS} />
          <div className={classes.donateSettings}>
            <div className="left">
              <div className="top">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                      name="privated"
                      color="default"
                    />
                  }
                  label={MAKE_PRIVATED}
                />
              </div>
              {imgPicked && (
                <div className="middle">
                  <img
                    ref={contentRef}
                    className="imageCard"
                    alt="card"
                    src={`${IMAGE_BASE_URL}/card_birthday/${imgPicked.image}`}
                  />
                  <Draggable onDrag={handleDrag}>
                    <div className="drag">
                      <div
                        className={`${classes.textContent} ${
                          textColor === "#fff" ? "whiteColor" : "blackColor"
                        }`}
                      >
                        <TextField
                          onChange={(e) => setContent(e.target.value)}
                          multiline
                          rowsMax={4}
                          variant="outlined"
                          placeholder="Enter something. . ."
                          className="textInput"
                        />
                        <IoIosMove />

                        <div className="color">
                          <div
                            className={`white ${
                              textColor === "#fff" ? "active" : ""
                            }`}
                            onClick={() => setTextColor("#fff")}
                          />
                          <div
                            className={`black ${
                              textColor === "#000" ? "active" : ""
                            }`}
                            onClick={() => setTextColor("#000")}
                          />
                        </div>
                      </div>
                    </div>
                  </Draggable>

                  <div className="avatar">
                    <img
                      alt="avatar"
                      src={
                        userInfo.avatar === null
                          ? NoAvatar
                          : `${IMAGE_BASE_URL}/avatar/small/${userInfo.avatar}`
                      }
                    />
                    <h5>{userInfo.nick_name}</h5>
                  </div>
                </div>
              )}
            </div>
            <div className="right">
              {imgPicked && (
                <h4>
                  {imgPicked.prices === 0
                    ? `Price: ${FREE}`
                    : `Price: ¥${formatMoney(`${imgPicked.prices}`)}`}
                </h4>
              )}
              <div className="modalBtn">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(true);
                    setType("gift");
                  }}
                >
                  GIFT
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(true);
                    setType("card");
                  }}
                >
                  CARD
                </button>
              </div>

              {open && (
                <GiftModal
                  open={open}
                  setOpen={setOpen}
                  selected={selected}
                  setSelected={setSelected}
                  imgPicked={imgPicked}
                  setImgPicked={setImgPicked}
                  type={type}
                  birthdayGiftCategory={birthdayGiftCategory}
                  fetchBirthdayCard={fetchBirthdayCard}
                  birthdayCard={birthdayCard}
                  birthdayGift={birthdayGift}
                  giftSelected={giftSelected}
                  setGiftSelected={setGiftSelected}
                  imgGiftPicked={imgGiftPicked}
                  setImgGiftPicked={setImgGiftPicked}
                />
              )}
            </div>
          </div>
          {imgPicked ? (
            <button onClick={onDonate} className={classes.donate} type="button">
              {DONATE}
            </button>
          ) : (
            <h5 style={{ marginTop: 10 }}>{YOU_HAVE_NOT_SELECT}</h5>
          )}
        </div>
      </div>
      {isViewGift && (
        <div onClick={() => setViewGift(false)}>
          <img
            alt="gif"
            src={`${IMAGE_BASE_URL}/card_birthday/${imgGiftPicked.gif}`}
          />
        </div>
      )}
    </div>
  );
}

BirthdayCardPage.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  hostInfo: PropTypes.object,
  location: PropTypes.object,
  birthdayGiftCategory: PropTypes.array,
  birthdayGift: PropTypes.array,
  birthdayCard: PropTypes.array,
  userInfo: PropTypes.object,
  birthdayActionCreators: PropTypes.shape({
    getHost: PropTypes.func,
    fetchBirthdayCard: PropTypes.func,
    fetchBirthdayGiftCategory: PropTypes.func,
    donateGift: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  birthdayCard: state.birthday.birthdayCard,
  birthdayGift: state.birthday.birthdayGift,
  loading: state.general.loading,
  birthdayGiftCategory: state.birthday.birthdayGiftCategory,
  userInfo: state.user.userInfo,
  hostInfo: state.birthday.hostInfo,
});

const mapDispatchToProps = (dispatch) => ({
  birthdayActionCreators: bindActionCreators(birthdayActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(BirthdayCardPage);
