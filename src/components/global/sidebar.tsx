import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { menuSections } from "@/data/menuItemsSidebar";
import { colorTokens } from "@/styles/theme";
import "react-pro-sidebar/dist/css/styles.css";

interface ItemProps {
    title: string;
    to: string;
    icon: ReactNode;
}

const Item = ({ title, to, icon }: ItemProps) => {
    const router = useRouter();
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <MenuItem
            active={router.asPath === to}
            style={{ color: colors.grey[100] }}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link href={to} />
        </MenuItem>
    );
};

export default function Sidebar() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    backgroundColor: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    ml: "15px",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    color={colors.grey[100]}
                                >
                                    ADMINS
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                        <Box sx={{ mb: "25px" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    alt="profile-user"
                                    width={100}
                                    height={100}
                                    src=""
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                    }}
                                />
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Joel Soliz
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    VP Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                        />
                        {menuSections.map((section) => (
                            <div key={section.name}>
                                <Typography
                                    variant="h6"
                                    color={colors.grey[300]}
                                    sx={{ m: "15px 0 5px 20px" }}
                                >
                                    {section.name}
                                </Typography>
                                {section.items.map((item) => (
                                    <Item
                                        key={item.to}
                                        title={item.title}
                                        to={item.to}
                                        icon={<item.icon />}
                                    />
                                ))}
                            </div>
                        ))}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}
