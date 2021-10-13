import * as shopConstants from '../constants/events/shop';
import * as titleConstants from '../constants/ui/myPage';
import { errorToast, successToast } from '../commons/AlertHelper';

const initialState = {
  shopList: [],
  shopItemEditing: {},
  activeStatus: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case shopConstants.FETCH_SHOP_LIST: {
      return {
        ...state,
        shopList: []
      };
    }
    case shopConstants.FETCH_SHOP_LIST_SUCCESS: {
      const { data } = action.payload;
      data.sort((a, b) => b.id - a.id);
      return {
        ...state,
        shopList: data
      };
    }
    case shopConstants.FETCH_SHOP_LIST_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.FETCH_SHOP_LIST_FAILED_MESSAGE, "top-center");
      }
      return { ...state };
    }

    case shopConstants.GET_ONE_SHOP_LIST: {
      return { ...state };
    }
    case shopConstants.GET_ONE_SHOP_LIST_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        shopItemEditing: data
      };
    }
    case shopConstants.GET_ONE_SHOP_LIST_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.FETCH_SHOP_LIST_FAILED_MESSAGE, "top-center");
      }
      return { ...state };
    }
    case shopConstants.UPDATE_SHOP_ITEM: {
      return { ...state };
    }
    case shopConstants.UPDATE_SHOP_ITEM_SUCCESS: {
      successToast(titleConstants.UPDATE_SHOP_ITEM_SUCCESS_MESSAGE);
      return {
        ...state,
        shopItemEditing: {}
      };
    }
    case shopConstants.UPDATE_SHOP_ITEM_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.UPDATE_SHOP_ITEM_FAILED_MESSAGE, "top-center");
      }
      return { ...state };
    }

    case shopConstants.CREATE_SHOP_ITEM: {
      return { ...state };
    }
    case shopConstants.CREATE_SHOP_ITEM_SUCCESS: {
      successToast(titleConstants.CREATE_SHOP_ITEM_SUCCESS_MESSAGE, "top-center");
      return { ...state };
    }
    case shopConstants.CREATE_SHOP_ITEM_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.CREATE_SHOP_ITEM_FAILED_MESSAGE, "top-center");
      }
      return { ...state };
    }

    case shopConstants.DELETE_SHOP_ITEM: {
      return { ...state };
    }
    case shopConstants.DELETE_SHOP_ITEM_SUCCESS: {
      const { data } = action.payload;
      const newData = state.shopList.filter(item => item.id !== data.id);
      successToast(titleConstants.CREATE_SHOP_ITEM_SUCCESS_MESSAGE, "top-center");
      return {
        ...state,
        shopList: newData
      };
    }
    case shopConstants.DELETE_SHOP_ITEM_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-center");
      } else {
        errorToast(titleConstants.CREATE_SHOP_ITEM_FAILED_MESSAGE, "top-center");
      }
      return { ...state };
    }

    case shopConstants.ACTIVE_STATUS: {
      return { ...state };
    }
    case shopConstants.ACTIVE_STATUS_SUCCESS: {
      const { data } = action.payload;
      // successToast(titleConstants.ACTIVE_STATUS_SHOP_SUCCESS_MESSAGE, "top-right");
      return {
        ...state,
        activeStatus: data
      };
    }
    case shopConstants.ACTIVE_STATUS_FAILED: {
      const { error } = action.payload;
      if (error.message === "Network Error") {
        errorToast("Network disconnected", "top-right");
      }
      // else {
      //   errorToast(titleConstants.ACTIVE_STATUS_SHOP_FAILED_MESSAGE, "top-right");
      // }
      return { ...state };
    }

    default: return state;
  }
};


export default reducer;
