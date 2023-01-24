import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "@/components/common/header";
import { colorTokens } from "@/styles/theme";
import { teamColumns } from "@/data/columnsDataGrid";
import { mockDataTeam } from "@/data/mockData";

export default function Team() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header title="Team" subtitle="Managing the Team Members" />
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
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={teamColumns(theme.palette.mode)}
                />
            </Box>
        </Box>
    );
}
