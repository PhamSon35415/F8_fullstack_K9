import { useContext } from "react";
import { provider } from "../../utils";

export default function () {
    const conText = useContext(provider);
    console.log(conText);

    return (
        <>
            <span>Child</span>
        </>
    );
}
