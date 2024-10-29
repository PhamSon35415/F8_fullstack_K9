import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import IconButton from "@mui/material/IconButton";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
function ListJob({ states, onDone }) {
    console.log(states);

    return (
        <>
            {/* <Box sx={{ bgcolor: "gray", p: 2, borderRadius: 1 }}> */}
            <List sx={{ width: "100%", bgcolor: "#d8d8d8" }}>
                {states.map((value) => (
                    <ListItem
                        sx={{
                            backgroundColor:
                                value.status === 0 ? "red" : "#10d410",
                            color: "white",
                            marginBottom: 1,
                            paddingInline: 3,
                        }}
                        key={value.id}
                        secondaryAction={
                            <IconButton
                                onClick={() => {
                                    onDone(
                                        value.id,
                                        value.status === 1 ? 0 : 1
                                    );
                                }}
                            >
                                {value.status === 1 ? (
                                    <AssignmentTurnedInIcon
                                        sx={{
                                            fontSize: "2rem",
                                        }}
                                    />
                                ) : (
                                    <DisabledByDefaultIcon
                                        sx={{
                                            fontSize: "2rem",
                                        }}
                                    />
                                )}
                            </IconButton>
                        }
                    >
                        <ListItemText
                            sx={{
                                width: "200px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            primary={value.content}
                        />
                    </ListItem>
                ))}
            </List>
            {/* </Box> */}
        </>
    );
}
export default ListJob;
