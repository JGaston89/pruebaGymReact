import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
export default function SocialBar() {
  return (
    <div className="social-container m-auto">
         <div className="tituloFooter">
         <span><p className="neonTitle">Siguenos en nuestras redes</p></span>
         {/* <span><p>Podes encontrarnos en 13 y 38</p></span> */}
        </div>

      <a
        href="#"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </a>

      <a
        href="#"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="xl" />
      </a>

      <a
        href="#"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="xl" />
      </a>
    </div>
  );
}
