//currently working on mobile friendly views
//changed some css into mui styling
//working on how to make image scale on larger/smaller screens
//need to make contact form actually function
import { useState } from "react";
import './contact.css';

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        //figuring out how to check if there is text or not in box
        setMessage(true);
    }

    return (
        <div
            className="contact"
            id="contact"
            style={{
                backgroundColor: 'white',
                display: 'flex'
            }}
        >
            <div
                className="left-container"
                style={{
                    flex: '1',
                    overflow: 'hidden'
                }}
            >
                <img
                    src="assets/handshake.jpg"
                    alt="Two Men Shaking Hands"
                    style={{
                        width: '100%',
                        height: 'auto',
                        overflow: 'hidden'
                    }}
                />
            </div>
            <div className="right-container">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input className="email" type="text" placeholder="Email"/>
                    <textarea className="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {(message == true) && <span>Thank you for your message!</span>}
                </form>
            </div>
        </div>
    )
}
