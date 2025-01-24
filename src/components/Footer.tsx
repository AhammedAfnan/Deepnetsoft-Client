import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Top Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Connect with Us */}
        <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-xl p-4">
          <h2 className="text-lg text-customBlue font-extrabold">
            CONNECT WITH US
          </h2>
          <div className="flex items-center space-x-2 text-gray-500">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
            <p>+91 9567843340</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
            <p>info@deepnetsoft.com</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center space-y-2 border border-gray-300 rounded-xl p-4">
          <h2 className="text-3xl">
            <span className="text-customBlue pr-1">DEEP</span>
            <span className="text-white pr-1">NET</span>
            <span className="text-gray-500">SOFT</span>
          </h2>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Find Us */}
        <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-xl p-4">
          <h2 className="text-lg text-customBlue">FIND US</h2>
          <div className="flex items-center space-x-2 text-gray-500">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="w-5 h-5 text-gray-500"
            />
            <p>First floor, Geo Infopark,</p>
          </div>
          <p className="text-gray-500">Infopark EXPY, Kakkanad</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t bg-gray-800 border-gray-200 p-4 flex flex-col md:flex-row justify-around items-center">
        <p className="text-sm text-gray-500">
          © 2024 Deepnetsoft Solutions, All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm mt-2 md:mt-0">
          <a href="#" className="hover:underline text-gray-500">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline text-gray-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
