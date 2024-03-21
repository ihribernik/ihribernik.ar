import Email from "../assets/svg/Email";
import Facebook from "../assets/svg/Facebook";
import Github from "../assets/svg/Github";
import House from "../assets/svg/House";
import Instagram from "../assets/svg/Instagram";
import Linkedin from "../assets/svg/Linkedin";
import Phone from "../assets/svg/Phone";
import Twitter from "../assets/svg/Twitter";
import { InformationProps } from "../interfaces";
import { dateDiff } from "../utils";

const information: InformationProps = {
  timeline: {
    jobs: [
      {
        date: "2023/09",
        details: [
          "migracion de reporteria a un nuevo stack utilizando python y anvil"
        ],
        employer: "Adviters",
        duration: dateDiff("2023-09"),
        position: "Software Engineer",
        stack: [
          "python",
          "anvil",
          "Sql server",
        ]
      },
      {
        date: "2023/05",
        details: [
          "Desarrollo y mantenimiento de bots y plataformas de trading algoritmico",
          "Colaboración en el mantenimiento y deploy de la aplicación en los diferentes ambientes utilizando Github actions.",
        ],
        employer: "Grupo IEB",
        duration: dateDiff("2023-05", "2023-07"),
        position: "Full stack developer",
        stack: [
          "python",
          "django",
          "nodejs",
          "react",
          "redis",
          "postgresql",
          "fix protocol",
        ],
      },
      {
        date: "2022/03",
        details: [
          "Desarrollo de la plataforma Tokenize & Trace de la compañía, evolución de la plataforma de Carnes  Validadas. La cual consiste en un ecosistema de aplicaciones para la tokenización de diferentes activos de diferentes cadenas de suministros utilizando la blockchain de Algorand para el stampe de assets.",
          "Apoyo técnico en la creación de nuevos modelos de información para las diferentes cadenas de suministros.",
          "Colaboración en el mantenimiento y deploy de la aplicación en los diferentes ambientes dentro de aws.",
          "Liderazgo en la generación de librerías internas (“sistema de validadores”, etc) para agilizar el desarrollo dentro de las apps del ecosistema.",
        ],
        employer: "Origino",
        duration: dateDiff("2022-03", "2023-05"),
        position: "Full stack developer",
        stack: ["nodejs", "react", "express", "mongo", "postgresql"],
      },
      {
        date: "2021/12",
        details: [
          "Desarrollo de microservicios para el principal middleware de la empresa destinado a la alta/configuración de nuevos dispositivos de red.",
          "Migración de código legacy escrito en php para que se adecue a los nuevos estándares de desarrollo en el área de middleware.",
          "Implementación de las nuevas soluciones en un ambiente de kubernetes. Así también colaborando con el sector de devops para la automatización de despliegues",
        ],
        employer: "Telecentro",
        duration: dateDiff("2021-12", "2022-03"),
        position: "Full stack developer",
        stack: [
          "Python",
          "flask",
          "mongodb",
          "openshift/kubernetes",
          "oracle database",
        ],
      },
      {
        date: "2020/07",
        details: [
          "Desarrollo  de nuevas características de una solución SaaS la cual estaba destinada a la optimizacion de procesos para la industria de centro de contacto a clientes. Dicha solución estaba constituida como un proyecto fullStack en Python por un lado, y por el otro una API para que cada cliente pueda consumir información directamente y adecuarla a sus necesidades.",
          "Colaboración en las diferentes tareas relacionadas a la gestión de los proyectos, como por ejemplo la planificación de los sprints, code review de las diferentes pull request, deploys, etc.",
        ],
        employer: "Kenwin",
        duration: dateDiff("2020-07", "2021-12"),
        position: "Full stack developer",
        stack: ["python", "pyramid", "django", "postgresql", "redis"],
      },
      {
        date: "2019/03",
        details: [
          "Migración  de plataforma de decisión de una importante empresa de scoring crediticio a  microservicios en Python.",
          "Análisis y corrección de diferentes bug en la vieja plataforma de decisión, para su futura implementación dentro de los nuevos microservicios.",
        ],
        employer: "Grupo assa",
        duration: dateDiff("2019-03", "2020-07"),
        position: "Backend developer",
        stack: ["python", "flask", "oracle Database", "java"],
      },

      {
        date: "2018/10",
        details: [
          "Mantenimiento y mejoras de diferentes aplicaciones dentro de una importante empresa automovilística.",
        ],
        employer: "Atos argentina",
        duration: dateDiff("2018-10", "2019-03"),
        position: "Backend developer Ssr",
        stack: [],
      },

      {
        date: "2018/01",
        details: [
          "Mantenimiento y mejoras de diferentes aplicaciones dentro de una importante empresa bancaria.",
          "Análisis  de cancelaciones para futuras mejoras e implementaciones de estas.",
        ],
        employer: "Accenture srl",
        duration: dateDiff("2018-01", "2018-10"),
        position: "Backend developer",
        stack: [],
      },

      {
        date: "2017/05",
        details: [
          "Desarrollo de un sistema de reportería dentro de una importante empresa bancaria. Para el Core Bancario T24 de Témenos de dicho cliente (bajo lenguaje infobasic/Jbasic).",
        ],
        employer: "Tecnosoftware",
        duration: dateDiff("2017-05", "2018-01"),
        position: "Backend developer",
        stack: [],
      },

      {
        date: "2015/05",
        details: [
          "Mejora del sistema de leasing e implementación de nuevas funcionalidades dentro de una importante empresa bancaria.",
        ],
        employer: "CDA",
        duration: dateDiff("2015-05", "2017-05"),
        position: "Backend developer",
        stack: [],
      },
    ]
  },
  hero: {
    firstName: 'Claudio',
    secondName: 'Ivan',
    lastName: 'Hribernik',
    title: 'Analista de sistemas y web developer',
  },
  about: {
    paragraphs: [
      'Naci en el año 1989 en la ciudad de Buenos Aires, Argentina.',
      'Soy Analista de Sistemas y me dedico al desarrollo de software desde el año 2015. Actualmente trabajo en la empresa {employer} como {position}.',
      'Me gusta mucho el desarrollo de software, aprender cosas nuevas e investigar sobre nuevas tecnologías.',
      'Por otro lado soy un apasionado de la música, toco la guitarra y el bajo.',
    ],
  },
  footer: {
    contact: [
      {
        innerText: '+54 9 11 3900 3721',
        component: Phone
      },
      {
        innerText: 'cihribernik@gmail.com',
        component: Email,
      },
      {
        innerText: 'Buenos Aires, Argentina',
        component: House
      }
    ],
    socialMediaButtons: [
      {
        href: "https://www.facebook.com/ivan.hribernik",
        color: "#1877f2",
        component: Facebook,
      },
      {

        href: "https://twitter.com/ivan_hribernik",
        color: "#1da1f2",
        component: Twitter,
      },
      {
        href: "https://www.instagram.com/ivanhribernik89",
        color: "#c13584",
        component: Instagram,
      },
      {
        href: "https://www.github.com/ihribernik",
        color: "#333",
        component: Github,
      },
      {
        href: "https://www.https://www.linkedin.com/in/claudio-ivan-hribernik-492255b8",
        color: "#0077b5",
        component: Linkedin,
      }
    ]
  }
};

export default information;