import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-16">
            <h1 className="my-20 text-center text-3xl drop-shadow-md">Experience</h1>
            <div className="relative mx-auto max-w-4xl border-l border-neutral-700 pl-8">
                {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="mb-12 ml-4 relative">
                        <div className="absolute -left-4 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-pink-300 to-purple-600 text-sm font-semibold text-neutral-800 ring-4 ring-neutral-950 shadow-md">
                            {exp.date}
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-cyan-400">{exp.title}</h3>
                        <p className="mb-2 text-sm text-neutral-300">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {exp.tags.map((tag, i) => (
                                <span key={i} className="text-xs border border-neutral-700 px-2 py-1 rounded-full bg-white/10 text-neutral-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
