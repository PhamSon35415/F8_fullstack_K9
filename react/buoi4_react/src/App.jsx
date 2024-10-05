import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import Grand from "./components/Grand";
import { provider } from "./utils";
function App() {
    const [products, setProducts] = useState([]);
    const getProduct = async () => {
        try {
            const { data } = await axios.get(
                "https://api-exercise-sopi.vercel.app/api/v1/products"
            );
            setProducts(data.data.listProduct);
            console.log(data);
        } catch (error) {
            console.log(e);
        }
    };
    useEffect(() => {
        getProduct();
    }, []);
    return (
        <>
            <ul>
                {products.map((product) => {
                    return <li key={product.id}>{product.name}</li>;
                })}
            </ul>

            {/* <provider.Provider value={{ ok: "ok", kks: "ok" }}>
                <Grand />
            </provider.Provider> */}
        </>
    );
}

export default App;
