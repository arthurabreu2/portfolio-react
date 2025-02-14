import { motion } from "framer-motion";
import { SERVICES } from "../constants";

const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.4, ease: "easeInOut" } },
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const Services = () => {
    return (
        <motion.div
            className="border-b border-neutral-900 pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h1
                className="my-20 text-center text-3xl drop-shadow-md"
                variants={fadeVariant}
            >
                Services
            </motion.h1>

            <motion.div
                className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 "
                variants={containerVariants}
            >
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={index}
                        className="group relative flex w-full max-w-sm flex-col items-center rounded-2xl border border-neutral-700 bg-white/10 text-neutral-200 backdrop-blur-sm p-4 h-[280px] shadow-xl sm:w-[300px] my-6  hover:bg-opacity-70 "
                        variants={fadeVariant}
                    >
                        <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 shadow-lg">
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
    );
};

export default Services;
