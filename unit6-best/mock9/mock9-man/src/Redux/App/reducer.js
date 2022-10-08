import * as types from "./actionTypes";

const initState = {
  data: [],
  cartData: [],
  limit: 1,
  isLoading: false,
  error: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_RESTAURANTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.GET_RESTAURANTS_SUCCESS: {
      // console.log(payload)
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        limit: payload.totalPages,
      };
    }

    case types.GET_RESTAURANTS_FAILURE: {
      return {
        ...state,
        error: payload,
      };
    }

    case types.GET_CART_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartData: payload,
      };
    }

    case types.GET_CART_ITEMS_FAILURE: {
      return {
        ...state,
        error: payload,
      };
    }

    case types.FILTER_TYPE: {
      return {
        ...state,
        data: payload.data,
      };
    }

    case types.SORT_ASC_RATING: {
      return {
        ...state,
        data: payload.data,
      };
    }

    case types.SORT_DESC_RATING: {
      return {
        ...state,
        data: payload.data,
      };
    }

    case types.SORT_ASC_PRICE: {
      return {
        ...state,
        data: payload.data,
      };
    }

    case types.SORT_DESC_PRICE: {
      return {
        ...state,
        data: payload.data,
      };
    }

    case types.NEXT_PAGE: {
      return {
        ...state,
        data: payload.data,
      };
    }

    case types.PREV_PAGE: {
      return {
        ...state,
        data: payload.data,
      };
    }

    case types.FILTER_SORT: {
      return {
        ...state,
        data: payload.data,
      };
    }

    case types.FILTER_PAGINATION: {
      return {
        ...state,
        data: payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
