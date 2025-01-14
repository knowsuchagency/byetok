import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface User {
  Date: string;
  UserName: string;
}

interface StatsProps {
  followers: User[];
  following: User[];
}

const Stats = ({ followers, following }: StatsProps) => {
  const stats = [
    {
      title: "Total Followers",
      value: followers.length,
    },
    {
      title: "Total Following",
      value: following.length,
    },
    {
      title: "Ratio",
      value: (followers.length / (following.length || 1)).toFixed(2),
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="p-4">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;