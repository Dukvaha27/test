import {
  LOAD_TAGS_FULFILLED,
  LOAD_TAGS_PENDING,
  LOAD_TAGS_REJECTED,
} from "./contants";

const initialState = {
  tags: [],
  loading: false,
  error: null,
};

export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TAGS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_TAGS_FULFILLED:
      return {
        ...state,
        loading: false,
        tags: action.payload,
      };
    case LOAD_TAGS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loadTags = () => {
  return async (dispatch) => {
    dispatch({ type: LOAD_TAGS_PENDING });
    try {
      const response = await fetch(
        "http://135.181.39.55:15551/list/fetch_status_groups_filter",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "19cedeae-9496-4a25-af06-5a2af2b15567",
            Fingerprint: "user fingerprint",
          },
        }
      );
      const json = await response.json();

      dispatch({ type: LOAD_TAGS_FULFILLED, payload: json });
    } catch (e) {
      dispatch({ type: LOAD_TAGS_REJECTED, payload: e.toString() });
    }
  };
};

export const selectTags = (state) => state.tags.tags;
