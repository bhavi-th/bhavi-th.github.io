import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
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

    const email = e.target.user_email.value;
    const allowedPostfixRegex = /@.*\.(com|in|org|net|edu)$/i;

    if (!allowedPostfixRegex.test(email)) {
      setStatus("Unsupported domain. Use .com, .in, .org, .net, or .edu");
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    // Observe sidebar and form card
    const elements = document.querySelectorAll(
      ".contact-sidebar, .contact-card",
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contacts-section" id="contact">
      <div className="contact-main-container">
        <div className="contact-sidebar">
          <h2 className="main-title">Let's Connect</h2>
          <div className="info-group">
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <div className="info-details">
                <label>ENCRYPTED MAIL</label>
                <a href="mailto:bhaviths15@gmail.com">bhaviths15@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt className="info-icon" />
              <div className="info-details">
                <label>VOICE UPLINK</label>
                <p>+91 ----- -----</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-details">
                <label>BASE LOCATION</label>
                <p>Bengaluru, India</p>
              </div>
            </div>
          </div>

          <div className="social-uplink">
            <p className="social-tag">NETWORK NODES</p>
            <div className="social-icons">
              <a
                href="https://github.com/bhavi-th"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/bhavith-s"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/__bhavi__th__s"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2 className="title">Send a Signal</h2>
            <p className={`description ${isSuccess ? "success-text" : ""}`}>
              {status ||
                "Transmitting across the cosmos. I'll respond at light speed."}
            </p>
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
                pattern="^.*@.*\.(com|in|org|net|edu)$"
                title="Please enter an valid email"
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
      </div>
    </section>
  );
};

export default Contacts;
