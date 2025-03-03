import React, { useState } from "react";
import logo_av from "../assets/vetor-arthur.svg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { HiMiniLanguage } from "react-icons/hi2";

import LanguageModalGlass from "./LanguageModal";
import LanguageNotification from "./LanguageNotification";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [selectedLang, setSelectedLang] = useState("");
    const [showLangNotif, setShowLangNotif] = useState(false);
    const [showFeatureNotif, setShowFeatureNotif] = useState(false);

    const triggerLanguageMessage = (langDisplayName) => {
        setSelectedLang(langDisplayName);
        setShowLangNotif(true);
    };

    const closeLanguageMessage = () => {
        setShowLangNotif(false);
    };

    return (
        <>
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
                    <img
                        src={logo_av}
                        alt="Logo Arthur"
                        className="mx-2 h-24 transition-all duration-500 hover:scale-150"
                    />
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
                        className="relative group"
                        variants={{
                            hidden: { opacity: 0, x: 45 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                    >
                        <MdOutlineDashboard
                            className="shadow-lg transition-all duration-500 hover:scale-125 cursor-pointer"
                            onClick={() => setShowFeatureNotif(true)}
                        />
                        <span
                            className="
                pointer-events-none
                absolute
                bottom-full
                left-1/2
                mb-2
                w-max
                -translate-x-1/2
                rounded
                backdrop-blur-sm
                bg-white/10
                px-2
                py-1
                text-xs
                text-white
                opacity-0
                scale-0
                transition-all
                group-hover:opacity-100
                group-hover:scale-105
              "
                        >
                            {t("tooltips.projects")}
                        </span>
                    </motion.div>
                </motion.div>
            </motion.nav>

            <AnimatePresence>
                {isModalOpen && (
                    <LanguageModalGlass
                        onClose={closeModal}
                        onLanguageSelected={triggerLanguageMessage}
                    />
                )}

                {showLangNotif && (
                    <LanguageNotification
                        language={selectedLang}
                        onClose={closeLanguageMessage}
                    />
                )}

                {showFeatureNotif && (
                    <LanguageNotification
                        onClose={() => setShowFeatureNotif(false)}
                        titleKey="notification.feature_in_dev_title"
                        descriptionKey="notification.feature_in_dev_description"
                    />
                )}
            </AnimatePresence>

            <motion.div
                className="
          fixed bottom-10 right-10
          text-2xl shadow-lg
          transition-all duration-500
          hover:scale-125
          cursor-pointer
          z-50
          group
        "
                onClick={openModal}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <HiMiniLanguage />
                <span
                    className="
            pointer-events-none
            absolute
            bottom-full
            left-1/2
            mb-2
            w-max
            -translate-x-1/2
            rounded
            backdrop-blur-sm
            bg-white/10
            px-2
            py-1
            text-xs
            text-white
            opacity-0
            scale-0
            transition-all
            group-hover:opacity-100
            group-hover:scale-105
          "
                >
                    {t("tooltips.translate")}
                </span>
            </motion.div>
        </>
    );
};

export default Navbar;
