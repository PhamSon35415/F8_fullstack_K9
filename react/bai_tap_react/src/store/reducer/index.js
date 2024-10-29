import { v4 } from "uuid";
import { inputtingProduct, productsSave } from "./product";
import { cartsSave, inputtingCart } from "./cart";

export const initState = {
    products: [
        { id: 1, name: "ok", image: ["ijkk", "okk"] },
        { id: 2, name: "ok", image: ["ijkk", "okk"] },
        { id: 3, name: "ok", image: ["ijkk", "okk"] },
        { id: 4, name: "ok", image: ["ijkk", "okk"] },
    ],
    carts: [],
    inputtingProduct: {
        id: v4(),
        name: "",
        imageUrl: [],
    },
    inputtingCart: {
        productId: 0,
        quantity: 0,
    },
};
const reducer = (state = initState, action) => {
    return {
        products: productsSave(state, action),
        carts: cartsSave(state, action),
        inputtingCart: inputtingCart(state.inputtingCart, action),
        inputtingProduct: inputtingProduct(state.inputtingProduct, action),
    };
};
export default reducer;
