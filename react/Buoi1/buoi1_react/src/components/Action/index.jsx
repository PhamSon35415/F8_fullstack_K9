import Swal from "sweetalert2";

export const onSave = async (url, data, method) => {
    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        await reload();
        onClose();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Lưu thành công",
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

function Action() {
    return <></>;
}
export default Action;
