import { AboutProps } from "../interfaces";

const About = ({ paragraphs, actual_job }: AboutProps) => {
  return (
    <section>
      <div className="flex flex-col pt-4">
        <h1 className="text-3xl font-bold pb-4 underline">Sobre mi: </h1>
        {paragraphs &&
          paragraphs.map((p, index) => (
            <p className="text-sm font-normal" key={"about-p" + index}>
              {actual_job
                ? p
                    .replace("{employer}", actual_job.employer)
                    .replace("{position}", actual_job.position)
                : p}
            </p>
          ))}
      </div>
    </section>
  );
};

export default About;
