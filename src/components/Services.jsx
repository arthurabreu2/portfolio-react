import { SERVICES } from "../constants"

const Services = () => {
    return <div className="border-b border-neutral-900 pb-16">
        <h1 className="my-20 text-center text-3xl drop-shadow-md">Services</h1>

        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 ">
            {SERVICES.map((service, index) => (
                <div key={index} className="group relative flex w-full max-w-sm flex-col items-center rounded-2xl border border-neutral-700 bg-white/10 text-neutral-200 backdrop-blur-sm p-4 h-[280px] shadow-xl sm:w-[300px] my-6 transition-all duration-1000 hover:scale-105 hover:bg-opacity-70">
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
                </div>
            ))}
        </div>
    </div>
}

export default Services
