import React from "react";
import hero from "../../assets/images/hero.jpg";
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
          <div className="container flex">
            <div className="relative w-40 h-50 mx-auto mb-4">
              <img
                src={hero}
                alt="Foto de perfil"
                className="w-full h-full rounded-full object-cover shadow-lg border-4 border-yellow-500"
              />
            </div>

            <div className="text-left">
              <p className="text-lg text-gray-600 mb-8">{puesto}</p>
              {paragrap.map((p) => (
                <p className="text-gray-700">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
