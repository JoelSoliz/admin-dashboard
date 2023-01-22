import { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { colorTokens } from "@/styles/theme";
import "react-pro-sidebar/dist/css/styles.css";
import Image from "next/image";

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
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                        />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlinedIcon />}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}
