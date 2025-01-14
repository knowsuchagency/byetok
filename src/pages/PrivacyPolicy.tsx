import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          ← Back
        </Button>
        
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        
        <div className="prose prose-sm dark:prose-invert">
          <h2>1. Data Collection</h2>
          <p>We do not collect, store, or transmit any of your TikTok data. All data processing happens locally in your browser.</p>
          
          <h2>2. Data Usage</h2>
          <p>Your uploaded TikTok data is only used to provide you with analytics and insights within your browser session.</p>
          
          <h2>3. Data Storage</h2>
          <p>Your data is stored locally in your browser's storage. You can clear this data at any time.</p>
          
          <h2>4. Third-Party Services</h2>
          <p>We do not share any data with third-party services.</p>
          
          <h2>5. Changes to Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;