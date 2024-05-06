
import {
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineTicket,
	HiOutlineFolderAdd,
	HiOutlineNewspaper,
	HiOutlineSearchCircle,
	
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'mytickets',
		label: 'My Tickets',
		path: '/',
		icon: <HiOutlineTicket />
	},
	{
		key: 'createtickets',
		label: 'Create Tickets',
		path: '/Createtickets',
		icon: <HiOutlineFolderAdd />
	},
	{
		key: 'viewtickets',
		label: 'View Tickets',
		path: '/Viewtickets',
		icon: <HiOutlineNewspaper />
	},
	{
		key: 'ticketpublishedhistory',
		label: 'Ticket Published History',
		path: '/Ticketphistory',
		icon: <HiOutlineSearchCircle />
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
