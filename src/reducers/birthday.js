import * as birthdayCts from "../constants/events/birthday";
import * as generalCts from "../constants/events/general";

const initialState = {
  birthdayCard: [],
  birthdayGift: [],
  birthdayGiftCategory: [],
  giftCount: {
    data: [],
    page: 1,
    lastPage: 1
  },
  recentDate: {
    data: [],
    page: 1,
    lastPage: 1
  },
  byMonth: [],
  donateList: {
    data: [],
    userId: null,
    page: 1,
    lastPage: 1,
    total: null,
    isLoadMore: false
  },
  donateListMyPage: {
    data: [],
    userId: null,
    page: 1,
    lastPage: 1,
    total: null,
    isLoadMore: false
  },
  currentLocation: {},
  isLoadMore: false,
  hostInfo: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case generalCts.SET_CURRENT_LOCATION: {
      const { params } = action.payload;
      const { currentLocation } = state;

      if (currentLocation.id !== params.id) {
        return {
          ...state,
          giftCount: {
            data: [],
            page: 1,
            lastPage: 1
          },
          recentDate: {
            data: [],
            page: 1,
            lastPage: 1
          },
          byMonth: [],
          currentLocation: params,
          isLoadMore: false
        };
      }
      return { ...state, currentLocation: params };
    }

    case birthdayCts.FETCH_BIRTHDAY_BY_GIFT_COUNT_SUCCESS: {
      const { current_page, data, last_page } = action.payload.data;

      let giftCountData = state.giftCount.data;
      const { giftCount } = state;

      giftCountData = giftCountData.concat(data);

      return {
        ...state,
        giftCount: {
          ...giftCount,
          data: current_page > 1 ? giftCountData : data,
          page: current_page,
          lastPage: last_page
        },
        isLoadMore: true
      };
    }

    case birthdayCts.FETCH_BIRTHDAY_BY_RECENT_SUCCESS: {
      const { current_page, data, last_page } = action.payload.data;

      let recentDateData = state.recentDate.data;

      recentDateData = recentDateData.concat(data);

      return {
        ...state,
        recentDate: {
          data: current_page > 1 ? recentDateData : data,
          page: current_page,
          lastPage: last_page
        },
        isLoadMore: true
      };
    }

    case birthdayCts.FETCH_BIRTHDAY_BY_MONTH_SUCCESS: {
      const { month, data } = action.payload.data;
      let { byMonth } = state;

      byMonth = byMonth.concat([
        {
          month,
          data: data.data,
          page: data.current_page
        }
      ]);

      return {
        ...state,
        byMonth
      };
    }

    case birthdayCts.FETCH_DONATE_LIST: {
      const { params } = action.payload;

      const prevUserId = state.donateList.userId;

      if (prevUserId && prevUserId !== params.userId && !params.isMyPage) {
        return {
          ...state,
          donateList: {
            data: [],
            userId: null,
            page: 1,
            lastPage: 1,
            isLoadMore: false
          }
        };
      }
      return state;
    }

    case birthdayCts.FETCH_DONATE_LIST_SUCCESS: {
      const { data, userId, totalMoney, isMyPage } = action.payload.data;

      if (isMyPage) {
        let donateMyPageData = state.donateListMyPage.data;

        donateMyPageData = donateMyPageData.concat(data.data);

        return {
          ...state,
          donateListMyPage: {
            data: data.current_page > 1 ? donateMyPageData : data.data,
            userId,
            page: data.current_page,
            lastPage: data.last_page,
            total: totalMoney,
            isLoadMore: true
          }
        };
      }

      let donateData = state.donateList.data;

      donateData = donateData.concat(data.data);
      return {
        ...state,
        donateList: {
          data: data.current_page > 1 ? donateData : data.data,
          userId,
          page: data.current_page,
          lastPage: data.last_page,
          total: totalMoney,
          isLoadMore: true
        }
      };
    }

    case birthdayCts.FETCH_BIRTHDAY_CARD_SUCCESS: {
      const { data, category } = action.payload.data;

      if (category === 0) {
        return {
          ...state,
          birthdayCard: data
        };
      }
      let { birthdayGift } = state;

      birthdayGift = birthdayGift.concat([{ category, data }]);

      return {
        ...state,
        birthdayGift
      };
    }

    case birthdayCts.FETCH_BIRTHDAY_GIFT_CATEGORY_SUCCESS: {
      const { data } = action.payload;

      return { ...state, birthdayGiftCategory: data };
    }

    case birthdayCts.DONATE_GIFT_SUCCESS: {
      const { data } = action.payload;

      let donateList = state.donateList.data;

      donateList = [data].concat(donateList);

      return {
        ...state,
        donateList: {
          data: donateList
        }
      };
    }

    case birthdayCts.SET_BIRTHDAY_PAGE: {
      const { type } = action.payload;
      const { isLoadMore } = state;

      if (isLoadMore) {
        if (type === "gift") {
          const { giftCount } = state;

          if (giftCount.page < giftCount.lastPage) {
            return {
              ...state,
              giftCount: {
                ...giftCount,
                page: giftCount.page + 1
              },
              isLoadMore: false
            };
          }
          return { ...state, isLoadMore: true };
        }
        if (type === "donate") {
          const { donateList } = state;

          if (donateList.page < donateList.lastPage) {
            return {
              ...state,
              donateList: {
                ...donateList,
                page: donateList.page + 1,
                isLoadMore: false
              }
            };
          }
          return {
            ...state,
            donateList: {
              ...donateList,
              isLoadMore: true
            }
          };
        }
        if (type === "birthdayMyPage") {
          const { donateListMyPage } = state;

          if (donateListMyPage.page < donateListMyPage.lastPage) {
            return {
              ...state,
              donateListMyPage: {
                ...donateListMyPage,
                page: donateListMyPage.page + 1,
                isLoadMore: false
              }
            };
          }
          return {
            ...state,
            donateListMyPage: {
              ...donateListMyPage,
              isLoadMore: true
            }
          };
        }
        const { recentDate } = state;

        if (recentDate.page < recentDate.lastPage) {
          return {
            ...state,
            recentDate: {
              ...recentDate,
              page: recentDate.page + 1
            },
            isLoadMore: false
          };
        }
        return {
          ...state,
          isLoadMore: true
        };
      }
      return state;
    }

    case birthdayCts.SET_IS_LOAD_MORE: {
      const { type } = action.payload;
      const { donateList } = state;

      if (type === "donate") {
        return {
          ...state,
          donateList: {
            ...donateList,
            isLoadMore: false
          }
        };
      }

      return {
        ...state,
        isLoadMore: false
      };
    }

    case birthdayCts.GET_HOST_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        hostInfo: data
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
