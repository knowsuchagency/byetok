import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import DataVisualizer from "../components/DataVisualizer";
import { toast } from "../components/ui/use-toast";
import { FileText, Globe, Github, Trash2 } from "lucide-react";

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
          <DataVisualizer data={data} />
        )}
      </div>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <div className="space-x-4">
          <Link to="/terms" className="inline-flex items-center gap-1 hover:text-primary">
            <FileText className="h-4 w-4" />
            <span>Terms of Use</span>
          </Link>
          <span>·</span>
          <Link to="/privacy" className="inline-flex items-center gap-1 hover:text-primary">
            <Globe className="h-4 w-4" />
            <span>Privacy Policy</span>
          </Link>
          <span>·</span>
          <a 
            href="https://github.com/knowsuchagency/byetok" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary"
          >
            <Github className="h-4 w-4" />
            <span>Source</span>
          </a>
          {data && (
            <>
              <span>·</span>
              <button
                onClick={handleClearData}
                className="inline-flex items-center gap-1 text-destructive hover:text-destructive/80"
              >
                <Trash2 className="h-4 w-4" />
                <span>Clear Data</span>
              </button>
            </>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Index;