const inputtingCartReducer = (name, payload) => {
    return {
        type: `inputtingCart/${name}/update`,
        payload: payload,
    };
};
const inputtingProductReducer = (name, payload) => {
    return {
        type: `inputtingProduct/${name}/update`,
        payload: payload,
    };
};
const cartsReducer = (payload) => {
    return {
        type: `carts/save`,
        payload: payload,
    };
};
const productsReducer = (payload) => {
    return {
        type: `products/save`,
        payload: payload,
    };
};
export {
    inputtingCartReducer,
    inputtingProductReducer,
    cartsReducer,
    productsReducer,
};
