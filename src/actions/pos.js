import * as posConstants from "../constants/events/pos"

export const fetchRevenue = (params) => ({
  type: posConstants.FETCH_REVENUE,
  payload: { params }
})
export const fetchRevenueSuccess = (data) => ({
  type: posConstants.FETCH_REVENUE_SUCCESS,
  payload: { data }
})
export const fetchRevenueFailed = (errors) => ({
  type: posConstants.FETCH_REVENUE_FAILED,
  payload: { errors }
})

export const fetchRanking = (params) => ({
  type: posConstants.FETCH_RANKING,
  payload: { params }
})
export const fetchRankingSuccess = (data) => ({
  type: posConstants.FETCH_RANKING_SUCCESS,
  payload: { data }
})
export const fetchRankingFailed = (errors) => ({
  type: posConstants.FETCH_RANKING_FAILED,
  payload: { errors }
})
