import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {

    const form = useRef();

    const sendEmail = async(e) => {
        e.preventDefault();

        try{
            await emailjs.sendForm("service_m4olv5z", "template_j1zmz4s", form.current,"VitUGniZPCsnrhKbB");
            
            alert("Message sent successfully!");
            form.current.reset();

        } catch (error) {
            alert("Failed to submit form, Please try again.");
            console.log("Error",error.message);
        }
    }

    return (
        <section id="contact" className="Contact">
            <p className="fade-elements">Let’s connect and transform ideas into something extraordinary!</p>
            <form ref={form} onSubmit={sendEmail} className="fade-elements">
                <span>Contact Me</span>
                <input type="name" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <input type="subject" name="subject" placeholder="Your Subject" required />
                <textarea name="message" cols="50" rows="8" placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
