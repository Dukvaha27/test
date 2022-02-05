const initialState = {
  order: [],
  error: null,
  loading: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const fetchAdmin = (tagId, statusId, typeId, currencyId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://135.181.39.55:15551/order/fetch_admin_orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "19cedeae-9496-4a25-af06-5a2af2b15567",
            Fingerprint: "user fingerprint",
          },
          body: JSON.stringify({
            publicID: null,
            timeFrom: null,
            timeTo: null,
            currencyID: currencyId,
            operationTypeID: typeId,
            nearAmount: null,
            limit: 10000,
            offset: 0,
            currencyFromID: null,
            currencyToID: null,
            walletID: null,
            userID: null,
            statusGroupList: tagId,
            toChangeStatusGroupID: statusId,
            userPrivateName: null,
            orderBy: null,
          }),
        }
      );
      const json = await response.json();

      dispatch({ type: "fetch/admin/fulfilled", payload: json });
    } catch (e) {
      console.log(`error request :${e.toString()}`);
    }
  };
};
