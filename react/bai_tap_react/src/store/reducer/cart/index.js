import { v4 } from "uuid";
import { initState } from "..";

const cartsSave = (state, action) => {
    switch (action.type) {
        case "carts/save":
            return {
                ...state,
                carts: [...state, state.cart],
                inputtingCart: {
                    ...initState.inputtingCart,
                },
            };
        default:
            return state;
    }
};
const inputtingCart = (state, action) => {
    switch (action.type) {
        case "carts/inputtingCart":
            return {
                ...state,
                inputtingCarts: {
                    ...state,
                    name: action.payload,
                },
            };

        default:
            return state;
    }
};
export { cartsSave, inputtingCart };
