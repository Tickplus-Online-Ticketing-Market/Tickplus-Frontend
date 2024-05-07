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

            <Route path="/" element={<Layout/>}>
              <Route index element={<ExploreTickets/>}/>
              <Route path="w" element={<Wishlist/>}/>
              <Route path="mt" element={<MyTransactions/>}/>
              <Route path="rr" element={<RefundRequests/>}/>
              <Route path="fs" element={<FinanceStatus/>}/>
            </Route>
            

            <Route path="fs" element={<FinanceStatus/>}></Route>

        </Routes>
        
    </Router>
  );
}

export default App;

