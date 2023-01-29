import './footer.css'
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import mail from "../../assets/mail.svg";

const Footer = () => {
    return (
        <div class="socialContainer">
        <ul id="socialMedia">
          <li>
            <a href="https://github.com/JordiBustos"
              title="Go to my GitHub profile"
              aria-label="Go to my GitHub profile"
              target="_blank"
            >
              <img alt="Github Logo"
              src={github} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/jordi-bustos"
              title="Go to my LinkedIn profile"
              aria-label="Go to my LinkedIn profile"
              target="_blank"
            >
            <img alt="LinkedIn Logo"
              src={linkedin} />
            </a>
          </li>
          <li>
              <a 
                title="Send me an email"
                aria-label="Send me an email"
                href="mailto:jordibustos01@gmail.com">
                  <img alt="Envelope Icon" src={mail} />
              </a>
            </li>
          <li>© Jordi Bustos - 2023</li>
          <li>Open To Work</li>
        </ul>
      </div>
    )
}

export default Footer;