// import createReport from "docx-templates";
import { MONTH_SECONDS } from "../constants";

// export const downloadCv = async () => {
//   const template = fs.readFileSync("../assets/docs/template.docx");
//   const buffer = await createReport({
//     template,
//     data,
//   });
// };

export const dateDiff = (
  start: string,
  end: string = new Date().toISOString()
): number | undefined => {
  const start_date = new Date(start);
  const end_date = new Date(end);
  const month_diff =
    (end_date.getTime() - start_date.getTime()) / 1000 / MONTH_SECONDS;
  return Number(month_diff.toFixed(0));
};
