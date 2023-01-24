import { Box } from "@mui/material";
import BarChart from "@/components/charts/barChart";
import Header from "@/components/common/header";

export default function BarChartPage() {
    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height={"75vh"}>
                <BarChart />
            </Box>
        </Box>
    );
}
