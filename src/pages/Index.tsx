import { useState } from "react";
import FileUpload from "../components/FileUpload";
import DataVisualizer from "../components/DataVisualizer";
import { toast } from "../components/ui/use-toast";

interface TikTokData {
  Activity: {
    "Follower List": {
      FansList: Array<{ Date: string; UserName: string }>;
    };
    "Following List": {
      Following: Array<{ Date: string; UserName: string }>;
    };
  };
}

const Index = () => {
  const [data, setData] = useState<TikTokData | null>(null);

  const handleDataUpload = (uploadedData: TikTokData) => {
    setData(uploadedData);
    toast({
      title: "Data uploaded successfully",
      description: "Your TikTok data has been processed and is ready for visualization.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">TikTok Network Visualizer</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your TikTok data to visualize and analyze your network of followers and following.
          </p>
        </header>

        {!data ? (
          <FileUpload onDataUpload={handleDataUpload} />
        ) : (
          <DataVisualizer data={data} />
        )}
      </div>
    </div>
  );
};

export default Index;