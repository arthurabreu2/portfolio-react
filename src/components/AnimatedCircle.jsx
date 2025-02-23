import { motion } from "framer-motion"

const AnimatedCircle = () => {
    const outerRadius = 100
    const outerCircumference = 2 * Math.PI * outerRadius

    const biggerRadius = outerRadius + 6
    const biggerCircumference = 2 * Math.PI * biggerRadius

    const innerRadius = outerRadius - 6
    const innerCircumference = 2 * Math.PI * innerRadius

    return (
        <motion.div
            className="flex items-center justify-center"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="overflow-visible"
            >
                <motion.circle
                    cx="100"
                    cy="100"
                    r={outerRadius}
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray={outerCircumference}
                    strokeDashoffset={outerCircumference}
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 1080, strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        rotate: { duration: 3, ease: "easeInOut" },
                        strokeDashoffset: { duration: 3, ease: "easeInOut" }
                    }}
                    style={{ transformOrigin: "50% 50%" }}
                />

                <motion.circle
                    cx="100"
                    cy="100"
                    r={innerRadius}
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray={innerCircumference * 0.2}
                    initial={{ rotate: 0, opacity: 1 }}
                    whileInView={{ rotate: -1080, opacity: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        rotate: { duration: 2, ease: "easeInOut" },
                        opacity: { delay: 2.2, duration: 1 }
                    }}
                    style={{ transformOrigin: "50% 50%" }}
                />

                <motion.circle
                    cx="100"
                    cy="100"
                    r={biggerRadius}
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray={biggerCircumference * 0.2}
                    initial={{ rotate: 0, opacity: 1 }}
                    whileInView={{ rotate: 1080, opacity: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        rotate: { duration: 2, ease: "easeInOut" },
                        opacity: { delay: 2, duration: 1 }
                    }}
                    style={{ transformOrigin: "50% 50%" }}
                />
            </svg>
        </motion.div>
    )
}

export default AnimatedCircle
