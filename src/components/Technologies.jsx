import { DiReact, DiPython, DiDjango, DiHtml5, DiCss3, DiPostgresql, DiMysql, DiMongodb, DiRedis } from "react-icons/di";
import { BiLogoRedux, BiLogoFlask, BiLogoTypescript, BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill, RiJavascriptFill, RiBootstrapFill, RiNextjsFill } from "react-icons/ri";
import { FaDocker, FaVuejs } from "react-icons/fa6";
import { SiFastapi, SiMysql, SiNumpy, SiPandas, SiPytorch, SiRedis, SiScikitlearn, SiSelenium, SiTensorflow } from "react-icons/si";
import { FaAws, FaGitAlt, FaJira } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const Technologies = () => {
    return <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-3xl drop-shadow-md">Technologies</h1>

        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            <div className="rounded-2xl border-2 border-neutral-800 p-4 shadow-2xl">
                <DiPython className="text-6xl text-cyan-700" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <DiDjango className="text-6xl text-green-500" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <RiJavascriptFill className="text-6xl text-yellow-400" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <DiReact className="text-6xl text-cyan-500" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <BiLogoRedux className="text-6xl text-purple-600" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <BiLogoTypescript className="text-6xl text-cyan-400" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <RiNextjsFill className="text-6xl text-white" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-6xl text-teal-500" />
            </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-6xl text-cyan-700" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <BiLogoMongodb className="text-6xl text-green-600" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <SiMysql className="text-6xl text-cyan-600" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <DiRedis className="text-6xl text-red-600" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <BiLogoFlask className="text-6xl text-gray-200" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <SiFastapi className="text-6xl text-teal-600" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 px-7 py-2.5">
                <DiHtml5 className="text-4xl text-orange-600" />
                <DiCss3 className="text-4xl text-teal-700" />
            </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <FaAws className="text-6xl text-orange-500" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <FaDocker className="text-6xl text-cyan-400" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <FaGitAlt className="text-6xl text-orange-600" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <SiSelenium className="text-6xl text-red-600" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <SiPytorch className="text-6xl text-amber-500" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <TbApi className="text-6xl text-green-700" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <SiScikitlearn className="text-6xl text-amber-200" />
            </div>
            <div className="rounded-xl border-2 border-neutral-800 p-4">
                <SiTensorflow className="text-6xl text-orange-500" />
            </div>
        </div>
    </div>
}

export default Technologies
