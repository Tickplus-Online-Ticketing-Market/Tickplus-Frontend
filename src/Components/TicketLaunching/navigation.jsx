
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
		path: '/ticket-launching',
		icon: <HiOutlineTicket />
	},
	{
		key: 'createtickets',
		label: 'Create Tickets',
		path: '/ticket-launching/create-tickets',
		icon: <HiOutlineFolderAdd />
	},
	{
		key: 'viewtickets',
		label: 'View Tickets',
		path: '/ticket-launching/view-tickets',
		icon: <HiOutlineNewspaper />
	},
	{
		key: 'ticketpublishedhistory',
		label: 'Ticket Published History',
		path: '/ticket-launching/Ticket-history',
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
