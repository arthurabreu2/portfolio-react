import React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";



const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: {
        y: '-5vh',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.4,
            duration: 0.6,
            ease: 'easeInOut'
        },
    },
    exit: {
        y: '5vh',
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    }
};



function LanguageModalGlass({ onClose, onLanguageSelected }) {

    const { i18n, t } = useTranslation();

    const changeToPortuguese = () => {
        i18n.changeLanguage('pt-BR');
        onClose();

        setTimeout(() => {
            onLanguageSelected("Português (Brasil)");
        }, 350);
    };

    const changeToEnglish = () => {
        i18n.changeLanguage('en');
        onClose();
        setTimeout(() => {
            onLanguageSelected("English");
        }, 350);
    };

    const changeToSpanish = () => {
        i18n.changeLanguage('es');
        onClose();
        setTimeout(() => {
            onLanguageSelected("Español");
        }, 350);
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                className="
              relative 
              flex 
              flex-col 
              items-center 
              rounded-md
              bg-white/10 
              text-neutral-200 
              backdrop-blur-sm 
              shadow-2xl
              w-80
              p-6
            "
                variants={modalVariants}
            >
                <h2 className="text-lg font-medium mb-10 mt-2">
                    {t("modal.select_language")}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-4 text-lg hover:text-white transition-all
                  hover:bg-white/10 text-neutral-200 hover:backdrop-blur-md hover:rounded-sm "
                    >
                        <IoClose />
                    </button>
                </h2>

                <div className="flex flex-col items-center space-y-3 w-auto">
                    <button
                        onClick={changeToPortuguese}
                        className="
                  relative 
                  w-64
                  px-4 py-2 
                  text-lg 
                  font-extralight 
                  backdrop-opacity-0 
                  hover:backdrop-blur-xl 
                  shadow-lg 
                  scale-95 hover:scale-100 
                  delay-75 duration-1000 
                  hover:rounded-sm 
                  hover:backdrop-opacity-50 
                  text-center
                "
                    >
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">🇧🇷</span>
                        Português (Brasil)
                    </button>

                    <button
                        onClick={changeToEnglish}
                        className="
                  relative 
                  w-64
                  px-4 py-2 
                  text-lg 
                  font-extralight 
                  backdrop-opacity-0 
                  hover:backdrop-blur-xl 
                  shadow-lg 
                  scale-95 hover:scale-100 
                  delay-75 duration-1000 
                  hover:rounded-sm 
                  hover:backdrop-opacity-50 
                  text-center
                "
                    >
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">🇺🇸</span>
                        English
                    </button>

                    <button
                        onClick={changeToSpanish}
                        className="
                  relative 
                  w-64
                  px-4 py-2 
                  text-lg 
                  font-extralight 
                  backdrop-opacity-0 
                  hover:backdrop-blur-xl 
                  shadow-lg 
                  scale-95 hover:scale-100 
                  delay-75 duration-1000 
                  hover:rounded-sm 
                  hover:backdrop-opacity-50 
                  text-center
                "
                    >
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">🇪🇸</span>
                        Español
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default LanguageModalGlass;
