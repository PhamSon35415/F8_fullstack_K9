import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import { Categories, Products } from "./Page";
import { Box, Button, AppBar, Toolbar } from "@mui/material";

function App() {
    return (
        <>
            <AppBar position="static" color="primary">
                <Box sx={{ flexGrow: 1 }}>
                    <Button
                        component={Link}
                        to="/"
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                            },
                        }}
                    >
                        Trang chủ
                    </Button>
                    <Button
                        component={Link}
                        to="/categories"
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                            },
                        }}
                    >
                        Danh mục
                    </Button>
                    <Button
                        component={Link}
                        to="/products"
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                            },
                        }}
                    >
                        Sản phẩm
                    </Button>
                </Box>
            </AppBar>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
