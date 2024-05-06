import {
	HiOutlineMusicNote,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
} from 'react-icons/hi'

import { HiOutlineUserPlus } from "react-icons/hi2";

import { MdHistory } from "react-icons/md";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'Discover Events',
		label: 'Discover Events',
		path: '/sponsorship-management',
		icon: <HiOutlineMusicNote />
	},
	{
		key: 'Request History',
		label: 'Request History',
		path: '/sponsorship-management/request-history',
		icon: <MdHistory />
	},
	{
		key: 'Sponsor Requests',
		label: 'Sponsor Requests',
		path: '/sponsorship-management/sponsor-requests',
		icon: <HiOutlineUserPlus />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
	
]