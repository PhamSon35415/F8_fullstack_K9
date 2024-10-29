import React from "react";
import {
    TableContainer,
    Table,
    Paper,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TableProduct = ({ columns, rows, maxWidth, onUpdate, onDelete }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell>{column.text}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => {
                            return (
                                <TableRow key={`${index}`}>
                                    {columns.map((column) => {
                                        if (column.name === "action") {
                                            return (
                                                <TableCell
                                                    key={`${index}${column.name}`}
                                                >
                                                    <EditIcon
                                                        onClick={() =>
                                                            onUpdate(row)
                                                        }
                                                        sx={{ color: "green" }}
                                                    />
                                                    <DeleteOutlineIcon
                                                        onClick={() =>
                                                            onDelete(row.id)
                                                        }
                                                        sx={{ color: "red" }}
                                                    />
                                                </TableCell>
                                            );
                                        }
                                        return (
                                            <TableCell
                                                key={`${index}${column.name}`}
                                            >
                                                {row[column.name]}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TableProduct;
