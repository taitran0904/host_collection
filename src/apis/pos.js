import request from "../commons/axiosServiceNew";

const URL_POS = "/api/pos";
const URL_SHOP_RANKING = "/api/shop-ranking";

export const fetchRevenueApi = (token, shop_id) => {
  return request({
    url: `${URL_POS}`,
    method: "GET",
    params: { shop_id, type: 'month'},
    token
  })
}
export const fetchRankingApi = (token, shop_id) => {
  return request({
    url: `${URL_SHOP_RANKING}`,
    method: "GET",
    params: { shop_id, type: 'month'},
    token
  })
}
