import React from "react";
import { RingLoader } from "react-spinners";

const LoadingSpinner = ({ loading, size = 55, color = "#1976d2" }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100px",
            }}
        >
            <RingLoader color={color} loading={loading} size={size} />
        </div>
    );
};

export default LoadingSpinner;
