import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Top Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Connect with Us */}
        <div className="flex flex-col space-y-2 items-center border border-gray-300">
          <h2 className="text-lg font-bold">CONNECT WITH US</h2>
          <p>+91 9567843340</p>
          <p>info@deepnetsoft.com</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center space-y-2 border border-gray-300">
          <h2 className="text-lg font-bold">DEEP NET SOFT</h2>
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
        <div className="flex flex-col space-y-2 items-center border border-gray-300">
          <h2 className="text-lg font-bold">FIND US</h2>
          <p>First floor, Geo Infopark,</p>
          <p>Infopark EXPY, Kakkanad</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © 2024 Deepnetsoft Solutions, All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
