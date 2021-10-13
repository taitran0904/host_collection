import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { Modal, Backdrop, Fade, Tab, Tabs, AppBar, Box } from "@mui/material";
import PropTypes from "prop-types";
import { MdViewModule, MdViewList, MdClose } from "react-icons/md";
import { GIFT_LIST, SELECT_GIFT } from "../../../constants/ui/homepage";
import styles from "./styles";
import GiftItem from "../GiftItem";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

function GiftModal(props) {
  const {
    classes,
    open,
    setOpen,
    selected,
    setSelected,
    imgPicked,
    setImgPicked,
    type,
    birthdayGiftCategory,
    fetchBirthdayCard,
    birthdayCard,
    birthdayGift,
    giftSelected,
    setGiftSelected,
    imgGiftPicked,
    setImgGiftPicked,
  } = props;
  const [value, setValue] = useState(0);
  const [view, setView] = useState("image");

  useEffect(() => {
    if (type === "gift" && birthdayGiftCategory.length > 0) {
      const cateFound = birthdayGiftCategory.find(
        (i, index) => index === value
      );

      const found = birthdayGift.find((i) => i.category === cateFound.id);

      if (!found) {
        fetchBirthdayCard({ type: 2, category: cateFound.id });
      }
    }
  }, [birthdayGift, fetchBirthdayCard, type, value, birthdayGiftCategory]);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const _renderGift = (id) => {
    let birthdayGiftFound = [];

    const found = birthdayGift.find((i) => i.category === id);
    if (found) {
      birthdayGiftFound = found.data;
    } else {
      birthdayGiftFound = birthdayCard;
    }

    if (birthdayGiftFound && birthdayGiftFound.length > 0) {
      return birthdayGiftFound.map((item) => (
        <GiftItem
          key={item.id}
          item={item}
          type={type}
          view={view}
          selected={selected}
          setSelected={setSelected}
          giftSelected={giftSelected}
          setGiftSelected={setGiftSelected}
        />
      ));
    }
  };

  const _renderTabItem = () => {
    if (birthdayGiftCategory.length > 0) {
      return birthdayGiftCategory.map((item, index) => (
        <Tab
          key={item.id}
          className={`${classes.tabItem} ${value === index ? `active` : ""}`}
          label={item.name}
          {...a11yProps(index)}
        />
      ));
    }
  };

  const _renderTabPane = () => {
    if (birthdayGiftCategory.length > 0) {
      return birthdayGiftCategory.map((item, index) => {
        return (
          <TabPanel
            key={item.id}
            className={classes.tabPanel}
            value={value}
            index={index}
          >
            {_renderGift(item.id)}
          </TabPanel>
        );
      });
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => {
        setOpen(false);
        if (type === "gift") {
          setImgGiftPicked(imgGiftPicked);
        } else {
          setImgPicked(imgPicked);
        }
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.modalContent}>
          <div className={classes.header}>
            <div className="left">
              <h4>{type === "gift" ? GIFT_LIST : "CARD LIST"}</h4>
              {type === "gift" && (
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
              )}
            </div>
            <button
              className="right"
              type="button"
              onClick={() => {
                setOpen(false);
                if (type === "gift") {
                  setImgGiftPicked(imgGiftPicked);
                } else {
                  setImgPicked(imgPicked);
                }
              }}
            >
              <MdClose />
            </button>
          </div>
          {type === "gift" ? (
            <>
              <AppBar
                position="static"
                color="default"
                className={classes.tabBar}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  classes={{ indicator: classes.indicator }}
                >
                  {_renderTabItem()}
                </Tabs>
              </AppBar>
              {_renderTabPane()}
            </>
          ) : (
            <div className={classes.cardWrap}>{_renderGift(birthdayCard)}</div>
          )}
          <button
            className={classes.submit}
            type="button"
            onClick={() => {
              setOpen(false);
              if (type === "gift") {
                setImgGiftPicked(giftSelected);
              } else {
                setImgPicked(selected);
              }
            }}
          >
            {type === "gift" ? SELECT_GIFT : "SELECT CARD"}
          </button>
        </div>
      </Fade>
    </Modal>
  );
}

GiftModal.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  selected: PropTypes.object,
  setSelected: PropTypes.func,
  lists: PropTypes.array,
  imgPicked: PropTypes.object,
  setImgPicked: PropTypes.func,
  type: PropTypes.string,
  birthdayGiftCategory: PropTypes.array,
  fetchBirthdayCard: PropTypes.func,
  birthdayCard: PropTypes.array,
  birthdayGift: PropTypes.array,
  giftSelected: PropTypes.object,
  setGiftSelected: PropTypes.func,
  imgGiftPicked: PropTypes.object,
  setImgGiftPicked: PropTypes.func,
};

export default withStyles(styles)(GiftModal);
