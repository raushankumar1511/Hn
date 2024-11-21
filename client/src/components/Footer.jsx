import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
const Footer = () => {
  return (
    <>
      <div className=" bg-black text-white ">
        <div className="py-36 flex justify-evenly">
          <div className="flex flex-col gap-2 ">
            <p className="font-poppins font-black text-3xl">
              Honestly-Nvrmind
            </p>
            <p className="text-lightGray">
              Complete your style from awesome cloths
              <span className="block">from us</span>
            </p>
            <ul className="flex gap-2">
              <li className="bg-yellow-300 transition-text duration-200 hover:bg-slate-500 hover:text-yellow-300 text-black w-12 h-12 flex items-center justify-center rounded-2xl">
                <a href="/facebook" className="">
                  <FaFacebookF className="text-3xl" />
                </a>
              </li>
              <li className="bg-amber-300 transition-text duration-200 hover:bg-slate-500 hover:text-yellow-300 text-black w-12 h-12 flex items-center justify-center rounded-2xl">
                <a href="/facebook" className="">
                  <IoLogoInstagram className="text-3xl" />
                </a>
              </li>
              <li className="bg-amber-300 transition-text duration-200 hover:bg-slate-500 hover:text-yellow-300 text-black w-12 h-12 flex items-center justify-center rounded-2xl">
                <a href="/facebook" className="">
                  <FaXTwitter className="text-3xl" />
                </a>
              </li>
              <li className="bg-amber-300 transition-text duration-200 hover:bg-slate-500 hover:text-yellow-300 text-black w-12 h-12 flex items-center justify-center rounded-2xl">
                <a href="/facebook" className="">
                  <TiSocialLinkedin className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
          {/* {right content} */}
          <div className="flex items-center justify-evenly flex-wrap gap-40">
            <div className="h-36 flex flex-col gap-2">
              <h4 className="text-customGray">Company</h4>
              <a href="/about" className="text-lightGray transition-text duration-200 hover:text-yellow-300">
                About
              </a>
              <a href="/contactus" className="text-lightGray transition-text duration-200 hover:text-yellow-300">
                Contact us
              </a>
            </div>

            <div className="h-36 flex flex-col gap-2">
              <h4 className="text-customGray">Quick Link</h4>
              <a href="/" className="text-lightGray transition-text duration-200 hover:text-yellow-300">
                Share Location
              </a>
              <a href="/" className="text-lightGray transition-text duration-200 hover:text-yellow-300">
                Orders Tracking
              </a>
            </div>

            <div className="h-36 flex flex-col gap-2">
              <h4 className="text-customGray">Legal</h4>
              <a href="/" className="text-lightGray transition-text duration-200 hover:text-yellow-300">
                Terms & conditions
              </a>
              <a href="/" className="text-lightGray transition-text duration-200 hover:text-yellow-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-8 text-customGray">
          <p>Copyright © - All right reserved by Honestly-Nvrmind</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
