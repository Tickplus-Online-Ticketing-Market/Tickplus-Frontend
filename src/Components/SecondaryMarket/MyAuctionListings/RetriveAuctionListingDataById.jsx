import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export function RetriveAuctionListingsDataById(auctionID) {
    const [auctionListings, setAuctionListings] = useState(null)

    useEffect(() => {
        fetchAuctionListings()
    }, [auctionID])

    const fetchAuctionListings = async () => {
        try {
            const res = await axios.get(
                `https://tickplus-backend.onrender.com/secondary-market/my-auction-listings/${auctionID}`
            )
            setAuctionListings(res.data.auctionListing)
        } catch (error) {
            toast.error('Cannot Connect to Database')
            setAuctionListings([])
        }
    }

    return auctionListings || [] // Return an empty array if data is not yet fetched
}
