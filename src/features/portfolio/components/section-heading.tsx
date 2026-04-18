type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>;
}
