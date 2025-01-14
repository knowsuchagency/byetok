import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          duration: 2000,
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
      duration: 2000,
    });
  };

  const handleClearData = () => {
    setData(null);
    localStorage.removeItem(STORAGE_KEY);
    toast({
      title: "Data cleared",
      description: "Your TikTok data has been removed.",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background p-8 lg:p-12 animate-fade-in flex flex-col">
      <div className="max-w-[1400px] mx-auto w-full space-y-12 flex-1">
        <header className="text-center space-y-6">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">ByeTok</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't lose your TikTok squad—take them with you wherever you go!
          </p>
        </header>

        {!data ? (
          <div className="max-w-2xl mx-auto">
            <FileUpload onDataUpload={handleDataUpload} />
          </div>
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

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <div className="space-x-4">
          <Link to="/terms" className="hover:text-primary hover:underline">Terms of Use</Link>
          <span>·</span>
          <Link to="/privacy" className="hover:text-primary hover:underline">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;