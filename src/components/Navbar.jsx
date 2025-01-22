import logo_av from "../assets/vetor-arthur.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return <nav className="mb-10 flex items-center justify-between py-6 bg-transparent">
        <div className="flex items-center">
            <img src={logo_av} alt="Logo Arthur" className="mx-2 h-24 transition-all duration-500 hover:scale-150" />
        </div>
        <div className="m-8 flex justify-center items-center gap-4 text-2xl pr-4 ">
            <FaLinkedin className="shadow-lg transition-all duration-400 hover:scale-125" />
            <FaGithub className="shadow-lg transition-all duration-400 hover:scale-125" />
            <FaInstagram className="shadow-lg transition-all duration-400 hover:scale-125" />
            <FaSquareXTwitter className="shadow-lg transition-all duration-400 hover:scale-125" />
        </div>
    </nav>
}

export default Navbar;
