import profilePic from "../assets/profile_picture.jpeg";
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const Hero = () => {
    const { t, i18n } = useTranslation();
    const typedStrings = t("hero.typed", { returnObjects: true });

    return (
        <motion.div
            className="border-b border-neutral-900 pb-4 lg:mb-30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3 },
                },
            }}
        >
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={i18n.language}
                            variants={fadeContainer}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="flex flex-col items-center lg:items-start"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.5 } },
                                }}
                            >
                                <motion.h1
                                    className="pb-16 font-thin drop-shadow-lg tracking-tight lg:mt-16 lg:text-5xl"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { duration: 1.2 },
                                        },
                                    }}
                                >
                                    {t("hero.title")}
                                </motion.h1>

                                <motion.span
                                    className="bg-gradient-to-r from-pink-300 via-slate-600 to-purple-700
                             bg-clip-text text-3xl tracking-tight text-transparent"
                                    variants={{
                                        hidden: { opacity: 0, x: -100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 1, ease: "easeInOut" },
                                        },
                                    }}
                                >
                                    {t("hero.subtitle")}
                                </motion.span>

                                <motion.span
                                    className="bg-gradient-to-r from-pink-300 via-slate-600 to-purple-700
                             bg-clip-text text-lg tracking-tight text-transparent"
                                    variants={{
                                        hidden: { opacity: 0, x: -100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.8, ease: "easeInOut" },
                                        },
                                    }}
                                >
                                    <ReactTyped
                                        strings={typedStrings}
                                        typeSpeed={100}
                                        backSpeed={100}
                                        loop
                                    />
                                </motion.span>

                                <motion.p
                                    className="my-2 text-1xl py-3 font-extralight tracking-tighter
                             whitespace-pre-wrap text-left lg:text-left sm:text-center"
                                    variants={{
                                        hidden: { opacity: 0, x: -100 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.8, ease: "easeInOut" },
                                        },
                                    }}
                                >
                                    {t("hero.content")}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.div
                    className="w-full lg:w-1/2 lg:p-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1, ease: "easeInOut" },
                        },
                    }}
                >
                    <div className="flex justify-center group-hover:scale-105">
                        <div
                            className="relative group w-3/4 h-3/4
                         sm:w-3/5 sm:h-3/5 md:w-3/4 md:h-3/4
                         rounded-lg overflow-hidden drop-shadow-lg"
                        >
                            <img
                                src={profilePic}
                                alt="Arthur Photo"
                                className="object-cover transition-all duration-1000 group-hover:scale-105"
                            />
                            <div
                                className="absolute top-0 left-[-150%] w-full h-full
                           bg-gradient-to-r from-transparent to-white
                           -skew-x-12 pointer-events-none opacity-10
                           group-hover:animate-shine"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
