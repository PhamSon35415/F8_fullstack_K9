import { v4 } from "uuid";
import { initState } from "..";

const productsSave = (state, action) => {
    switch (action.type) {
        case "products/save":
            return {
                ...state,
                products: [...state, state.product],
                inputtingProducts: {
                    ...initState.inputtingProduct,
                },
            };
        default:
            return state;
    }
};
const inputtingProduct = (state, action) => {
    switch (action.type) {
        case "inputtingProduct/name/update":
            const product = { ...state };
            product.name = action.payload;
            return product;
        case "inputtingProduct/image/update":
            const productimage = { ...state };
            productimage.image = action.payload;
            return product;

        default:
            return state;
    }
};
export { productsSave, inputtingProduct };
