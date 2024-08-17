import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                setSuccessMessage('Your message has been sent successfully!');
                setErrorMessage('');
                setName('');
                setSubject('');
                setMessage('');
            }, (error) => {
                setErrorMessage('There was an error sending your message. Please try again.');
                setSuccessMessage('');
            });
    };

    return (
        <div className="max-w-md mx-auto mb-8 p-8 border border-gray-300 rounded-lg shadow-md ">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Send Message
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Contact;
