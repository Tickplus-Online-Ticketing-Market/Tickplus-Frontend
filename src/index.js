import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import homePageRoutes from './Routes/HomePageRoutes'
import UserManagementRoutes from './Routes/UserManagementRoutes'
import secondaryMarketRoutes from './Routes/SecondaryMarketRoutes'
import ticketLaunchingRoutes from './Routes/TicketLaunchingRoutes'
import CommunityPageRoutes from './Routes/CommunityPageRoutes'
import SponsorshipManagementRoutes from './Routes/SponsorshipManagementRoutes'
import DigitalCustomizationRoutes from './Routes/DigitalCustomizationRoutes'

const allRoutes = [
    ...homePageRoutes,
    ...UserManagementRoutes,
    ...secondaryMarketRoutes,
    ...ticketLaunchingRoutes,
    ...CommunityPageRoutes,
    ...SponsorshipManagementRoutes,
    ...DigitalCustomizationRoutes
]
const router = createBrowserRouter(allRoutes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
