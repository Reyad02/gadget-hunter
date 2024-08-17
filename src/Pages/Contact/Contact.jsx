// import { FaMapLocationDot } from "react-icons/fa6";
// import { MdOutlineWifiCalling3 } from "react-icons/md";
// import { MdOutlineMail } from "react-icons/md";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'; // Ensure you import the CSS
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { Helmet } from "react-helmet-async";



// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
//                 publicKey: import.meta.env.VITE_PUBLIC_KEY,
//             })
//             .then(
//                 () => {
//                     console.log('SUCCESS!');
//                 },
//                 (error) => {
//                     console.log('FAILED...', error.text);
//                 },
//             );
//     };
//     return (
//         <div>
//             <Helmet>
//                 <title>Ticket Pro - Contact</title>
//             </Helmet>
        
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                     <div className="border rounded-md flex justify-between p-8 hover:border-green-700 hover:shadow-lg ">
//                         <div className="text-4xl text-green-700 flex justify-center items-center">
//                             <FaMapLocationDot></FaMapLocationDot>
//                         </div>
//                         <div className="space-y-2">
//                             <h1 className="text-xl font-bold">Our Address</h1>
//                             <p>Address : Bengla Road Suite Dhaka 1209</p>
//                         </div>
//                     </div>
//                     <div className="border rounded-md flex justify-around p-8 hover:border-green-700 hover:shadow-lg ">
//                         <div className="text-4xl text-green-700 flex justify-center items-center">
//                             <MdOutlineWifiCalling3></MdOutlineWifiCalling3>
//                         </div>
//                         <div className="space-y-2">
//                             <h1 className="text-xl font-bold">Call Us</h1>
//                             <p>Address : +880 12354 81209</p>
//                         </div>
//                     </div>
//                     <div className="border rounded-md flex justify-around p-8 hover:border-green-700 hover:shadow-lg ">
//                         <div className="text-3xl text-green-700 flex justify-center items-center">
//                             <MdOutlineMail></MdOutlineMail>
//                         </div>
//                         <div>
//                             <h1 className="text-xl font-bold">Email Us</h1>
//                             <p>example@gmail.com</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt-10 flex justify-between">
//                     <div className="flex-1">
//                         <form ref={form} onSubmit={sendEmail}>
//                             <div className="py-4 w-full flex items-center ">
//                                 <label className="mr-2">Name</label>
//                                 <input type="text" name="user_name" className="border w-[90%] p-1 rounded-sm shadow" />
//                             </div>
//                             <div className="py-4 w-full flex items-center ">
//                                 <label className="mr-2">Email</label>
//                                 <input type="email" name="user_email" className="border w-[90%] p-1 rounded-sm shadow" />
//                             </div>
//                             <div className="py-4 w-full flex items-center ">
//                                 <label className="mr-2">Message</label>
//                                 <textarea name="message" className="border w-[86%] rounded-sm shadow" />
//                             </div>
//                             <div className="flex justify-center">
//                                 <input type="submit" value="Send" className="btn" />
//                             </div>
//                         </form>
//                     </div>
//                     <div className="flex-1">
//                         <MapContainer center={[23.702973, 90.497445]} zoom={13} scrollWheelZoom={false} className="h-96 w-full">
//                             <TileLayer
//                                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                             />
//                             <Marker position={[23.702973, 90.497445]}>
//                                 <Popup>
//                                     A pretty CSS3 popup. <br /> Easily customizable.
//                                 </Popup>
//                             </Marker>
//                         </MapContainer>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;
import React from 'react';

const Contact = () => {
    return (
        <div>
            
        </div>
    );
};

export default Contact;