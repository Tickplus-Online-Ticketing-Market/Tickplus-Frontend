import React from 'react'
import Layout from '../Components/TicketPurchase/shared/Layout'
import ExploreTickets from '../Components/TicketPurchase/ExploreTickets'
import Wishlist from '../Components/TicketPurchase/Wishlist'
import MyTransactions from '../Components/TicketPurchase/MyTransactions'
import RefundRequest from '../Components/TicketPurchase/RefundRequests'

const ticketPurchaseRoutes = [
    {
        path: '/ticket-purchase',
        element: <Layout />,
        children: [
            {
                path: '/ticket-purchase',
                element: <ExploreTickets />
            },
            {
                path: '/ticket-purchase/wishlist',
                element: <Wishlist />
            },
            {
                path: '/ticket-purchase/my-transactions',
                element: <MyTransactions />
            },
            {
                path: '/ticket-purchase/refund-request',
                element: <RefundRequest />
            }
        ]
    }
]

export default ticketPurchaseRoutes
