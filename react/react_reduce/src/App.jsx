import { useState, useReducer } from "react";
import { v4 } from "uuid";
import reducer, { newProduct } from "./reducer";

function App() {
    const [states, dispatch] = useReducer(reducer, {
        product: {
            ...newProduct,
        },
        products: [],
    });

    const onInput = (e) => {
        const { name, value } = e.target;
        dispatch({ key: "product/onInput", value: { name, value } });
    };
    const onSave = () => {
        dispatch({ key: "product/onSave" });
    };
    return (
        <>
            <div>
                Tên:{" "}
                <input
                    type="text"
                    name="name"
                    onInput={onInput}
                    value={states.product.name}
                />
                <br />
                Giá:{" "}
                <input
                    type="text"
                    name="price"
                    onInput={onInput}
                    value={states.product.price}
                />
                <br />
                Mô tả:{" "}
                <input
                    type="text"
                    name="description"
                    onInput={onInput}
                    value={states.product.description}
                />
                <br />
                <button onClick={onSave}>Click</button>
            </div>
            <div>
                <table border={1}>
                    <thead>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Mô tả</th>
                    </thead>
                    <tbody>
                        {states.products.map((product) => {
                            return (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default App;

// const reducer = (state, action) => {
//     console.log(state, action);
//     if (action.key === "son") {
//         return {
//             ...state,
//             count: state.count + action.value,
//         };
//     }
//     return state;
// };

// function App() {
//     const [states, dispatch] = useReducer(reducer, { count: 0 });
//     return (
//         <>
//             <h1>Count: {states.count}</h1>
//             <button onClick={() => dispatch({ key: "son", value: 10 })}>
//                 Click
//             </button>
//         </>
//     );
// }
