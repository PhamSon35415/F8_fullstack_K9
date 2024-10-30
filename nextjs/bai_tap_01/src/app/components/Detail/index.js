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
            <Card
                sx={{
                    textAlign: "center",
                    padding: 1,
                    width: "60%",
                    display: "flex",
                }}
            >
                <CardMedia
                    sx={{
                        objectFit: "cover",
                        objectPosition: "bottom",
                    }}
                    component="img"
                    height="350"
                    image={product.image}
                    alt={product.name}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                    }}
                >
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
                        <Typography variant="body1">
                            Mô tả: {product.description}
                        </Typography>
                    </CardContent>

                    <div style={{ height: "50px" }}>
                        <Button
                            variant="contained"
                            color="success"
                            size="small"
                            href={`/products/${product.id}`}
                        >
                            Mua ngay
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            href={`/products/${product.id}`}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </div>
            </Card>
            {/* </Grid2> */}
        </>
    );
}
