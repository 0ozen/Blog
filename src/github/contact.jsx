import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import "./contact.css";

export function Contact() {
  return (
    <div className="contact" id='contact'>
      <div className="final">
        <div className="social-media">
          <a rel='noreferrer' href="https://www.linkedin.com/in/jhean-undefined/" target="_blank">
            <p className='white'><SiLinkedin size={"2rem"} color="white" /></p>
          </a>
          <a rel='noreferrer' href="https://github.com/0ozen" target="_blank" >
            <p className='white'> <SiGithub size={"2rem"} color="white" /></p>
          </a>
          <a href="mailto:bluefirt15@gmail.com">
            <p className='white'><SiGmail size={"2rem"} color="white" /></p>
          </a>
        </div>
      </div>
    </div>
  );
}
