import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.subject) return toast.error("Subject is required");
    if (!formData.message) return toast.error("Message is required");

    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const success = validateForm();

      if (success === true) {
        await emailjs.sendForm(
          "service_m4olv5z",
          "template_j1zmz4s",
          form.current,
          "VitUGniZPCsnrhKbB"
        );

        toast.success("Message sent successfully!");
        form.current.reset();
      }
    } catch (error) {
      toast.error("Failed to submit form, Please try again.");
      console.log("Error", error.message);
    }
  };

  return (
    <section id="contact" className="Contact">
      <p className="fade-elements">
        Let’s connect and transform ideas into something extraordinary!
      </p>
      <form ref={form} onSubmit={sendEmail} className="fade-elements">
        <span>Contact Me</span>
        <div className="name-email-container">
          <div className="form-inputs">
            {/* <label htmlFor="user_name">Name</label> */}
            <input
              type="name"
              name="user_name"
              placeholder="Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>
          <div className="form-inputs">
            {/* <label htmlFor="user_email">Email</label> */}
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-inputs">
          {/* <label htmlFor="subject">Subject</label> */}
          <input
            type="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
        <div className="form-inputs">
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            name="message"
            cols="50"
            rows="8"
            placeholder="Tell me about your project or just say hello!"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
