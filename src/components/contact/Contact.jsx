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
        <div className="contact" id="contact">
            <div className="left-container">
                <img src="assets/handshake.jpg" />
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
