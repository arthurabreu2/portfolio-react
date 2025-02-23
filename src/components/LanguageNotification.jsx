import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const backdropVariants = {
    hidden: { opacity: 0, pointerEvents: "none" },
    visible: { opacity: 1, pointerEvents: "auto" },
    exit: {
        opacity: 0,
        pointerEvents: "none",
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

export default function LanguageNotification({
    language,
    onClose,
    titleKey = "notification.title",
    descriptionKey = "notification.description",
}) {
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 1700);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 bg-gray-950 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div
                className="
          relative 
          flex 
          flex-col 
          items-center 
          rounded-md 
          text-neutral-200 
          drop-shadow-2xl
          w-full
          p-6
          text-center
        "
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p className="text-lg font-semibold mb-5">
                    {t(titleKey, language ? { language } : {})}
                </p>
                <p className="text-sm font-thin">
                    {t(descriptionKey)}
                </p>
            </motion.div>
        </motion.div>
    );
}
