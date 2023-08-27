import { AboutParagraphsProps } from "../../interfaces/AboutParagraphsProps";

export function AboutParagraphs({ actual_job, p }: AboutParagraphsProps) {
  return (
    <p className="text-sm font-normal">
      {actual_job
        ? p
            .replace("{employer}", actual_job.employer)
            .replace("{position}", actual_job.position)
        : p}
    </p>
  );
}
