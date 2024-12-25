import { FaInstagram } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-36 mb-10">
      <div className="Footer_WholeContent">
        <div className="Footer_Contentone">
          <h1 className="text-3xl mb-3 text-white">Christmas Wonderland</h1>
          <p className="text-gray-200">Discover the magic of Christmas <br />with festive Inspiration, Unique <br />gift ideas, and Seasonal Joy for <br />every celebration.joim us in<br />making this holiday <br />Unforgettable!</p>
        </div>

        <div className="Footer_Contenttwo">
          <ul>
            <h2 className="text-3xl mb-3 text-white">Nav Links</h2>
            <li className="text-gray-200">Home</li>
            <li className="text-gray-200">About</li>
            <li className="text-gray-200">Collection</li>
            <li className="text-gray-200">Premium</li>
          </ul>
        </div>

        <div className="Footer_Contentthree">
          <ul>
            <h2 className="text-3xl mb-3 text-white">Services</h2>
            <li className="text-gray-200">Product</li>
            <li className="text-gray-200">Third-Party sell</li>
            <li className="text-gray-200">T-shirt Design</li>
            <li className="text-gray-200">Ordering Services</li>
          </ul>
        </div>

        <div className="Footer_Contentfour">
          <div>
          <h2 className="text-3xl mb-3 text-white">Contact Us</h2>
          <p className="text-gray-200">Contact By <br />+91 9790933818,Tamil Nadu-India</p>
          </div>

          <div id="icons-footer" className="flex flex-row mt-5 translate-x-20">
            <FaInstagram id="Instagram" className="text-3xl mr-3"/>
            <a href="https://dev.to/solo_code_artisan__"><FaDev id="Dev" className="text-3xl mr-2"/></a>
            <FaFacebookF id="Facebook" className="text-3xl mr-2"/>
            <a href="https://www.figma.com/files/team/1389604272611779086/user/1389604270053223051?fuid=1389604270053223051"><FaFigma id="Figma" className="text-3xl mr-2"/></a>
            <FaTwitter id="Twitter" className="text-3xl mr-2"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer