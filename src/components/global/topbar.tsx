import { useContext } from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, colorTokens } from "@/styles/theme";

export default function TopBar() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: colors.primary[400],
                    borderRadius: "3px",
                }}
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: "flex" }}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
