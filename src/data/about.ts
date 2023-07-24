import Email from "../assets/svg/Email";
import Facebook from "../assets/svg/Facebook";
import Github from "../assets/svg/Github";
import House from "../assets/svg/House";
import Instagram from "../assets/svg/Instagram";
import Linkedin from "../assets/svg/Linkedin";
import Phone from "../assets/svg/Phone";
import Twitter from "../assets/svg/Twitter";
import { InformationProps } from "../interfaces";

const information: InformationProps = {
  hero: {
    firstName: 'Claudio',
    secondName: 'Ivan',
    lastName: 'Hribernik',
    title: 'Analista de sistemas y web developer'
  },
  about: {
    paragraphs: [
      'Naci en el año 1989 en la ciudad de Buenos Aires, Argentina.',
      'Soy Analista de Sistemas y me dedico al desarrollo de software desde el año 2015. Actualmente trabajo en la empresa {employer} como {position}.',
      'Me gusta mucho el desarrollo de software, aprender cosas nuevas e investigar sobre nuevas tecnologías.',
      'Por otro lado soy un apasionado de la música, toco la guitarra y el bajo.',
    ]
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