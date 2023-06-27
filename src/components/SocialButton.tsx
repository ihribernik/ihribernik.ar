import React from "react";

const SocialButton = ({
  children,
  href,
  color,
}: {
  children: React.ReactNode;
  href: string;
  color: string;
}) => {
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
