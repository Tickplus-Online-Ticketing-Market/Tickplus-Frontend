import { toast } from 'react-toastify'
import axios from 'axios'

export async function RetriveAuctionListingsByStatus() {
    try {
        const res = await axios.get(
            'https://tickplus-backend.onrender.com/secondary-market/analytics/auctions-bystatus'
        )
        console.log(res)
        return res.data.auctionStatusCounts
    } catch (error) {
        toast.error('Cannot Connect to Database')
        return []
    }
}
