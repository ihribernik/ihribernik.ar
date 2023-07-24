import data from "../data/jobs";
import { AboutProps } from "../interfaces";

function getFirstJob() {
  return data[0];
}

const About = ({ info }: { info: AboutProps }) => {
  const current_job = getFirstJob();

  return (
    <section>
      <div className="flex flex-col pt-4">
        <h1 className="text-3xl font-bold pb-4 underline">Sobre mi: </h1>
        {info.paragraphs &&
          info.paragraphs.map((p) => (
            <p className="text-sm font-normal">
              {p
                .replace("{employer}", current_job.employer)
                .replace("{position}", current_job.position)}
            </p>
          ))}
      </div>
    </section>
  );
};

export default About;
