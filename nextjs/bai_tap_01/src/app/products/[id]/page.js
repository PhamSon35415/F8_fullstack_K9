import { Detail } from "@/app/components";
import { products } from "../page";

export default async function ({ params }) {
    const x = await params;
    console.log(products);
    const product = products.find((product) => product.id === x.id);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Detail product={product} />
        </div>
    );
}
