import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import renderTextField from "../../../commons/FormHelper/TextField";
import renderSelectField from "../../../commons/FormHelper/SelectField";
import TitleChild from "../../../components/TitleChild";
import * as titleConstants from "../../../constants/ui/myPage";
import styles from "./styles";

const bloodOptions = [
  { id: "", name: "" },
  { id: "tokyo", name: "Tokyo" },
  { id: "osaka", name: "Osaka" },
  { id: "kyoto", name: "Kyoto" },
  { id: "nagasaki", name: "Nagasaki" },
];

function ShopCreateManager(props) {
  const { classes, handleSubmit } = props;

  const onSubmitProfile = (data) => {
    console.log(data);
  };

  const renderBloodOptions = (bloodOptions) => {
    let result;
    if (bloodOptions.length > 0) {
      result = bloodOptions.map((option) => {
        return (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        );
      });
    }
    return result;
  };

  return (
    <div className={classes.container}>
      <TitleChild titleChild={titleConstants.CREATE_NEW_MANAGER} />
      <form onSubmit={handleSubmit(onSubmitProfile)}>
        <div className={classes.textField}>
          <Field
            label={titleConstants.SELECT_MEMBER}
            name="selectMember"
            component={renderTextField}
            margin="normal"
            fullWidth
            placeholder="Hello"
          />
        </div>
        <div className={classes.textField}>
          <Field
            label={titleConstants.SELECT_SHOP}
            name="selectShop"
            component={renderSelectField}
            option={renderBloodOptions(bloodOptions)}
            fullWidth
          />
        </div>
        <div className={classes.buttonGroup}>
          <button type="submit">{titleConstants.CREATE}</button>
          <NavLink to="/my-page/shop-management">{titleConstants.BACK}</NavLink>
        </div>
      </form>
    </div>
  );
}

const withReduxForm = reduxForm({
  form: titleConstants.CREATE_NEW_MANAGER_FORM_NAME,
  enableReinitialize: true,
});

ShopCreateManager.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default compose(withStyles(styles), withReduxForm)(ShopCreateManager);
