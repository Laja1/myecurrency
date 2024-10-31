import { FaGooglePlusG } from "react-icons/fa6";
import { svgLink } from "../../assets/asset";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-primary flex flex-col items-center py-10">
      <div className="mb-6">
        <img src={svgLink.logo2} alt="Logo" className="w-32 md:w-48" />
      </div>
      <footer className="text-white py-10 px-5 lg:px-20 w-full">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg pb-2 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#ABABAB] hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ABABAB] hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ABABAB] hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ABABAB] hover:text-white">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg pb-2 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <p className="text-[#ABABAB] mb-1">Phone</p>
              <p className="text-white">+234 708 507 3128</p>
              <p className="text-[#ABABAB] mt-3">Address</p>
              <p className="text-white">16, Ogindipe Close, Upston Close</p>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Consumer Advisory</h3>
            <p className="text-[#ABABAB] max-w-sm text-sm leading-relaxed">
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. Results may vary.
            </p>
            <p className="text-[#ABABAB] max-w-sm text-sm mt-4">
              By using our website or product, you agree to follow our terms of
              service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-[#ABABAB] mb-4">
              Feel free to get in touch with us via email
            </p>
            <a
              href="mailto:hello@sleepstiq.com"
              className="font-semibold text-xl lg:text-2xl text-white mb-4 block"
            >
              hello@sleepstiq.com
            </a>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="bg-[#8FE2FF] p-2 rounded-full">
                  <FiFacebook size={18} color="black" fill="#12305b"/>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="bg-[#8FE2FF] rounded-full p-2">
                  <FiTwitter size={18} color="black" fill="#12305b"/>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="bg-[#8FE2FF] rounded-full p-2">
                  <FaGooglePlusG size={18} color="black" fill="#12305b"/>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="bg-[#8FE2FF] rounded-full p-2">
                  <FiLinkedin size={18} color="black" fill="#12305b"/>
                </div>
              </a>
            </div>
            <p className="text-gray-400 text-xs text-center sm:text-left">
              © 2020 @sleepstiq. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
