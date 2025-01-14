import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface User {
  Date: string;
  UserName: string;
}

const Following = () => {
  const location = useLocation();
  const following = location.state?.following || [];

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">Following</h1>
            <p className="text-muted-foreground max-w-2xl">
              {following.length} people you follow
            </p>
          </header>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {following.map((user: User, index: number) => (
            <Link
              to={`/profile/${user.UserName}`}
              key={`${user.UserName}-${index}`}
              className="block"
            >
              <div className="p-4 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent/70 cursor-pointer transition-colors">
                <div className="font-medium">{user.UserName}</div>
                <div className="text-sm text-muted-foreground">
                  Following since {new Date(user.Date).toLocaleDateString()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Following;