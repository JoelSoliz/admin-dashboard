import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "@/components/common/header";
import { colorTokens } from "@/styles/theme";
import { invoicesColumns } from "@/data/columnsDataGrid";
import { mockDataInvoices } from "@/data/mockData";

export default function Invoices() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header title="Invoices" subtitle="List of Invoice Balances" />
            <Box
                sx={{
                    m: "40px 0 0 0",
                    height: "75vh",
                    "& .MuiDataGrid-root": { border: "none" },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                    "& .name-column--cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.blueAccent[700],
                        borderTop: "none",
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={invoicesColumns(theme.palette.mode)}
                />
            </Box>
        </Box>
    );
}
