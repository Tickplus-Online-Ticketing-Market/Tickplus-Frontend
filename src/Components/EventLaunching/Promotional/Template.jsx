// import React, { useRef } from 'react';
// import { HiLocationMarker, HiClock, HiCalendar } from 'react-icons/hi';
// import { IoPerson, IoTicket } from 'react-icons/io5';
// import {toPng} from 'html-to-image';

// function Template() {
//   const templateRef = useRef(null);

//   const downloadTemplate = () => {
//     const node =templateRef.current;

//     toPng(templateRef.current,{cacheBust:true,height:1000})
//     .then(dataUrl =>{
//         console.log("Captured Image:",dataUrl);


//         const Link= document.createElement("a");
//         Link.download ="my_name_image.png";
//         Link.href=dataUrl;
//         Link.click();
    
//     })
//     .catch(error =>{
//         console.error("Error capturing screenshot:",error);

//     });
//   };

//   return (
//     <div>
//       <div
//         ref={templateRef}
//         className="flex items-center bg-cyan-950 p-2 rounded-xl h-[17rem] w-[full] mb-4">
//         <div className="flex-1 py-4 flex flex-col gap-0.5">
//           <p className="text-center text-white" style={{ fontSize: '16px', marginTop: '18px' }}>
//             Event Name
//           </p>
//           <p className="text-white mb-4" style={{ fontSize: '14px' }}>
//             Event Description: Event Description Event Description Event Description
//           </p>
//           <div className="flex items-center">
//             <HiCalendar size={26} style={{ color: 'white' }} />
//             <p className="text-white ml-6" style={{ fontSize: '14px' }}>
//               Event Date
//             </p>
//           </div>
//           <div className="flex items-center">
//             <HiClock size={26} style={{ color: 'white' }} />
//             <p className="text-white ml-6" style={{ fontSize: '14px' }}>
//               Event Time
//             </p>
//           </div>
//           <div className="flex items-center">
//             <HiLocationMarker size={26} style={{ color: 'white' }} />
//             <p className="text-white ml-6" style={{ fontSize: '14px' }}>
//               Event Venue
//             </p>
//           </div>
//           <div className="flex items-center">
//             <IoPerson size={26} style={{ color: 'white' }} />
//             <p className="text-white ml-6" style={{ fontSize: '14px' }}>
//               Event Artist
//             </p>
//           </div>
//           <div className="flex items-center">
//             <IoTicket size={26} style={{ color: 'white' }} />
//             <p className="text-white ml-6" style={{ fontSize: '14px' }}>
//               Event Ticket
//             </p>
//           </div>
//           <button
//             onClick={downloadTemplate}
//             className="bg-gray-700 text-white  px-4 py-2 rounded-md ml-4"
//             style={{ fontSize: '10px' }} >
//             Download Template
//           </button>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Template;
import React, { useRef, useState } from 'react';
import { HiLocationMarker, HiClock, HiCalendar } from 'react-icons/hi';
import { IoPerson, IoTicket } from 'react-icons/io5';
import { toPng } from 'html-to-image';

function Template() {
  const templateRef = useRef(null);
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventArtist, setEventArtist] = useState('');
  const [eventTicketRange, setEventTicketRange] = useState('');
  const [downloadCount, setDownloadCount] = useState(0);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };
  const handleEventDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };
  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };
  const handleEventTimeChange = (e) => {
    setEventTime(e.target.value);
  };
  const handleEventVenueChange = (e) => {
    setEventVenue(e.target.value);
  };
  const handleEventArtistChange = (e) => {
    setEventArtist(e.target.value);
  };
  const handleEventTicketRangeChange = (e) => {
    setEventTicketRange(e.target.value);
  };

  const downloadTemplate = () => {
    toPng(templateRef.current, { cacheBust: true, height: 1000 })
      .then(dataUrl => {
        console.log("Captured Image:", dataUrl);

        const link = document.createElement("a");
        link.download = "template.png";
        link.href = dataUrl;
        link.click();

        setDownloadCount(prevCount => prevCount + 1); // Update download count
      })
      .catch(error => {
        console.error("Error capturing screenshot:", error);
      });
  };

  return (
    <div>
      <div
        ref={templateRef}
        className="flex items-center bg-cyan-200 p-2 rounded-xl h-[30rem] w-[30rem] mb-4"
      >
        <div className="flex-1 py-4 flex flex-col gap-0.5">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              value={eventName}
              onChange={handleEventNameChange}
              placeholder="Event Name"
              className="text-white bg-transparent border-b border-white focus:outline-none focus:border-blue-500"
              style={{ width: '300px' }}
            />
            <input
              type="text"
              value={eventDescription}
              onChange={handleEventDescriptionChange}
              placeholder="Event Description"
              className="text-white bg-transparent border-b border-white focus:outline-none focus:border-blue-500"
              style={{ width: '300px' }}
            />
            <input
              type="text"
              value={eventDate}
              onChange={handleEventDateChange}
              placeholder="Event Date"
              className="text-white bg-transparent border-b border-white focus:outline-none focus:border-blue-500"
              style={{ width: '300px' }}
            />
            <input
              type="text"
              value={eventTime}
              onChange={handleEventTimeChange}
              placeholder="Event Time"
              className="text-white bg-transparent border-b border-white focus:outline-none focus:border-blue-500"
              style={{ width: '300px' }}
            />
            <input
              type="text"
              value={eventVenue}
              onChange={handleEventVenueChange}
              placeholder="Event Venue"
              className="text-white bg-transparent border-b border-white focus:outline-none focus:border-blue-500"
              style={{ width: '300px' }}
            />
            <input
              type="text"
              value={eventArtist}
              onChange={handleEventArtistChange}
              placeholder="Event Artist"
              className="text-white bg-transparent border-b border-white focus:outline-none focus:border-blue-500"
              style={{ width: '300px' }}
            />
            <input
              type="text"
              value={eventTicketRange}
              onChange={handleEventTicketRangeChange}
              placeholder="Event Ticket Range"
              className="text-white bg-transparent border-b border-white focus:outline-none focus:border-blue-500"
              style={{ width: '300px' }}
            />
          </div>

          <div className="flex items-center p-2 rounded-xl h-[30rem] mb-4" style={{ backgroundColor: '#ADD8E6', width: '310px' }}>

          <p style={{ fontSize: '16px', marginTop: '18px', color: 'white', marginLeft: '150px' }}>
           {eventName}
           </p>

          <p className="text-white mb-4" style={{ fontSize: '14px'  , color: 'white'}}>
            {eventDescription}
          </p>

            <p style={{ fontSize: '16px', marginTop: '18px', color: 'white', marginLeft: '25px' }}>
              <HiLocationMarker size={24} className="mr-2" />
              {eventVenue}
            </p>
            <p style={{ fontSize: '16px', marginTop: '18px', color: 'white', marginLeft: '25px' }}>
              <HiClock size={24} className="mr-2" />
              {eventTime}
            </p>
            <p style={{ fontSize: '16px', marginTop: '18px', color: 'white', marginLeft: '25px' }}>
              <HiCalendar size={24} className="mr-2" />
              {eventDate}
            </p>
            <p style={{ fontSize: '16px', marginTop: '18px', color: 'white', marginLeft: '25px' }}>
              <IoPerson size={24} className="mr-2" />
              {eventArtist}
            </p>
            <p style={{ fontSize: '16px', marginTop: '18px', color: 'white', marginLeft: '25px' }}>
              <IoTicket size={24} className="mr-2" />
              {eventTicketRange}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p className="text-white" style={{ fontSize: '14px', color: 'white' }}>
              Downloaded {downloadCount} times
            </p>
          </div>

          <button
            onClick={downloadTemplate}
            className="bg-gray-700 text-white px-4 py-2 rounded-md ml-4"
            style={{ fontSize: '10px' }}
          >
            Download Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default Template;
