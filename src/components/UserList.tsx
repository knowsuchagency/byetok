import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface User {
  Date: string;
  UserName: string;
}

interface UserListProps {
  title: string;
  users: User[];
}

const UserList = ({ title, users }: UserListProps) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{title}</span>
          <span className="text-sm font-normal text-muted-foreground">
            {users.length} users
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="max-h-[400px] overflow-y-auto">
        <div className="space-y-2">
          {users.map((user, index) => (
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