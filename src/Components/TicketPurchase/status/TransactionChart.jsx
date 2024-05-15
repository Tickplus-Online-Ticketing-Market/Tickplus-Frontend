import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'MegaBlast',
		Purchase: 4000,
		Refunds: 2400,
        
	},
    {
		name: 'MegaBlast',
		Purchase: 4000,
		Refunds: 2400
	},
    {
		name: 'MegaBlast',
		Purchase: 4000,
		Refunds: 2400
	},
    {
		name: 'MegaBlast',
		Purchase: 4000,
		Refunds: 2400
	},
    {
		name: 'MegaBlast',
		Purchase: 4000,
		Refunds: 2400
	},
	

]

export default function TransactionChart() {
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
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Purchase" fill="#122128" />
						<Bar dataKey="Refunds" fill="#ff7637" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}