import { Box } from "@mui/material";
import PieChart from "@/components/charts/pieChart";
import Header from "@/components/common/header";

export default function PieChartPage() {
    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height={"75vh"}>
                <PieChart />
            </Box>
        </Box>
    );
}
