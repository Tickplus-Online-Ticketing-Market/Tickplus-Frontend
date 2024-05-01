import { FaShoppingCart } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { MdFreeCancellation } from "react-icons/md";
import { HiReceiptRefund } from "react-icons/hi2";
import { MdContactSupport } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'wishlist',
		label: 'Wishlist',
		path: '/',
		icon: <FaShoppingCart />
	},
	{
		key: 'mytransactions',
		label: 'My Tickets',
		path: '/mt',
		icon: <IoTicketSharp />

	},
	{
		key: 'cancellations',
		label: 'Cancellations',
		path: '/can',
		icon: <MdFreeCancellation />
	},
	{
		key: 'refundrequests',
		label: 'Refund Requests',
		path: '/rr',
		icon: <HiReceiptRefund />
	},
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	
    {
		key: 'home',
		label: 'Home',
		path: '/home',
		icon: <IoHome />

	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <MdContactSupport />
	},
    {
		key: 'logout',
		label: 'Log out',
		path: '/Login',
		icon: <RiLogoutBoxRFill />
	}
]