import {
  LOAD_STATUS_FULFILLED,
  LOAD_STATUS_PENDING,
  LOAD_STATUS_REJECTED,
} from "./contants";

const initialState = {
  status: [],
  error: null,
  loading: false,
};

export const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STATUS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_STATUS_FULFILLED:
      return {
        ...state,
        loading: false,
        status: action.payload,
      };
    case LOAD_STATUS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loadStatus = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_STATUS_PENDING });
      const response = await fetch(
        "http://135.181.39.55:15551/list/fetch_status_groups_filter",
        {
          headers: {
            Authorization: "9cedeae-9496-4a25-af06-5a2af2b15567",
            Fingerprint: "admin fingerprint",
          },
        }
      );
      const json = await response.json();

      dispatch({ type: LOAD_STATUS_FULFILLED, payload: json });
    } catch (e) {
      dispatch({ type: LOAD_STATUS_REJECTED, payload: e.toString() });
    }
  };
};

export const selectStatus = (state) => state.status.status;
