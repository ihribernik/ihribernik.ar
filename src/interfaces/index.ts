import Email from "../assets/svg/Email";
import Facebook from "../assets/svg/Facebook";
import Github from "../assets/svg/Github";
import House from "../assets/svg/House";
import Instagram from "../assets/svg/Instagram";
import Linkedin from "../assets/svg/Linkedin";
import Phone from "../assets/svg/Phone";
import Twitter from "../assets/svg/Twitter";

export interface AboutProps {
  paragraphs: string[];
}

export interface HeroProps {
  firstName: string;
  secondName: string;
  lastName: string;
  title: string;
}

export type SocialMediaComponent =
  | typeof Facebook
  | typeof Twitter
  | typeof Instagram
  | typeof Github
  | typeof Linkedin;

export interface SocialMediaItem {
  href: string;
  color: string;
  component: SocialMediaComponent;
}

export type ContactComponent = typeof House | typeof Email | typeof Phone;

export interface ContactTypes {
  innerText: string;
  component: ContactComponent;
}

export interface FooterProps {
  contact: ContactTypes[];
  socialMediaButtons: SocialMediaItem[];
}

export interface InformationProps {
  hero: HeroProps;
  about: AboutProps;
  footer: FooterProps;
}
