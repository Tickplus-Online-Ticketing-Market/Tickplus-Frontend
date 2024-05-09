// import React from 'react';
// import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: "Total No of events", event: 4 },
//   { name: "Total No of default template usage", event: 4 },
//   { name: "Total No of custom template usage", event: 7 },
  
// ];

// function Chart() {
//   return (
//     <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
//       <div className="w-full mt-3 flex-1 text-sm">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 20,
//               right: 10,
//               left: -10,
//               bottom: 0
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="No_of_spectators" fill="#CC5500" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default Chart;

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total No of events',
    Number: 10,
   
  },
  {
    name: 'Default template usage',
    Number: 4,
    
  },
  {
    name: 'Custom template usage ',
    Number: 6,
    
  },
  
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
             <Legend />
          <Bar dataKey="Number" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
