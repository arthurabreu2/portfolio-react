import {
    DiReact,
    DiPython,
    DiDjango,
    DiHtml5,
    DiCss3,
    DiPostgresql,
    DiMysql,
    DiMongodb,
    DiRedis,
} from "react-icons/di";
import {
    BiLogoRedux,
    BiLogoFlask,
    BiLogoTypescript,
    BiLogoPostgresql,
    BiLogoMongodb,
} from "react-icons/bi";
import {
    RiTailwindCssFill,
    RiJavascriptFill,
    RiBootstrapFill,
    RiNextjsFill,
} from "react-icons/ri";
import { FaDocker, FaVuejs, FaAws, FaGitAlt, FaJira } from "react-icons/fa6";
import {
    SiFastapi,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiPytorch,
    SiRedis,
    SiScikitlearn,
    SiSelenium,
    SiTensorflow,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.4, ease: "easeInOut" } },
};

const fadeLeftVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const loopAnimation = {
    animate: { y: [0, -20, 0] },
    visible: {
        transition: { staggerChildren: 0.5 }
    },
    transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,

    },
};

const Technologies = () => {

    const { t } = useTranslation();


    return (
        <motion.div
            className="border-b border-neutral-800 pb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h1
                className="my-20 text-center text-3xl drop-shadow-md"
                variants={containerVariants}
            >
                {t("titles.technologies")}
            </motion.h1>

            <motion.div
                className="flex flex-wrap items-center justify-center gap-6 py-4"
                variants={containerVariants}
            >
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-6"
                >
                    <motion.div className="rounded-2xl border-2 border-neutral-800 p-4 shadow-2xl" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <DiPython className="text-6xl text-cyan-700" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <DiDjango className="text-6xl text-green-500" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <RiJavascriptFill className="text-6xl text-yellow-400" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <DiReact className="text-6xl text-cyan-500" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <BiLogoRedux className="text-6xl text-purple-600" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <BiLogoTypescript className="text-6xl text-cyan-400" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <RiNextjsFill className="text-6xl text-white" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <RiTailwindCssFill className="text-6xl text-teal-500" />
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div className="flex flex-wrap items-center justify-center gap-6 py-4" variants={containerVariants}>
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-6"
                >
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <BiLogoPostgresql className="text-6xl text-cyan-700" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <BiLogoMongodb className="text-6xl text-green-600" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <SiMysql className="text-6xl text-cyan-600" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <DiRedis className="text-6xl text-red-600" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <BiLogoFlask className="text-6xl text-gray-200" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <SiFastapi className="text-6xl text-teal-600" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 px-7 py-2.5" variants={fadeLeftVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <DiHtml5 className="text-4xl text-orange-600" />
                        <DiCss3 className="text-4xl text-teal-700" />
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-wrap items-center justify-center gap-6 py-4"
                variants={containerVariants}
            >
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-6"
                >
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <FaAws className="text-6xl text-orange-500" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <FaDocker className="text-6xl text-cyan-400" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <FaGitAlt className="text-6xl text-orange-600" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <SiSelenium className="text-6xl text-red-600" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <SiPytorch className="text-6xl text-amber-500" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <TbApi className="text-6xl text-green-700" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.4 }}>
                        <SiScikitlearn className="text-6xl text-amber-200" />
                    </motion.div>
                    <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant} animate={{ ...loopAnimation.animate }}
                        transition={{ ...loopAnimation.transition, delay: 0.6 }}>
                        <SiTensorflow className="text-6xl text-orange-500" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>

    );
};

export default Technologies;
