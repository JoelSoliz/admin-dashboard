import { colorTokens } from "@/styles/theme";
import { Box, Typography, useTheme } from "@mui/material";

interface HeaderProps {
    title: string;
    subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box>
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
}
