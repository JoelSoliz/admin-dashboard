import { Box, Typography } from "@mui/material";
import { GridColumns } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { colorTokens } from "@/styles/theme";
import { Mode } from "@/utils/types";

export const teamColumns = (mode: Mode): GridColumns => {
    const colors = colorTokens(mode);

    return [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        {
            field: "access",
            headerName: "Role",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        sx={{
                            width: "60%",
                            m: "0 auto",
                            p: "5px",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor:
                                access === "admin"
                                    ? colors.greenAccent[600]
                                    : colors.greenAccent[700],
                            borderRadius: "4px",
                        }}
                    >
                        {access === "admin" && (
                            <AdminPanelSettingsOutlinedIcon />
                        )}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];
};

export const contactColumns: GridColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
];

export const invoicesColumns = (mode: Mode): GridColumns => {
    const colors = colorTokens(mode);

    return [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: ({ row: { cost } }) => (
                <Typography color={colors.greenAccent[500]}>${cost}</Typography>
            ),
        },
        { field: "date", headerName: "Date", flex: 1 },
    ];
};
