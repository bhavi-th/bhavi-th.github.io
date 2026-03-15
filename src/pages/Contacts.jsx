import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/pages/Contacts.css";

const Contacts = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSent, setLastSent] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSent < 60000) {
      setStatus("Cooldown active. Please wait a minute. ⏳");
      return;
    }

    if (e.target.address.value) {
      console.log("Bot detected.");
      setStatus("Signal blocked by security protocol.");
      return;
    }

    const message = e.target.message.value.trim();
    if (message.length < 10) {
      setStatus("Transmission too short. Minimum 10 characters.");
      return;
    }

    setStatus("Initiating Launch...");

    emailjs
      .sendForm(
        "service_kpg5jl8",
        "template_xsdg1r9",
        form.current,
        "rMK8QoF00YGHGLgZ0",
      )
      .then(() => {
        return emailjs.sendForm(
          "service_kpg5jl8",
          "template_hgfbvtf",
          form.current,
          "rMK8QoF00YGHGLgZ0",
        );
      })
      .then(() => {
        setStatus("Signal Received & Auto-Reply Sent!");
        setIsSuccess(true);
        setLastSent(Date.now());
        e.target.reset();
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((error) => {
        console.error("Mission Failed:", error);
        setStatus("Transmission Error. Please try again.");
      });
  };

  return (
    <section className="contacts-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">CONTACT</span>
          <h2 className="title">Send a Signal</h2>
          <p className={`description ${isSuccess ? "success-text" : ""}`}>
            {status ||
              "Transmitting across the cosmos. I'll respond at light speed."}
          </p>
        </div>

        <div className="contact-card">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div style={{ display: "none" }}>
              <input
                type="text"
                name="address"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_name">NAME</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Your name"
                required
                minLength="2"
                maxLength="50"
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">EMAIL</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="What's on your mind?"
                required
                maxLength="2000"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`launch-button ${isSuccess ? "success-btn" : ""}`}
              disabled={status.includes("Initiating") || isSuccess}
            >
              {isSuccess
                ? "Transmission Confirmed"
                : status.includes("Initiating")
                  ? "Ignition..."
                  : "Launch Message"}
            </button>
          </form>
        </div>
        <footer className="footer">
          <p>© 2026 Bhavith S · Crafted somewhere in the universe</p>
        </footer>
      </div>
    </section>
  );
};

export default Contacts;
