import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface User {
  Date: string;
  UserName: string;
}

interface TimelineProps {
  followers: User[];
  following: User[];
}

const Timeline = ({ followers, following }: TimelineProps) => {
  const processData = () => {
    const data = new Map();

    [...followers, ...following].forEach((user) => {
      const date = new Date(user.Date).toISOString().split("T")[0];
      const current = data.get(date) || { date, followers: 0, following: 0 };
      
      if (followers.includes(user)) {
        current.followers += 1;
      } else {
        current.following += 1;
      }
      
      data.set(date, current);
    });

    return Array.from(data.values()).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  };

  const timelineData = processData();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timelineData}>
              <XAxis
                dataKey="date"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="followers"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="following"
                stroke="hsl(var(--secondary))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timeline;