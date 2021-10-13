import * as shopConstants from '../constants/events/shop';

export const fetchShopList = () => ({
  type: shopConstants.FETCH_SHOP_LIST
});

export const fetchShopListSuccess = data => ({
  type: shopConstants.FETCH_SHOP_LIST_SUCCESS,
  payload: { data }
});

export const fetchShopListFailed = error => ({
  type: shopConstants.FETCH_SHOP_LIST_FAILED,
  payload: { error }
});

export const getOneShopList = id => ({
  type: shopConstants.GET_ONE_SHOP_LIST,
  payload: { id }
});

export const getOneShopListSuccess = data => ({
  type: shopConstants.GET_ONE_SHOP_LIST_SUCCESS,
  payload: { data }
});

export const getOneShopListFailed = error => ({
  type: shopConstants.GET_ONE_SHOP_LIST_FAILED,
  payload: { error }
});

export const uploadAvatarShopSuccess = data => ({
  type: shopConstants.UPLOAD_AVATAR_SHOP_SUCCESS,
  payload: { data }
});

export const updateShopItem = (history, params = {}) => ({
  type: shopConstants.UPDATE_SHOP_ITEM,
  payload: { history, params }
});

export const updateShopItemSuccess = data => ({
  type: shopConstants.UPDATE_SHOP_ITEM_SUCCESS,
  payload: { data }
});

export const updateShopItemFailed = error => ({
  type: shopConstants.UPDATE_SHOP_ITEM_FAILED,
  payload: { error }
});

export const createShopItem = (history, params = {}) => ({
  type: shopConstants.CREATE_SHOP_ITEM,
  payload: { history, params }
});

export const createShopItemSuccess = data => ({
  type: shopConstants.CREATE_SHOP_ITEM_SUCCESS,
  payload: { data }
});

export const createShopItemFailed = error => ({
  type: shopConstants.CREATE_SHOP_ITEM_FAILED,
  payload: { error }
});

export const deleteShopItem = id => ({
  type: shopConstants.DELETE_SHOP_ITEM,
  payload: { id }
});

export const deleteShopItemSuccess = data => ({
  type: shopConstants.DELETE_SHOP_ITEM_SUCCESS,
  payload: { data }
});

export const deleteShopItemFailed = error => ({
  type: shopConstants.DELETE_SHOP_ITEM_FAILED,
  payload: { error }
});

// ------------ACTIVE STATUS SHOP-----------

export const activeStatus = (data) => ({
  type: shopConstants.ACTIVE_STATUS,
  payload: { data }
})

export const activeStatusSuccess = data => ({
  type: shopConstants.ACTIVE_STATUS_SUCCESS,
  payload: { data }
})

export const activeStatusFailed = error => ({
  type: shopConstants.ACTIVE_STATUS_FAILED,
  payload: { error }
})
