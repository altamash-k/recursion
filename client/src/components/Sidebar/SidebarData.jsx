import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PermMediaIcon from '@mui/icons-material/PermMedia';

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
        title: "Dashboard",
        icon: <DashboardIcon />,
        link:"/dashboard"
    },
    {
        title: "Friends",
        icon: <GroupIcon />,
        link:"/friends"
    },
    {
        title: "Images",
        icon: <PermMediaIcon />,
        link:"/images"
    }
];

