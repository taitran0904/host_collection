import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa";
import { Modal, Backdrop, Fade } from "@mui/material";
import { MdCake, MdViewModule, MdViewList } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import * as birthdayActions from "../../actions/birthday";
import TitlePage from "../../components/TitlePage";
import TitleChild from "../../components/TitleChild";
import { DonateItem } from "../../components/BirthdayComponent";
import { BIRTHDAY_DETAIL, BIRTHDAY_CARD } from "../../constants/ui/homepage";
import { IMAGE_BASE_URL } from "../../constants";
import NoAvatar from "../../assets/images/no-avatar.png";
import { japanDate } from "../../commons/functionHelpers";

import styles from "./styles";

function BirthdayDetailPage(props) {
  const {
    classes,
    history,
    match,
    userInfo,
    birthdayActionCreators,
    donateList,
    hostInfo,
    location,
  } = props;
  const { id } = match.params;
  const [view, setView] = useState("image");
  const [donate, setDonate] = useState({
    item: null,
    status: false,
  });

  const [isViewGift, setViewGift] = useState(false);

  const { fetchDonateList, setBirthdayPage, setIsLoadMore, getHost } =
    birthdayActionCreators;
  const host = location.state;

  const titleStyle = donate.item && JSON.parse(donate.item.styles);

  useEffect(() => {
    if (!donateList.isLoadMore && id) {
      fetchDonateList({ userId: id, limit: 20, page: donateList.page });
    }
  }, [donateList.isLoadMore, donateList.page, fetchDonateList, hostInfo, id]);

  useEffect(() => {
    if (donateList.isLoadMore && `${hostInfo.id}` !== id) {
      return () => {
        setIsLoadMore("donate");
      };
    }
  });

  useEffect(() => {
    if (hostInfo.id !== id) {
      getHost(id);
    }
  }, [getHost, id, hostInfo.id]);

  const onLoadMore = () => {
    if (donateList.isLoadMore && donateList.page < donateList.lastPage) {
      setBirthdayPage("donate");
    }
  };

  const onViewDonate = (item) => {
    setDonate({
      item,
      status: true,
    });
  };

  const renderInfo = (hostInfo) => {
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
        {userInfo.id !== hostInfo.id && (
          <NavLink to={`/birthday-card/${id}`} className="right">
            <FiGift />
            {BIRTHDAY_CARD}
          </NavLink>
        )}
      </div>
    );
  };

  const renderDonate = () => {
    if (donateList.data && donateList.data.length > 0) {
      return donateList.data.map((item) => (
        <DonateItem
          setViewGift={setViewGift}
          onViewDonate={onViewDonate}
          list={view === "list"}
          item={item}
          key={item.id}
        />
      ));
    }
  };

  return (
    <div>
      <button
        className={classes.back}
        type="button"
        onClick={() => history.goBack()}
      >
        <FaArrowLeft />
      </button>
      <div className={classes.container}>
        <TitlePage
          icon={<MdCake className={classes.icon} />}
          title={BIRTHDAY_DETAIL}
        />
        {host ? renderInfo(host) : hostInfo.id && renderInfo(hostInfo)}
        <div className={classes.titleChild}>
          <TitleChild
            style={{ background: "none" }}
            titleChild={BIRTHDAY_CARD}
          />
          <div className={classes.switch}>
            <button
              type="button"
              className={view === "image" ? "active" : ""}
              onClick={() => setView("image")}
            >
              <MdViewModule />
            </button>
            <button
              type="button"
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
            >
              <MdViewList />
            </button>
          </div>
        </div>
        <InfiniteScroll
          className={`${classes.donateList} `}
          dataLength={donateList.data.length}
          next={onLoadMore}
          hasMore={donateList.page < donateList.lastPage}
        >
          {renderDonate()}
        </InfiniteScroll>
      </div>
      {donate.item && donate.status && (
        <>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={donate.status}
            onClose={() => setDonate({ item: null, status: false })}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={donate.status}>
              <div className={classes.modalContent}>
                <img
                  alt="img"
                  src={`${IMAGE_BASE_URL}/card_birthday/${donate.item.cid_card.image}`}
                />
                <p
                  style={{
                    position: "absolute",
                    top: `${titleStyle.top}%`,
                    left: `${titleStyle.left}%`,
                    color: titleStyle.color,
                  }}
                >
                  {donate.item.title}
                </p>
              </div>
            </Fade>
          </Modal>
          {isViewGift && donate.item.cid_gift && (
            <div className={classes.animationGif}>
              <img
                onClick={() => setViewGift(false)}
                alt="gif"
                src={`${IMAGE_BASE_URL}/card_birthday/${donate.item.cid_gift.gif}`}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

BirthdayDetailPage.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  userInfo: PropTypes.object,
  birthdayActionCreators: PropTypes.shape({
    fetchDonateList: PropTypes.func,
    setBirthdayPage: PropTypes.func,
    setIsLoadMore: PropTypes.func,
    getHost: PropTypes.func,
  }),
  donateList: PropTypes.object,
  hostInfo: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
  donateList: state.birthday.donateList,
  isLoadMore: state.birthday.isLoadMore,
  hostInfo: state.birthday.hostInfo,
});

const mapDispatchToProps = (dispatch) => ({
  birthdayActionCreators: bindActionCreators(birthdayActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(BirthdayDetailPage);
