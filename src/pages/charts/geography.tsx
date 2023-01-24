import { Box, useTheme } from "@mui/material";
import GeographyChart from "@/components/charts/geographyChart";
import Header from "@/components/common/header";
import { colorTokens } from "@/styles/theme";

export default function GeographyChartPage() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header title="Geography Chart" subtitle="Simple Geography Chart" />
            <Box
                height={"75vh"}
                sx={{
                    border: `1px solid ${colors.grey[100]}`,
                    borderRadius: "4px",
                }}
            >
                <GeographyChart />
            </Box>
        </Box>
    );
}
