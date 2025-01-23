import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/profile_picture.jpeg"
import { ReactTyped } from "react-typed"


const Hero = () => {
    return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 font-thin drop-shadow-lg tracking-tight lg:mt-16 lg:text-5xl transition-all duration-1000 hover:scale-105">
                        Arthur V. Abreu</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-600 to-purple-700 bg-clip-text 
                    text-3xl tracking-tight text-transparent">Senior Full-stack Software Engineer</span>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-600 to-purple-700 bg-clip-text 
                    text-lg tracking-tight text-transparent">
                        <ReactTyped
                            strings={[
                                "and Scientist",
                                "and DevOps",
                                "and Curious",
                                "and Passionate about Challenges",
                                "and Determined",
                            ]}
                            typeSpeed={100}
                            backSpeed={100}
                            loop

                        />
                    </span>
                    <p className="my-2 text-1xl py-3 
                    font-extralight tracking-tighter whitespace-pre-wrap">{HERO_CONTENT}</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center group-hover:scale-105">
                    <div className="relative group w-80 h-80 rounded-lg overflow-hidden drop-shadow-lg">
                        <img src={profilePic} alt="Arthur Photo" className="object-cover transition-all duration-1000 group-hover:scale-105" />
                        <div className="absolute top-0 left-[-150%] w-[100%] h-full bg-gradient-to-r from-transparent to-white -skew-x-12 pointer-events-none opacity-10 group-hover:animate-shine" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Hero
