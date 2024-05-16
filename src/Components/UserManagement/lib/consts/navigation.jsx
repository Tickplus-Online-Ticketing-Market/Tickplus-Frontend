import {
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiUserGroup,
	HiUser,
	HiCollection,
	HiTicket ,
	HiCash ,
	HiAnnotation,
	HiChartBar,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'artists',
		label: 'Artists',
		path: '/',
		icon: <HiUserGroup />
	},
	{
		key: 'organizers',
		label: 'Organizers',
		path: '/organizers',
		icon: <HiUserGroup />
	},
	{
		key: 'Spectators',
		label: 'Spectators',
		path: '/Spectator',
		icon: <HiUserGroup />
	},
	{
		key: 'Sponsor',
		label: 'Sponsorship Agent',
		path: '/Sponsor',
		icon: <HiUserGroup />
	},
	{
		key: 'consultants',
		label: 'Consultants',
		path: '/consultants',
		icon: <HiUserGroup />
	},
	
]

export const DASHBOARD_SIDEBARUSER_LINKS = [
	{
		key: 'Userprofile',
		label: 'User Profile',
		path: '/userprofile',
		icon: <HiUser />
	},
	{
		key: 'Myevents',
		label: 'My Events',
		path: '/myevents',
		icon: <HiCollection />
	},
	{
		key: 'Mytickets',
		label: 'My Tickets',
		path: '/mytickets',
		icon: <HiTicket   />
	},
	{
		key: 'Consultancyservice',
		label: 'Consultancy Service',
		path: '/consultancyservice',
		icon: <HiUserGroup  />
	},
	{
		key: 'Transaction',
		label: 'Transaction',
		path: '/transaction',
		icon: <HiCash  />
	},
	{
		key: 'Communitypage',
		label: 'Community Page',
		path: '/communitypage',
		icon: <HiAnnotation  />
	},
	{
		key: 'Secondarymarket',
		label: 'Secondary Market',
		path: '/secondarymarket',
		icon: <HiChartBar  />
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
	}
]