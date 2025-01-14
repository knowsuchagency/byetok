import { useState, useEffect } from "react";
import FileUpload from "../components/FileUpload";
import DataVisualizer from "../components/DataVisualizer";
import { toast } from "../components/ui/use-toast";
import { Button } from "../components/ui/button";
import { Trash2 } from "lucide-react";

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

const STORAGE_KEY = "tiktok_data";

const Index = () => {
  const [data, setData] = useState<TikTokData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
        toast({
          title: "Data loaded",
          description: "Your previously uploaded TikTok data has been restored.",
        });
      } catch (error) {
        console.error("Failed to parse stored data:", error);
      }
    }
  }, []);

  const handleDataUpload = (uploadedData: TikTokData) => {
    setData(uploadedData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(uploadedData));
    toast({
      title: "Data uploaded successfully",
      description: "Your TikTok data has been processed and saved.",
    });
  };

  const handleClearData = () => {
    setData(null);
    localStorage.removeItem(STORAGE_KEY);
    toast({
      title: "Data cleared",
      description: "Your TikTok data has been removed.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">ByeTok</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your TikTok data to visualize and analyze your network of followers and following.
          </p>
        </header>

        {!data ? (
          <FileUpload onDataUpload={handleDataUpload} />
        ) : (
          <>
            <div className="flex justify-end">
              <Button
                variant="destructive"
                size="sm"
                onClick={handleClearData}
                className="gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Clear Data
              </Button>
            </div>
            <DataVisualizer data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;