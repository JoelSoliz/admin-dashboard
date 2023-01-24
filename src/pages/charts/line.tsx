import { Box } from "@mui/material";
import LineChart from "@/components/charts/lineChart";
import Header from "@/components/common/header";

export default function LineChartPage() {
    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height={"75vh"}>
                <LineChart />
            </Box>
        </Box>
    );
}
