import { useDispatch, useSelector } from "react-redux";
import { getSearchStr, onInputSearchStr } from "../../store";

export default function () {
    const dispatch = useDispatch();
    const searchStr = useSelector(getSearchStr);
    const onInput = (e) => {
        dispatch(onInputSearchStr(e.target.value));
    };
    return (
        <>
            <input
                value={searchStr}
                type="text"
                name="search"
                onInput={onInput}
                placeholder="Search"
            />
        </>
    );
}
