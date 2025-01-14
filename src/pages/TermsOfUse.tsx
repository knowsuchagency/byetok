import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          ← Back
        </Button>
        
        <h1 className="text-4xl font-bold">Terms of Use</h1>
        
        <div className="prose prose-sm dark:prose-invert">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using ByeTok, you agree to be bound by these Terms of Use.</p>
          
          <h2>2. Data Usage</h2>
          <p>We only process your TikTok data locally in your browser. We do not store or transmit your data to any servers.</p>
          
          <h2>3. User Responsibilities</h2>
          <p>You are responsible for ensuring you have the right to use and analyze the TikTok data you upload.</p>
          
          <h2>4. Limitations</h2>
          <p>The service is provided "as is" without any warranties of any kind.</p>
          
          <h2>5. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;