import { motion } from "framer-motion";

const fadeLeft = {
    hidden: { x: -200, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1.2 } },
};
const fadeRight = {
    hidden: { x: 200, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1.2 } },
};

const lineGrow = {
    hidden: { width: 0 },
    show: { width: "5rem", transition: { duration: 0.8, ease: "easeInOut" } },
};

export default function TimelineItemMotion({ item, isLeftSide }) {
    const chosenVariant = isLeftSide ? fadeLeft : fadeRight;

    return (
        <motion.div
            className="relative min-h-[160px] mb-12"
            variants={chosenVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="hidden md:block">
                {isLeftSide ? (
                    <div className="absolute top-1/2 -translate-y-1/2 flex items-center right-1/2">
                        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-neutral-700 bg-white/10 text-neutral-200 backdrop-blur-sm shadow-xl">
                            <div className="absolute inset-0 rounded-full ring-2 ring-neutral-700" />
                            <span className="z-10 text-sm">{item.date}</span>
                        </div>
                        <motion.div
                            className="border-t-2 border-neutral-700 ml-3"
                            variants={lineGrow}
                        />
                    </div>
                ) : (
                    <div className="absolute top-1/2 -translate-y-1/2 flex items-center left-1/2">
                        <motion.div
                            className="border-t-2 border-neutral-700 mr-3"
                            variants={lineGrow}
                        />
                        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-neutral-700 bg-white/10 text-neutral-200 backdrop-blur-sm shadow-xl">
                            <div className="absolute inset-0 rounded-full ring-2 ring-neutral-700" />
                            <span className="z-10 text-sm">{item.date}</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="md:hidden flex items-center justify-center mb-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-white/10 text-neutral-200 backdrop-blur-sm shadow-xl">
                    <div className="absolute inset-0 rounded-full ring-2 ring-neutral-700" />
                    <span className="z-10 text-xs">{item.date}</span>
                </div>
            </div>

            <div
                className={`w-full md:w-[49%] rounded-md border border-neutral-700 bg-white/10 p-6 backdrop-blur-sm shadow-xl ${isLeftSide ? "md:ml-auto text-left" : "md:mr-auto text-right"
                    }`}
            >
                <h3 className="mb-2 text-xl font-semibold text-cyan-400">{item.title}</h3>
                <p className="text-sm text-neutral-200">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags?.map((tag, i) => (
                        <span
                            key={i}
                            className="rounded-full bg-neutral-700/50 px-2 py-1 text-xs text-neutral-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
