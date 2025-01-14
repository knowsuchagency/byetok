import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";

const Profile = () => {
  const { username } = useParams();

  const { data: links, isLoading } = useQuery({
    queryKey: ["profile", username],
    queryFn: async () => {
      const response = await fetch(`https://social.readux.app/profiles/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch profile links");
      }
      return response.json() as Promise<string[]>;
    },
  });

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            {username}'s Profile
          </h1>
          <p className="text-muted-foreground">
            Links found across different platforms
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            ) : links && links.length > 0 ? (
              <div className="space-y-2">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm break-all">{link}</span>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No links found for this user
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;