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
import { FaDocker, FaVuejs } from "react-icons/fa6";
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
import { FaAws, FaGitAlt, FaJira } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { animate, motion } from "framer-motion";

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

const iconVariants = (duration) => ({
    initial: { Y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
    return (
        <motion.div
            className="border-b border-neutral-800 pb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <h1 className="my-20 text-center text-3xl drop-shadow-md">Technologies</h1>


            <motion.div
                className="flex flex-wrap items-center justify-center gap-6 py-4"
                variants={containerVariants}
            >
                <motion.div className="rounded-2xl border-2 border-neutral-800 p-4 shadow-2xl" variants={fadeVariant}>
                    <DiPython className="text-6xl text-cyan-700" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <DiDjango className="text-6xl text-green-500" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <RiJavascriptFill className="text-6xl text-yellow-400" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <DiReact className="text-6xl text-cyan-500" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <BiLogoRedux className="text-6xl text-purple-600" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <BiLogoTypescript className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <RiNextjsFill className="text-6xl text-white" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <RiTailwindCssFill className="text-6xl text-teal-500" />
                </motion.div>
            </motion.div>


            <motion.div
                className="flex flex-wrap items-center justify-center gap-6 py-4"
                variants={containerVariants}
            >
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant}>
                    <BiLogoPostgresql className="text-6xl text-cyan-700" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant}>
                    <BiLogoMongodb className="text-6xl text-green-600" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant}>
                    <SiMysql className="text-6xl text-cyan-600" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant}>
                    <DiRedis className="text-6xl text-red-600" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant}>
                    <BiLogoFlask className="text-6xl text-gray-200" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeLeftVariant}>
                    <SiFastapi className="text-6xl text-teal-600" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 px-7 py-2.5" variants={fadeLeftVariant}>
                    <DiHtml5 className="text-4xl text-orange-600" />
                    <DiCss3 className="text-4xl text-teal-700" />
                </motion.div>
            </motion.div>


            <motion.div
                className="flex flex-wrap items-center justify-center gap-6 py-4"
                variants={containerVariants}
            >
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <FaAws className="text-6xl text-orange-500" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <FaDocker className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <FaGitAlt className="text-6xl text-orange-600" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <SiSelenium className="text-6xl text-red-600" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <SiPytorch className="text-6xl text-amber-500" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <TbApi className="text-6xl text-green-700" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <SiScikitlearn className="text-6xl text-amber-200" />
                </motion.div>
                <motion.div className="rounded-xl border-2 border-neutral-800 p-4" variants={fadeVariant}>
                    <SiTensorflow className="text-6xl text-orange-500" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Technologies;
