import React from "react";

type Props = {
  puesto: string;
  paragrap: string[];
};

const About = ({ puesto, paragrap }: Props) => {
  return (
    <>
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-lg text-gray-600 mb-8">{puesto}</p>
          {paragrap.map((p) => (
            <p className="text-gray-700">{p}</p>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
