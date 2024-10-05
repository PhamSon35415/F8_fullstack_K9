import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();
    const goToProducts = () => {
        navigate("/products");
    };
    const goToCategory = () => {
        navigate("/categories");
    };

    return (
        <>
            <Button onClick={goToProducts}>products</Button>
            <Button onClick={goToCategory}>categories</Button>
        </>
    );
}
