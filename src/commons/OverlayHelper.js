import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as generalActions from "../actions/general";

function OverlayHepler(props) {
  const { aside, generalActionCreators } = props;

  const { hideAside } = generalActionCreators;

  const styles = {
    background: "rgba(0, 0, 0, .4)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
    width: "100%",
    height: "100%",
    display: aside ? "block" : "none",
  };

  return <div style={styles} onClick={() => hideAside()} />;
}

OverlayHepler.propTypes = {
  generalActionCreators: PropTypes.shape({
    hideAside: PropTypes.func,
  }),
  aside: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  aside: state.general.aside,
});

const mapDispatchToProps = (dispatch) => {
  return {
    generalActionCreators: bindActionCreators(generalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(OverlayHepler);
