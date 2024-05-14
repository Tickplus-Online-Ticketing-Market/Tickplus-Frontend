import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Layout from './Components/TicketPurchase/shared/Layout';
import ExploreTickets from './Components/TicketPurchase/ExploreTickets';
import Wishlist from './Components/TicketPurchase/Wishlist';
import MyTransactions from './Components/TicketPurchase/MyTransactions';
import RefundRequests from './Components/TicketPurchase/RefundRequests';
import FinanceStatus from './Components/TicketPurchase/FinanceStatus';



function App() {
  return (
    <Router>

        <Routes>

            <Route path="/ticket-purchase" element={<Layout/>}>
              <Route index element={<ExploreTickets/>}/>
              <Route path="/ticket-purchase/wishlist" element={<Wishlist/>}/>
              <Route path="/ticket-purchase/my-transactions" element={<MyTransactions/>}/>
              <Route path="/ticket-purchase/refund-request" element={<RefundRequests/>}/>
              <Route path="/ticket-purchase/stat" element={<FinanceStatus/>}/>
            </Route>
            <Route path="fs" element={<FinanceStatus/>}></Route>

        </Routes>
        
    </Router>
  );
}

export default App;

