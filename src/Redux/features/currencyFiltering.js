import {
  LOAD_CURRENCY_FULFILLED,
  LOAD_CURRENCY_PENDING,
  LOAD_CURRENCY_REJECTED,
} from "./contants";

const initialState = {
  currency: [],
  error: null,
  loading: false,
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENCY_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_CURRENCY_FULFILLED:
      return {
        ...state,
        loading: false,
        currency: action.payload,
      };
    case LOAD_CURRENCY_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loadCurrency = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_CURRENCY_PENDING });
      const response = await fetch(
        "http://135.181.39.55:15551/list/fetch_currency_list",
        {
          headers: {
            Authorization: "19cedeae-9496-4a25-af06-5a2af2b15567",
            Fingerprint: "admin fingerprint",
          },
        }
      );

      const json = await response.json();

      dispatch({ type: LOAD_CURRENCY_FULFILLED, payload: json });
    } catch (e) {
      dispatch({ type: LOAD_CURRENCY_REJECTED, payload: e.toString() });
    }
  };
};

export const selectCurrency = (state) => state.currency.currency;
