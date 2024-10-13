import { useReducer } from "react";
import reducer, { resetJob } from "./components/reducer";
import ListJob from "./components/jop";
import FormInput from "./components/from/index";
import { Container, Typography } from "@mui/material";
import Swal from "sweetalert2";

function App() {
    const [states, dispatch] = useReducer(reducer, {
        job: {
            ...resetJob,
        },
        jobs: [],
    });
    const onInput = (e) => {
        const { name, value } = e.target;
        dispatch({ key: "job/onInput", value: { name, value } });
    };
    const onSave = () => {
        dispatch({ key: "job/onSave" });
    };
    const onDone = (id, status) => {
        // console.log(id, status);
        let title = "Đã làm xong công việc ?";
        let btnText = "Xong rồi!";
        if (status === 0) {
            title = "Chưa làm ?";
            btnText = "Chưa xong!";
        }
        Swal.fire({
            title: title,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: btnText,
            cancelButtonText: "Thoát",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ key: "job/onDone", value: { id, status } });
            }
        });
    };
    return (
        <>
            <Container
                maxWidth="sm"
                sx={{
                    mt: 4,
                    backgroundColor: "#d8d8d8",
                    p: 10,
                    borderRadius: 10,
                }}
            >
                <Typography
                    level="h1"
                    sx={{ textAlign: "center", fontSize: 30 }}
                >
                    Todo app
                </Typography>
                <FormInput onInput={onInput} onSave={onSave} job={states.job} />
                <ListJob states={states.jobs} onDone={onDone} />
            </Container>
        </>
    );
}

export default App;
