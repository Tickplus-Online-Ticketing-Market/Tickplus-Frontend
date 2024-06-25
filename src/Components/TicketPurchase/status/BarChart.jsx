import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

export default function TransactionChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const paymentsResponse = await axios.get('https://tickplus-backend.onrender.com/tpp/pays/sum-by-event');
                const refundsResponse = await axios.get('https://tickplus-backend.onrender.com/tpp/refs/sum-by-event');
                const paymentsData = paymentsResponse.data.paymentsSum;
                const refundsData = refundsResponse.data.refundsSum;
                const mergedData = mergeData(paymentsData, refundsData);
                setData(mergedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Merge payments and refunds data based on eventname
    const mergeData = (paymentsData, refundsData) => {
        const mergedData = [];
        const mergedKeys = new Set([...paymentsData.map(item => item._id), ...refundsData.map(item => item._id)]);
        mergedKeys.forEach(key => {
            const payment = paymentsData.find(item => item._id === key);
            const refund = refundsData.find(item => item._id === key);
            mergedData.push({
                eventname: key,
                Payments: payment ? payment.count : 0,
                Refunds: refund ? refund.count : 0
            });
        });
        return mergedData;
    };

    return (
        <div className="h-[22rem] bg-background p-4 rounded-sm  flex flex-col flex-1">
            <div className="mt-3 w-full flex-1 text-xs text-text font-bold">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                        <XAxis dataKey="eventname" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Payments" fill="#122128" />
                        <Bar dataKey="Refunds" fill="#ff7637" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
