import * as posConstants from "../constants/events/pos";
import { message } from 'antd';

const initialState = {
  revenue: {},
  ranking: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case posConstants.FETCH_REVENUE: {
      return { ...state }
    }
    case posConstants.FETCH_REVENUE_SUCCESS: {
      const { data } = action.payload

      return {
        ...state,
        revenue: data
      }
    }
    case posConstants.FETCH_REVENUE_FAILED: {
      const { errors } = action.payload
      message.error(errors.message)
    }

    case posConstants.FETCH_RANKING: {
      return { ...state }
    }
    case posConstants.FETCH_RANKING_SUCCESS: {
      const { data } = action.payload

      return {
        ...state,
        ranking: data
      }
    }
    case posConstants.FETCH_RANKING_FAILED: {
      const { errors } = action.payload
      message.error(errors.message)
    }

    default :
      return state
  }
}

export default reducer;
