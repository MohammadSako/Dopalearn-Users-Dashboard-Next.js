import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function KeyMetricsComponents() {
  const Metrics = [
    { name: "Video views", count: "3,564" },
    { name: "Profile views", count: "3,564" },
    { name: "Likes", count: "10" },
    { name: "Comments", count: "15" },
    { name: "Shares", count: "3" },
    { name: "Unique viewers", count: "2,556" },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      {Metrics.map((metric) => (
        <Card className="bg-sky-50 border-0">
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
  );
}

export default KeyMetricsComponents;
