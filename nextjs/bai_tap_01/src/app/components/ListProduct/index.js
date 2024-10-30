import { Grid2 } from "@mui/material";
import { Product } from "..";
import Grid from "@mui/material/Grid2";
export default function ({ products }) {
    return (
        <Grid2
            key={865443}
            container
            spacing={2}
            columns={{ xs: 3, sm: 6, md: 12 }}
            sx={{ padding: 2, justifyContent: "center", flexWrap: "wrap" }}
        >
            {products.map((product, index) => (
                <Product product={product} key={index} />
            ))}
        </Grid2>
    );
}
