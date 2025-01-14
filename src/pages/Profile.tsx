import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const { data: links, isLoading } = useQuery({
    queryKey: ["profile", username],
    queryFn: async () => {
      const response = await fetch(
        `https://api.byetok.com/profiles/${username}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch profile links");
      }
      return response.json() as Promise<string[]>;
    },
  });

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">
              {username}'s Profile
            </h1>
            <p className="text-muted-foreground">
              Links found across different platforms
            </p>
          </header>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                Social Media Profile Matching Disclaimer:
              </h2>
              <p>
                While we attempt to help users find their TikTok connections on
                other social media platforms, we make no guarantees about the
                accuracy of these matches. Our search is based on a rudimentary
                username matching system, which means:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We cannot guarantee that we will find all or any of your
                  connections on other platforms
                </li>
                <li>
                  Any matches we do find may belong to different individuals who
                  happen to use the same username
                </li>
                <li>
                  Users should carefully verify any suggested matches before
                  attempting to connect with them on other platforms
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

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
