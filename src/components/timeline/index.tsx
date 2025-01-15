import { Job } from "../../interfaces";

type Props = { jobs: Job[] };

const TimeLine = ({ jobs }: Props) => {
  return (
    <>
      <section id="timeline" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>
          <div className="space-y-8">
            {jobs.map((job) => (
              <div className="flex items-center">
                <div className="w-1/4 text-right pr-8">
                  <p className="font-bold text-yellow-500">{job.date}</p>
                </div>
                <div className="w-3/4 bg-white p-6 shadow-md rounded-lg">
                  <p>{job.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TimeLine;
