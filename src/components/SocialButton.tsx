import React from "react";

interface SocialButtonProps {
  children: React.ReactNode;
  href: string;
  color: string;
}

const SocialButton = ({ children, href, color }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="mx-2 my-2 inline-block rounded px-2.5 py-2.5 text-base font-normal uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: color }}
    >
      {children}
    </a>
  );
};

export default SocialButton;
