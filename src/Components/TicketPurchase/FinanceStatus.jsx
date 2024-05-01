import React, { useState, useEffect } from 'react';
import Grid from './status/Grid';
import ViewBTC from './models/financeStatusModels/ViewBTC';
import ConfirmBTC from './models/financeStatusModels/ConfirmBTC';
import RejectBTC from './models/financeStatusModels/RejectBTC';
import ConfirmRefund from './models/financeStatusModels/ConfirmRefund';
import RejectRefund from './models/financeStatusModels/RejectRefund';

export default function FinanceStatus() {

const[showMyModel10, setShowMyModel10] = useState(false)
const handleOnClose10 = ()=>setShowMyModel10(false)

const[showMyModel11, setShowMyModel11] = useState(false)
const handleOnClose11 = ()=>setShowMyModel11(false)

const[showMyModel12, setShowMyModel12] = useState(false)
const handleOnClose12 = ()=>setShowMyModel12(false)

const[showMyModel13, setShowMyModel13] = useState(false)
const handleOnClose13 = ()=>setShowMyModel13(false)

const[showMyModel14, setShowMyModel14] = useState(false)
const handleOnClose14 = ()=>setShowMyModel14(false)





const [loading, setLoading] = useState(true);
useEffect(() => {
    
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000);
  
  return () => clearTimeout(timer);
  }, []);

  return (
    <div className=''>
    <div style={{ transform: loading ? 'translateY(100%)' : 'translateY(0)', transition: 'transform 0.5s ease-in-out' }}>
      <div className='relative'>
      <div className=''>
        <span className='text-3xl bg-background text-primary flex justify-center mt-[2rem] mb-[2rem] rounded-lg'>Bank Transfers Confirmations</span>
        <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5 mb-10">
          <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
            <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Time/Date
                </th>
                <th scope="col" className="px-6 py-3">
          
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-text">
                <th scope="row" className="px-6 py-4 font-xl text-background">
                  123456
                </th>
                <td className="px-6 py-3 text-background">
                  Crescendo
                </td>
                <td className="px-6 py-4 text-background">
                  55555-55555
                </td>
                <td className="px-6 py-4 text-background">
                  20:00 12/03/24
                </td>
                <td className="px-6 py-4 text-primary items-center">
                  <button type="button" onClick={()=>setShowMyModel10(true)} className='bg-primary text-background h-[3rem] w-[5rem] rounded hover:scale-95 transition text-xl mr-1'>View</button>
                  <button type="button" onClick={()=>setShowMyModel11(true)} className="bg-background text-accent h-[3rem] w-[5rem] rounded hover:scale-95 transition text-xl mr-1">Confirm</button>
                  <button type="button" onClick={()=>setShowMyModel12(true)} className="bg-accent text-background h-[3rem] w-[5rem] rounded hover:scale-95 transition text-xl ">Reject</button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>

        <span className='text-3xl bg-background text-primary flex justify-center mt-[5rem] mb-[2rem]'>Refund Requests</span>
        <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
          <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
            <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Reason
                </th>
                <th scope="col" className="px-6 py-3">
                  Refund Amount
                </th>
                <th scope="col" className="px-6 py-3">
          
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-text">
                <th scope="row" className="px-6 py-4 font-xl text-background">
                  123456
                </th>
                <td className="px-6 py-3 text-background">
                  5555-5555
                </td>
                <td className="px-6 py-4 text-background">
                  Emergency Absence
                </td>
                <td className="px-6 py-4 text-background">
                  10000LKR
                </td>
                <td className="px-6 py-4 text-primary items-center">
                  <button type="button" onClick={()=>setShowMyModel13(true)} className="bg-background text-accent h-[3rem] w-[5rem] rounded hover:scale-95 transition text-xl mr-1">Confirm</button>
                  <button type="button" onClick={()=>setShowMyModel14(true)} className="bg-accent text-background h-[3rem] w-[5rem] rounded hover:scale-95 transition text-xl ">Reject</button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <Grid />
      </div>
    </div>
    <ViewBTC onClose={handleOnClose10} visible={showMyModel10}/>
    <ConfirmBTC onClose={handleOnClose11} visible={showMyModel11}/>
    <RejectBTC onClose={handleOnClose12} visible={showMyModel12}/>
    <ConfirmRefund onClose={handleOnClose13} visible={showMyModel13}/>
    <RejectRefund onClose={handleOnClose14} visible={showMyModel14}/>
  </div>
  );
}
