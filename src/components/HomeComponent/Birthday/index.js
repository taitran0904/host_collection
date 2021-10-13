import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { MdCake } from "react-icons/md";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./styles";
import TitlePage from "../../TitlePage";
import * as birthdayActions from "../../../actions/birthday";
import * as titleConstants from "../../../constants/ui/homepage";
import { BirthdayItem } from "../../BirthdayComponent";
import ViewMoreHome from "../ViewMoreHome";

function Birthday(props) {
  const {
    isPage,
    birthdayActionCreators,
    giftCount,
    currentLocation,
    recentDate,
    byMonth,
    isLoadMore,
    classes,
    hiddenViewMore,
  } = props;

  const [type, setType] = useState("gift");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const dataOfMonth = byMonth.find((i) => i.month === currentMonth);

  const {
    fetchBirthdayByGiftCount,
    fetchBirthdayByRecent,
    fetchBirthdayByMonth,
    setBirthdayPage,
    setIsLoadMore,
  } = birthdayActionCreators;

  useEffect(() => {
    if (!isLoadMore && currentLocation.id) {
      if (type === "gift") {
        fetchBirthdayByGiftCount({
          location: currentLocation.id,
          limit: isPage ? 20 : 10,
          page: giftCount.page,
        });
      } else if (type === "month") {
        fetchBirthdayByMonth({
          month: currentMonth,
          location: currentLocation.id,
          limit: isPage ? 2000 : 10,
          page: dataOfMonth && dataOfMonth.page,
        });
      } else {
        fetchBirthdayByRecent({
          location: currentLocation.id,
          limit: isPage ? 20 : 10,
          page: recentDate.page,
        });
      }
    }
  }, [
    fetchBirthdayByGiftCount,
    fetchBirthdayByMonth,
    fetchBirthdayByRecent,
    currentLocation.id,
    currentMonth,
    recentDate.page,
    type,
    giftCount.page,
    dataOfMonth,
    isLoadMore,
    isPage,
  ]);

  const checkToRender = () => {
    if (type === "gift") {
      let giftCountData = giftCount.data;
      giftCountData = giftCountData
        ? giftCountData.filter(
            (thing, index, self) =>
              index === self.findIndex((t) => t.id === thing.id)
          )
        : [];
      return giftCountData;
    }
    if (type === "month" && byMonth.length > 0) {
      const dataOfMonth = byMonth.find((i) => i.month === currentMonth);
      if (dataOfMonth) {
        return dataOfMonth.data;
      }
      return [];
    }
    let recentDateData = recentDate.data;
    recentDateData = recentDateData
      ? recentDateData.filter(
          (thing, index, self) =>
            index === self.findIndex((t) => t.id === thing.id)
        )
      : [];
    return recentDateData;
  };

  const _renderBirthday = () => {
    if (checkToRender() && checkToRender().length > 0) {
      return checkToRender().map((item, index) => {
        return (
          <BirthdayItem index={index} type={type} key={item.id} item={item} />
        );
      });
    }
  };

  const _renderMonth = () => {
    const months = [];

    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }

    return months.map((item) => (
      <button
        key={item}
        className={currentMonth === item ? "active" : ""}
        type="button"
        onClick={() => setCurrentMonth(item)}
      >
        {item}
      </button>
    ));
  };

  const onLoadMore = () => {
    if (isLoadMore) {
      if (type === "gift") {
        if (giftCount.page < giftCount.lastPage) {
          setBirthdayPage(type);
        }
      } else if (type === "recent" || type === "date") {
        if (recentDate.page < recentDate.lastPage) {
          setBirthdayPage(type);
        }
      }
    }
  };

  const checkToLoadMore = () => {
    if (type === "gift") {
      if (giftCount.page < giftCount.lastPage) {
        return true;
      }
      return false;
    }
    if (type === "recent" || type === "date") {
      if (recentDate.page < recentDate.lastPage) {
        return true;
      }
      return false;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleWrap}>
        <TitlePage
          containerStyle={{ marginBottom: 0 }}
          title={titleConstants.BIRTHDAY}
          icon={<MdCake className={classes.icon} />}
        />
      </div>

      <div className={classes.type}>
        <button
          className={type === "gift" ? "active" : ""}
          type="button"
          onClick={() => {
            setType("gift");
            setIsLoadMore(false);
          }}
        >
          <span>GIFT</span>
          <span className="willHidden"> COUNT</span>
        </button>
        <button
          className={type === "recent" ? "active" : ""}
          type="button"
          onClick={() => {
            setType("recent");
            setIsLoadMore(false);
          }}
        >
          <span>RECENT</span>
          <span className="willHidden"> DAYS</span>
        </button>
        <button
          className={type === "date" ? "active" : ""}
          type="button"
          onClick={() => {
            setType("date");
            setIsLoadMore(false);
          }}
        >
          <span>DATE</span>
          <span className="willHidden"> ORDER</span>
        </button>
        <button
          className={type === "month" ? "active" : ""}
          type="button"
          onClick={() => {
            setType("month");
            setIsLoadMore(false);
          }}
        >
          MONTH
        </button>
      </div>
      <div className={classes.birthdayWrap}>
        {type === "month" && (
          <div className={classes.monthWrap}>{_renderMonth()}</div>
        )}

        <InfiniteScroll
          className={`${classes.birthdayContainer} `}
          dataLength={checkToRender().length}
          next={isPage && onLoadMore}
          hasMore={isPage && checkToLoadMore()}
        >
          {_renderBirthday()}
        </InfiniteScroll>
      </div>
      {!hiddenViewMore && <ViewMoreHome link="/birthday" />}
    </div>
  );
}

Birthday.propTypes = {
  classes: PropTypes.object,
  hiddenViewMore: PropTypes.any,
  birthdayActionCreators: PropTypes.shape({
    fetchBirthdayByGiftCount: PropTypes.func,
    fetchBirthdayByRecent: PropTypes.func,
    fetchBirthdayByMonth: PropTypes.func,
    setBirthdayPage: PropTypes.func,
    setIsLoadMore: PropTypes.func,
  }),
  isPage: PropTypes.any,
  giftCount: PropTypes.object,
  currentLocation: PropTypes.object,
  recentDate: PropTypes.object,
  byMonth: PropTypes.array,
  isLoadMore: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentLocation: state.general.currentLocation,
  loading: state.general.loading,
  giftCount: state.birthday.giftCount,
  recentDate: state.birthday.recentDate,
  byMonth: state.birthday.byMonth,
  isLoadMore: state.birthday.isLoadMore,
});

const mapDispatchToProps = (dispatch) => ({
  birthdayActionCreators: bindActionCreators(birthdayActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Birthday);
