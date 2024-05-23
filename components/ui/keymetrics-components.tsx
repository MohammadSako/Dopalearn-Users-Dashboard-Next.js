import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function KeyMetricsComponents() {
  const Metrics = [
    { name: "Video views", count: "3,564" },
    { name: "Profile views", count: "3,564" },
    { name: "Likes", count: "10" },
    { name: "Comments", count: "15" },
    { name: "Shares", count: "3" },
    { name: "Unique viewers", count: "2,556" },
  ];
  return (
    <div className="flex flex-row gap-6 ">
      <div className="columns-3 space-y-4">
        {Metrics.map((metric) => (
          <Card className="basis-1/3">
            <CardHeader className="pb-2">
              <CardDescription className="">{metric.name}</CardDescription>
              <CardTitle className="text-2xl">{metric.count}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-md text-muted-foreground">
                +25% from last week {metric.count}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
