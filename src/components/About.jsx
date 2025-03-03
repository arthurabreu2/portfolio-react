import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="border-b border-neutral-900 pb-28">
            <h1 className="my-20 text-center text-3xl drop-shadow-md">
                {t("about_me.about")} <span className="text-neutral-500">{t("about_me.me")}</span>
            </h1>

            <div className="flex justify-center">
                <div className="relative w-full max-w-6xl flex justify-center">
                    <motion.svg
                        className="absolute top-0 left-0 w-full h-full"
                        viewBox="0 0 152 100"
                        preserveAspectRatio="none"
                        initial={{ strokeDashoffset: 800, opacity: 0 }}
                        whileInView={{
                            strokeDashoffset: 0,
                            opacity: 1,
                            transition: { duration: 2, ease: "easeInOut" },
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.path
                            d="M300,100 L300,0 L0,0 L0,100 Z"
                            fill="none"
                            stroke="#737373"
                            strokeWidth="1"
                            strokeDasharray="800"
                            vectorEffect="non-scaling-stroke"
                        />
                    </motion.svg>

                    <motion.p
                        className="relative my-2 max-w-6xl px-4 py-6 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { duration: 1.2, ease: "easeInOut" },
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {t("about_me.text_about")}
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default About;
