import { Job, JobProps } from "../../interfaces";
import TimelineItem from "./timeline-item";

const Timeline = ({ jobs }: JobProps) => {
  return (
    <div className="py-3 px-3">
      <h1 className="text-3xl font-bold pb-4 underline">Timeline</h1>

      <ol className="flex flex-col relative border-l border-yellow-300">
        {jobs &&
          jobs.map((job: Job, index: number) => (
            <TimelineItem
              key={index}
              date={job.date}
              details={job.details}
              employer={job.employer}
              position={job.position}
              stack={job.stack}
              duration={job.duration}
            />
          ))}
      </ol>
    </div>
  );
};

export default Timeline;