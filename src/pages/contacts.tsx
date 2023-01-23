import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "@/components/common/header";
import { colorTokens } from "@/styles/theme";
import { contactColumns } from "@/data/columnsDataGrid";
import { mockDataContacts } from "@/data/mockData";

export default function Contacts() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header
                title="Contacts"
                subtitle="List of Contacts for Future Reference"
            />
            <Box
                sx={{
                    m: "40px 0 0 0",
                    height: "75vh",
                    "& .MuiDataGrid-root": { border: "none" },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                    "& .name-column--cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.bluAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.bluAccent[700],
                        borderTop: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={contactColumns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
}
