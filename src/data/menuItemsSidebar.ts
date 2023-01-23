// chart Menu Items Icons
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// Data Menu Items Icons
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// Pages Menu Items Icons
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

export const menuSections = [
    {
        name: "Data",
        items: [
            {
                title: "Manage Team",
                to: "/team",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Contacts Information",
                to: "/contacts",
                icon: ContactsOutlinedIcon,
            },
            {
                title: "Invoices Balances",
                to: "/invoices",
                icon: ReceiptOutlinedIcon,
            },
        ],
    },
    {
        name: "Pages",
        items: [
            {
                title: "Profile Form",
                to: "/form",
                icon: PersonOutlinedIcon,
            },
            {
                title: "Calendar",
                to: "/calendar",
                icon: CalendarTodayOutlinedIcon,
            },
            {
                title: "FAQ Page",
                to: "/faq",
                icon: HelpOutlinedIcon,
            },
        ],
    },
    {
        name: "Charts",
        items: [
            {
                title: "Bar Chart",
                to: "/charts/bar",
                icon: BarChartOutlinedIcon,
            },
            {
                title: "Pie Chart",
                to: "/charts/pie",
                icon: PieChartOutlineOutlinedIcon,
            },
            {
                title: "Line Chart",
                to: "/charts/line",
                icon: TimelineOutlinedIcon,
            },
            {
                title: "Geography Chart",
                to: "/charts/geography",
                icon: MapOutlinedIcon,
            },
        ],
    },
];
