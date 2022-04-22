import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import GroupIcon from '@mui/icons-material/Group';
// import PermMediaIcon from '@mui/icons-material/PermMedia';
import HistoryIcon from '@mui/icons-material/History';
import ListAltIcon from '@mui/icons-material/ListAlt';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link:"/home"
    },
    {
        title: "Mailbox",
        icon: <MailIcon />,
        link:"/mailbox"
    },
    {
        title: "Analytics",
        icon: <AssessmentIcon />,
        link:"/analytics"
    },
    {
        title: "History",
        icon: <HistoryIcon />,
        link:"/history"
    },
    {
        title: "To-Do List",
        icon: <ListAltIcon />,
        link:"/todo"
    },
];

