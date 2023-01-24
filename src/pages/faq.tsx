import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
    useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "@/components/common/header";
import { colorTokens } from "@/styles/theme";
import { mockDataFAQ } from "@/data/mockData";

export default function FAQ() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Box
                sx={{
                    mt: "10px",
                    maxHeight: "75vh",
                    overflow: "auto",
                    overflowY: "hidden",
                    "&:hover": {
                        overflowY: "visible",
                    },
                }}
            >
                {mockDataFAQ.map((faq, i) => (
                    <Accordion key={i} defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant="h5"
                            >
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
}
