import { Autocomplete, Button, TextField } from "@mui/material";
import { useContext } from "react";
import AppContext from "../../store";
const options = [{ name: "High" }, { name: "Medium" }, { name: "Low" }];
export default function () {
    const { state, dispatch } = useContext(AppContext);
    const onSave = () => {
        dispatch({ type: "jobs/save", payload: state.inputtingJob });
    };
    return (
        <>
            <TextField
                label={"Name"}
                value={state.inputtingJob.name}
                fullWidth
                onInput={(e) => {
                    dispatch({
                        type: "inputtingJob/name/update",
                        payload: e.target.value,
                    });
                }}
            />
            <Autocomplete
                fullWidth
                // value={state.inputtingJob.priority}
                disablePortal
                getOptionLabel={(option) => option.name}
                onChange={(e, newValue) => {
                    dispatch({
                        type: "inputtingJob/priority/update",
                        payload: newValue.name,
                    });
                }}
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Priority" />
                )}
            />
            <Button variant="outlined" onClick={onSave}>
                Save
            </Button>
        </>
    );
}
