import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import { BsDatabaseFillGear } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { LuDatabaseZap } from "react-icons/lu";
import { SiInstructure, SiJfrogpipelines } from "react-icons/si";
import { MdOutlineCloudDone } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { IoBusinessOutline } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";


const containerVariants = {
    hidden: { opacity: 0, y: 2 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.2 },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.9 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
        opacity: 0,
        x: -10,
        transition: { duration: 2.2, ease: "easeInOut" },
    },
};

export default function Services() {
    const { t, i18n } = useTranslation();

    const heightClass = ["pt-BR", "es"].includes(i18n.language) ? "h-[300px]" : "h-[280px]";

    const servicesData = [
        {
            icon: <BsDatabaseFillGear className="text-2xl text-white" />,
            title: t("services.backend_title"),
            description: t("services.backend_service"),
        },
        {
            icon: <LiaLaptopCodeSolid className="text-3xl text-white" />,
            title: t("services.frontend_title"),
            description: t("services.frontend_service"),
        },
        {
            icon: <LuDatabaseZap className="text-2xl text-white" />,
            title: t("services.data_title"),
            description: t("services.data_service"),
        },
        {
            icon: <SiInstructure className="text-2xl text-white" />,
            title: t("services.architeture_title"),
            description: t("services.architeture_service"),
        },
        {
            icon: <SiJfrogpipelines className="text-3xl text-white" />,
            title: t("services.devops_title"),
            description: t("services.devops_service"),
        },
        {
            icon: <MdOutlineCloudDone className="text-3xl text-white" />,
            title: t("services.cloud_title"),
            description: t("services.cloud_service"),
        },
        {
            icon: <LuBrainCircuit className="text-4xl text-white" />,
            title: t("services.automation_title"),
            description: t("services.automation_service"),
        },
        {
            icon: <IoBusinessOutline className="text-4xl text-white" />,
            title: t("services.everything_title"),
            description: t("services.everything_service"),
        },
        {
            icon: <FaHandsHelping className="text-4xl text-white" />,
            title: t("services.work_together_title"),
            description: t("services.work_together_service"),
        },
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={i18n.language}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
                className="border-b border-neutral-900 pb-16"
            >
                <motion.h1
                    className="my-20 text-center text-3xl drop-shadow-md"
                    variants={containerVariants}
                >
                    {t("services.title")}
                </motion.h1>

                <motion.div
                    className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4"
                    variants={containerVariants}
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`
                group relative flex w-full max-w-sm flex-col items-center
                rounded-2xl border border-neutral-700 bg-white/10
                text-neutral-200 backdrop-blur-sm p-4 shadow-xl
                sm:w-[300px] my-6 hover:bg-opacity-70
                ${heightClass}
              `}
                        >
                            <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 shadow-xl">
                                {service.icon}
                            </div>

                            <div className="mt-12 flex flex-col items-center text-center justify-center">
                                <h3 className="mt-2 text-xl font-semibold hover:drop-shadow-2xl">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm hover:drop-shadow-2xl">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
