import { useLocation, Link } from "react-router-dom";
import Stats from "../components/Stats";
import Timeline from "../components/Timeline";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Analytics = () => {
  const location = useLocation();
  const { followers, following } = location.state;

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
            <h1 className="text-4xl font-semibold tracking-tight">Network Analytics</h1>
            <p className="text-muted-foreground max-w-2xl">
              Analyze your TikTok network metrics and activity timeline
            </p>
          </header>
        </div>

        <div className="space-y-8">
          <Stats followers={followers} following={following} />
          <Timeline followers={followers} following={following} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;