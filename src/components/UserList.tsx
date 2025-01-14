import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface User {
  Date: string;
  UserName: string;
}

interface UserListProps {
  title: string;
  users: User[];
  type: "followers" | "following";
}

const UserList = ({ title, users, type }: UserListProps) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate(`/${type}`, { state: { [type]: users } });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{title}</span>
          <div className="flex items-center gap-4">
            <span className="text-sm font-normal text-muted-foreground">
              {users.length} users
            </span>
            <Button variant="ghost" size="sm" onClick={handleViewAll} className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="max-h-[400px] overflow-y-auto">
        <div className="space-y-2">
          {users.slice(0, 5).map((user, index) => (
            <div
              key={`${user.UserName}-${index}`}
              className="p-3 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent/70 cursor-pointer transition-colors"
              onClick={() => navigate(`/profile/${user.UserName}`)}
            >
              <div className="font-medium">{user.UserName}</div>
              <div className="text-sm text-muted-foreground">
                {new Date(user.Date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserList;