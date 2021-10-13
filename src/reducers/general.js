import * as generalConstants from "../constants/events/general";
import * as message from "../constants/ui/aside";
import { errorToast } from "../commons/AlertHelper";

const initialState = {
  locations: [],
  banners: [],
  generalInfo: [],
  fileUploads: [],
  aside: false,
  currentLocation: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case generalConstants.SHOW_ASIDE: {
      return {
        ...state,
        aside: true
      };
    }
    case generalConstants.HIDE_ASIDE: {
      return {
        ...state,
        aside: false
      };
    }

    case generalConstants.FETCH_LOCATION: {
      return {
        ...state,
        locations: []
      };
    }
    case generalConstants.FETCH_LOCATION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        locations: data
      };
    }
    case generalConstants.FETCH_LOCATION_FAILED: {
      errorToast(message.FETCH_LOCATION_FAILED_MESSAGE);
      return {
        ...state,
        locations: []
      };
    }
    case generalConstants.FETCH_BANNER_ASIDE: {
      return {
        ...state,
        banners: []
      };
    }
    case generalConstants.FETCH_BANNER_ASIDE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        banners: data
      };
    }
    case generalConstants.FETCH_BANNER_ASIDE_FAILED: {
      errorToast(message.FETCH_BANNER_ASIDE_FAILED_MESSAGE);
      return {
        ...state,
        banners: []
      };
    }
    case generalConstants.FETCH_GENERAL_INFORMATION: {
      return {
        ...state,
        generalInfo: []
      };
    }
    case generalConstants.FETCH_GENERAL_INFORMATION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        generalInfo: data
      };
    }
    case generalConstants.FETCH_GENERAL_INFORMATION_FAILED: {
      errorToast(message.FETCH_GENERAL_INFO_FAILED_MESSAGE);
      return {
        ...state,
        generalInfo: []
      };
    }

    case generalConstants.SET_CURRENT_LOCATION: {
      const { params } = action.payload;

      return {
        ...state,
        currentLocation: params
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
