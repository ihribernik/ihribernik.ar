import { AboutProps } from "../../interfaces";
import { AboutParagraphs } from "./about-paragraphs";

const About = ({ paragraphs, actual_job }: AboutProps) => {
  return (
    <section>
      <div className="flex flex-col pt-4">
        <h1 className="text-3xl font-bold pb-4 underline">Sobre mi: </h1>
        {paragraphs &&
          paragraphs.map((p, index) => (
            <AboutParagraphs
              key={"about-p" + index}
              p={p}
              actual_job={actual_job}
            />
          ))}
      </div>
    </section>
  );
};

export default About;
