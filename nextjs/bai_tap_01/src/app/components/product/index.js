import {
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Grid2,
} from "@mui/material";

import Link from "next/link";
export default function ({ product }) {
    return (
        <>
            <Grid2 key={product.id} size={{ xs: 4, sm: 4, md: 4 }}>
                <Card sx={{ textAlign: "center", padding: 1 }}>
                    <CardMedia
                        sx={{
                            objectFit: "cover",
                            objectPosition: "bottom",
                        }}
                        component="img"
                        height="200"
                        image={product.image}
                        alt={product.name}
                    />
                    <CardContent>
                        <Typography variant="body1">{product.name}</Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ textDecoration: "line-through" }}
                        >
                            Giá cũ: {product.oldPrice}
                        </Typography>
                        <Typography variant="h7" color="error">
                            Giá khuyến mại :{product.newPrice}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <Link
                            variant="outlined"
                            size="small"
                            href={`/products/${product.id}`}
                        >
                            Mua ngay
                        </Link>
                    </CardActions>
                </Card>
            </Grid2>
        </>
    );
}
