import * as titleConstants from '../../../constants/ui/myPage';

const validate = values => {
  const errors = {};
  const { shopName } = values;
  if (!shopName) {
    errors.shopName = titleConstants.SHOP_NAME_VALIDATE;
  }
  return errors;
};

export default validate;
