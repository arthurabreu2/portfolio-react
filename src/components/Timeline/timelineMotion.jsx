import React from "react";
import { motion } from "framer-motion";
import { TIMELINE_ITEMS } from "./timelineConstants";
import TimelineItemMotion from "./timelineItemMotion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

export default function TimelineMotion() {
    return (
        <div className="relative border-b border-neutral-900 pb-16">
            <h1 className="my-20 text-center text-3xl drop-shadow-md">Experiência</h1>

            <div className="relative mx-auto max-w-6xl">

                <div className="absolute hidden md:block top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-neutral-700 z-0" />

                <motion.div
                    className="z-10 space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {TIMELINE_ITEMS.map((item, index) => {
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
