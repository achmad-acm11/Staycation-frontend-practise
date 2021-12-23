import { CHECKOUT_BOOKING } from "store/types";

const initialState = null;

export default function checkout(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;

    default:
      return state;
  }
}
