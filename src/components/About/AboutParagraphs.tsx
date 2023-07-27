export function AboutParagraphs({
  actual_job,
  p,
}: {
  actual_job?: { employer: string; position: string };
  p: string;
}) {
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
