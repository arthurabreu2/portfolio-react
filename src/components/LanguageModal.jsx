import React from 'react';
import { motion } from 'framer-motion';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 },
    },
};

function LanguageModalGlass() {
    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="
          relative 
          flex 
          flex-col 
          items-center 
          rounded-2xl 
          bg-white/10 
          text-neutral-200 
          backdrop-blur-sm 
          shadow-xl 
          w-80 
          p-6
        "
                variants={modalVariants}
            >
                <h2 className="text-xl font-semibold mb-4">Selecione seu idioma</h2>

                <div className="flex flex-col space-y-2 w-full">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-700">
                        Português (Brasil)
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-700">
                        English
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-700">
                        Español
                    </button>
                </div>

                <button className="mt-4 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
                    Fechar
                </button>
            </motion.div>
        </motion.div>
    );
}

export default LanguageModalGlass;
