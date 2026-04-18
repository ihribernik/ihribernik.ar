import { Card, CardContent } from "@/components/ui/card";

type ContentCardProps = {
  title: string;
  body: string;
};

export default function ContentCard({ title, body }: ContentCardProps) {
  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-4">
        <h4 className="font-semibold">{title}</h4>
        {body ? <p>{body}</p> : null}
      </CardContent>
    </Card>
  );
}
