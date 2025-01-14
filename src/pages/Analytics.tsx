import { useLocation } from "react-router-dom";
import Stats from "../components/Stats";
import Timeline from "../components/Timeline";

const Analytics = () => {
  const location = useLocation();
  const { followers, following } = location.state;

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Network Analytics</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Analyze your TikTok network metrics and activity timeline
          </p>
        </header>

        <div className="space-y-8">
          <Stats followers={followers} following={following} />
          <Timeline followers={followers} following={following} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;