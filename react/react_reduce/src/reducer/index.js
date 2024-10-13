import { v4 } from "uuid";

export const newProduct = {
    id: v4(),
    name: "",
    price: "",
    description: "",
};
const productInput = (state, action) => {
    switch (action.key) {
        case "product/onInput": {
            let product = state;
            product[action.value.name] = action.value.value;
            return product;
        }
        default:
            return newProduct;
    }
};
const productSave = (states, state, action) => {
    switch (action.key) {
        case "product/onSave": {
            let products = [...states, state];
            state = newProduct;
            return products;
        }
        default:
            return states;
    }
};
const reducer = (state, action) => {
    return {
        product: productInput(state.product, action),
        products: productSave(state.products, state.product, action),
    };
};
export default reducer;
