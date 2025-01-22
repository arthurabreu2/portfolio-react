import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/profile_picture.jpeg"

const Hero = () => {
    return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
                        Arthur Vinicius Abreu</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-600 to-purple-700 bg-clip-text 
                    text-3xl tracking-tight text-transparent">Senior Full-stack Software Engineer</span>
                    <p className="my-2 text-1xl py-3 
                    font-extralight tracking-tighter">{HERO_CONTENT}</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="rounded-lg" width="75%" src={profilePic} alt="Arthur Photo" />
                </div>
            </div>
        </div>
    </div>
}

export default Hero
