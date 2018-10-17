// import assignWith from "lodash/assignWith";
// import isUndefined from "lodash/isUndefined";
// import unionBy from "lodash/unionBy";
// import find from "lodash/find";
// import findIndex from "lodash/findIndex";
// import orderBy from "lodash/orderBy";
import * as actions from "../action/woocommerce-action";
import { generateUUID } from "../utils";

const initialState = {
  products: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case actions.getProducts.SUCCESS:
      return {
        ...state
        // selected: find(action.payload, state.products)
      };
  }

  return state;
}
