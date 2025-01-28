// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import { FaMobileAlt, FaCogs, FaGlobeAmericas, FaHandsHelping } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { TbTools } from "react-icons/tb";
import { BsDatabaseFillGear } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { LuBrainCircuit, LuDatabaseZap } from "react-icons/lu";
import { SiInstructure, SiJfrogpipelines } from "react-icons/si";
import { FcTreeStructure } from "react-icons/fc";
import { PiTreeStructureLight } from "react-icons/pi";
import { MdOutlineCloudDone } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoBusinessOutline } from "react-icons/io5";

export const HERO_CONTENT = `Hi there! 👋\n
I’m Arthur, I have a deep love for technology, for progress, and a strong passion for tackling new challenges. I've been striving to improve each day in technology-related fields, aiming to contribute at a high level to make your business stand out in the market. Count on me to help your business grow, increase its visibility, integrate the finest technologies, and deliver top-quality products, ensuring an incomparable experience for your customers.`;

export const ABOUT_TEXT = `I'm a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const SERVICES = [
    {
        icon: <BsDatabaseFillGear className="text-2xl text-white" />,
        title: "Back-end development",
        description:
            "Design scalable, secure, and innovative systems tailored to streamline processes and drive efficiency, delivering a solid foundation for future growth in a dynamic digital landscape.",
    },

    {
        icon: <LiaLaptopCodeSolid className="text-3xl text-white" />,
        title: "Front-end development",
        description:
            "Craft intuitive, responsive, and visually engaging interfaces that enhance user experiences and bring digital products to life, ensuring seamless interaction in a fast-evolving digital world.",
    },
    {
        icon: <LuDatabaseZap className="text-2xl text-white" />,
        title: "Data Modeling and Management",
        description:
            "Design efficient data models and manage large-scale datasets, ensuring optimized performance, accuracy, and scalability to support data-driven decision-making and advanced analytics.",
    },
    {
        icon: <SiInstructure className="text-2xl text-white" />,
        title: "Architecture",
        description:
            "Robust and adaptive system architectures, focusing on reliability, performance, and aligning technology with strategic business needs.",
    },
    {
        icon: <SiJfrogpipelines className="text-3xl text-white" />,
        title: "DevOps",
        description:
            "Optimize workflows by implementing seamless automation, CI/CD pipelines, and infrastructure as code, ensuring efficiency and operational excellence.",
    },
    {
        icon: <MdOutlineCloudDone className="text-3xl text-white" />,
        title: "Cloud Computing",
        description:
            "Deliver flexible and secure cloud solutions, enabling cost-effective operations, enhanced performance, and easy adaptability to business growth.",
    },
    {
        icon: <LuBrainCircuit className="text-4xl text-white" />,
        title: "Automation & AI",
        description:
            "Intelligent automation solutions and AI-driven systems that streamline processes, reduce manual effort, and enable data-informed decision-making for innovative business outcomes.",
    },
    {
        icon: <IoBusinessOutline className="text-4xl text-white" />,
        title: "Everything for Your Business",
        description:
            "Solutions crafted specifically for your business needs. From strategy to execution, I ensure every solution aligns perfectly with your goals and drives measurable results.",
    },
    {
        icon: <FaHandsHelping className="text-4xl text-white" />,
        title: "Let's Work Together!",
        description:
            "Ready to bring your ideas to life? Contact me today and let's create something extraordinary.",
    },

];

export const EXPERIENCES = [
    {
        date: "Nov 2012",
        title: "Desenvolvedor Full Stack / Analista de Sistemas",
        description: `Atuando na criação e manutenção do ERP interno da empresa Masternet Telecom, 
  fazendo levantamento de requisitos, documentação com diagrama de fluxo, 
  desenvolvimento de módulos para gerenciamento de clientes, emissão de 
  notas fiscais, integração com instituições financeiras, comunicação 
  com equipamentos de telecomunicações, abertura de chamados, estoque e 
  portal do cliente.`,
        tags: [
            "#PHP", "#Bootstrap", "#Git", "#Javascript", "#API_RestFull",
            "#Postman", "#BPMN", "#Python", "#Jquery"
        ]
    },
    {
        date: "Abr 2014",
        title: "DBA / Desenvolvedor Back-End",
        description: `Com aumento da demanda e processamento, atuei na modelagem 
  e manutenção do Banco de Dados, criação de SQL's para consultas 
  compostas, criação de serviço de comunicação via Web Sockets 
  para gerenciamento de ligações com central telefônica, e, desenvolvimento 
  de componentes com threads e filas para processamento distribuído.`,
        tags: [
            "#MySQL", "#PostgreSQL", "#SQL", "#Redis", "#Memcached",
            "#Web_Socket", "#Mailhog", "#RabbitMQ", "#Proxy_Reverso", "#Load_Balance"
        ]
    },
    {
        date: "Jan 2020",
        title: "DevOps / SysAdmin",
        description: `Instalação, gerenciamento e manutenção de servidores UNIX 
  para aplicações web, APIs e serviços internos de comunicação. Implementado 
  integração contínua para deploy automático e automatizado, infraestrutura 
  com CI/CD, dividindo ambientes de trabalho para homologação e produção.`,
        tags: [
            "#Docker", "#Docker_Compose", "#CI_CD", "#Gitlab_Runner", "#Shell_Script",
            "#Ansible", "#Vagrant", "#Linux", "#Nginx"
        ]
    }
]
