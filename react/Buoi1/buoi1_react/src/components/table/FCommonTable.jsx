import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function FCommonTable({
    rows,
    columns,
    onDelete,
    maxWidth,
    onUpdate,
}) {
    return (
        <>
            <TableContainer
                component={Paper}
                sx={{ maxWidth: maxWidth, margin: "0 auto" }}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    width={column?.width}
                                    key={column.name}
                                >
                                    {column.text}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                {columns.map((column) => {
                                    if (column.name === "action") {
                                        return (
                                            <TableCell
                                                key={`${index}${column.name}`}
                                            >
                                                <button
                                                    class="edit-btn"
                                                    onClick={() =>
                                                        onUpdate(row)
                                                    }
                                                >
                                                    <EditIcon
                                                        className={"ma-2"}
                                                        sx={{
                                                            color: "blue",
                                                        }}
                                                    />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        onDelete(row)
                                                    }
                                                >
                                                    <DeleteIcon
                                                        className={"ma-2"}
                                                        sx={{
                                                            color: "red",
                                                        }}
                                                    />
                                                </button>
                                            </TableCell>
                                        );
                                    }
                                    return (
                                        <TableCell key={`${index}${column}`}>
                                            {row[column.name]}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
