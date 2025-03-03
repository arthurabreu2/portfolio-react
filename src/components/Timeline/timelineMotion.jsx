import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TimelineItemMotion from "./timelineItemMotion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

export default function TimelineMotion() {
    const { t } = useTranslation();

    const timelineItems = t("experience.items", { returnObjects: true });

    return (
        <div className="relative border-b border-neutral-900 pb-16">
            <h1 className="my-20 text-center text-3xl drop-shadow-md">
                {t("experience.title")}
            </h1>

            <div className="relative mx-auto max-w-6xl">
                <div className="absolute hidden md:block top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-neutral-700 z-0" />

                <motion.div
                    className="z-10 space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {timelineItems.map((item, index) => {
                        const isLeftSide = index % 2 === 0;
                        return (
                            <TimelineItemMotion key={index} item={item} isLeftSide={isLeftSide} />
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
