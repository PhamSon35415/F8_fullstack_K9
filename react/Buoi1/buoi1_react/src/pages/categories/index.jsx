import { useState, useEffect } from "react";
import { FCommonTable, CategoryDialog } from "../../components";

export default function () {
    const [showDialog, setShowDialog] = useState(false);
    const [categories, setCategories] = useState([]);
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
            text: "Order Number",
            name: "orderNum",
        },
        {
            text: "",
            name: "action",
        },
    ];
    const getCategories = async () => {
        const reponse = await fetch("http://localhost:3000/categories");
        setCategories(await reponse.json());
    };
    useEffect(() => {
        getCategories();
    }, []);

    const onUpdate = (categories) => {
        setShowDialog(true);
    };

    const onCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <>
            <span>products</span>
            <FCommonTable
                maxWidth={1000}
                columns={columns}
                rows={categories}
                onUpdate={onUpdate}
            />
            <CategoryDialog
                show={showDialog}
                onClose={onCloseDialog}
                width={600}
                reload={getCategories}
            />
        </>
    );
}
