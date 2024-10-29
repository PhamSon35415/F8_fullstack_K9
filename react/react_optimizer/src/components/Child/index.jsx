import { memo } from "react";

export default memo(function ({ func }) {
    console.log("child");

    return (
        <>
            <span>Check {func()}</span>
        </>
    );
});
