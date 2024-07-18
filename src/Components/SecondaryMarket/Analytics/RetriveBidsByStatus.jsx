import { toast } from 'react-toastify'
import axios from 'axios'

export async function RetriveBidsByStatus() {
    try {
        const res = await axios.get('https://tickplus-backend.onrender.com/secondary-market/analytics/bids-bystatus')
        console.log(res)
        return res.data.bidsStatusCounts
    } catch (error) {
        toast.error('Cannot Connect to Database')
        return []
    }
}
