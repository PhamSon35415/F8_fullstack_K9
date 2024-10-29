import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProducts, inputtingProductReducer } from "../../store";
import { TableProduct } from "../../components";
import { TextField } from "@mui/material";

export default function () {
    const product = useSelector(getProducts);
    const dispatch = useDispatch();
    const onInput = (e) => {
        const { name, value } = e.target;
        dispatch(inputtingProductReducer(name, value));
    };
    const onSave = () => {
        dispatch(onSave(onInputtingJob));
    };
    const columns = [
        {
            text: "Id",
            name: "id",
        },
        {
            text: "Name",
            name: "name",
        },
        {
            text: "Image",
            name: "image",
        },
        {
            text: "",
            name: "action",
        },
    ];
    const onUpdate = (data) => {
        console.log(data);
    };
    const onDelete = (data) => {
        console.log(data);
    };
    return (
        <>
            <TextField
                className={"pt-2"}
                fullWidth
                placeholder="Name"
                name="name"
                required
                onInput={onInput}
            />
            <TableProduct
                maxWidth={1000}
                columns={columns}
                rows={product.products}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
        </>
    );
}
