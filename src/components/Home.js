import "./Home.css"
import Github from "../assets/icon/github.svg";
import LinkedIn from "../assets/icon/linkedin.svg";
import Mail from "../assets/icon/mail.svg";
import Whatsapp from "../assets/icon/whatsapp.svg";
import GithubInverted from "../assets/icon/github-inverted.svg";
import LinkedInInverted from "../assets/icon/linkedin-inverted.svg";
import MailInverted from "../assets/icon/mail-inverted.svg";
import WhatsappInverted from "../assets/icon/whatsapp-inverted.svg";

function Home({ theme }) {
    return (
        <section id="home" className="Home">
            <span id="name" className="fade-elements">Bhavith S</span>
            <ul id="social-links" className="fade-elements">
                <li><a href="https://github.com/bhavi-th" target="_blank" rel="noreferrer"><img src={theme ? Github : GithubInverted} alt="social links" /></a></li>
                <li><a href="https://www.linkedin.com/in/bhavith-s/" target="_blank" rel="noreferrer"><img src={theme ? LinkedIn : LinkedInInverted} alt="social links" /></a></li>
                <li><a href="mailto:bhaviths15@gmail.com" target="_blank" rel="noreferrer"><img src={theme ? Mail : MailInverted} alt="social links" /></a></li>
                <li><a href="https://wa.me/919901949627" target="_blank" rel="noreferrer"><img src={theme ? Whatsapp : WhatsappInverted} alt="social links" /></a></li>
            </ul>
            <p className="fade-elements">
                Welcome to my minimalist digi-space, where I craft clear and practical solutions to real-world problems. I believe technology should be purposeful—streamlining systems and making life easier, one line of code at a time.
            </p>
            <div id="btn-container" className="fade-elements">
                <a href="#projects">
                    View my work
                </a>
            </div>
        </section>
    )
}

export default Home;