import logo_av from "../assets/vetor-arthur.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoLanguage } from "react-icons/io5";
import { HiMiniLanguage } from "react-icons/hi2";


const Navbar = () => {
    return (
        <motion.nav
            className="mb-10 flex items-center justify-between py-6 bg-transparent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.5 },
                },
            }}
        >
            <motion.div
                className="flex items-center"
                variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                }}
            >
                <img src={logo_av} alt="Logo Arthur" className="mx-2 h-24 transition-all duration-500 hover:scale-150" />
            </motion.div>
            <motion.div
                className="m-8 flex justify-center items-center gap-4 text-2xl pr-4"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.2 },
                    },
                }}
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 35 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                >
                    <FaLinkedin className="shadow-lg transition-all duration-500 hover:scale-125" />
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 35 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                >
                    <FaGithub className="shadow-lg transition-all duration-500 hover:scale-125" />
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 35 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                >
                    <FaInstagram className="shadow-lg transition-all duration-500 hover:scale-125" />
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 45 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                >
                    <FaSquareXTwitter className="shadow-lg transition-all duration-500 hover:scale-125" />
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 45 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                >
                    <HiMiniLanguage className="shadow-lg transition-all duration-500 hover:scale-125 ml-16" />
                </motion.div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
