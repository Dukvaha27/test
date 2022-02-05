import {
  LOAD_TYPE_FULFILLED,
  LOAD_TYPE_PENDING,
  LOAD_TYPE_REJECTED,
} from "./contants";

const initialState = {
  operationType: [],
  error: null,
  loading: false,
};

export const operationTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TYPE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_TYPE_FULFILLED:
      return {
        ...state,
        loading: false,
        operationType: action.payload,
      };
    case LOAD_TYPE_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loadOperationType = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_TYPE_PENDING });
      const response = await fetch(
        "http://135.181.39.55:15551/list/fetch_operation_type_list",
        {
          headers: {
            Authorization: "19cedeae-9496-4a25-af06-5a2af2b15567",
            Fingerprint: "admin fingerprint",
          },
        }
      );
      const json = await response.json();
      dispatch({ type: LOAD_TYPE_FULFILLED, payload: json });
    } catch (e) {
      dispatch({ type: LOAD_TYPE_REJECTED, payload: e.toString() });
    }
  };
};

export const selectOperationType = (state) => state.operationType.operationType;
