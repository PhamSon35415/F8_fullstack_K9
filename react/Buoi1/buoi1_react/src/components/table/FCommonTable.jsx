export default function FCommonTable({
    rows,
    columns,
    onEditUser,
    onDeleteUser,
}) {
    return (
        <>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {columns.map((column) => {
                                if (column === "action") {
                                    return (
                                        <td key={`${index}${column}`}>
                                            <button
                                                class="edit-btn"
                                                onClick={() =>
                                                    onEditUser(row.id)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    onDeleteUser(row.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    );
                                }
                                return (
                                    <td key={`${index}${column}`}>
                                        {row[column]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
