import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="outline"
          onClick={handleBack}
          className="mb-8 hover:bg-accent"
        >
          ← Back
        </Button>

        <div className="bg-card rounded-lg shadow-lg p-6 sm:p-8 space-y-10">
          <h1 className="text-4xl font-bold text-primary">Privacy Policy</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {/* 1. Introduction */}
            <h2 className="font-bold">1. Introduction</h2>
            <p>
              This Privacy Policy ("Policy") describes how ByeTok ("we," "us,"
              or "our") handles your data. By using ByeTok ("the Site"), you
              agree to this Policy. If you do not agree, do not use the Site.
            </p>

            {/* 2. Limited Data Processing */}
            <h2 className="font-bold">2. Limited Data Processing</h2>
            <p>
              We do not collect or store your TikTok data or personal
              information. The only server-side processing we perform is to
              match usernames with potential profiles on other platforms. These
              username queries are anonymous, not associated with any user, and
              not stored persistently. We do not collect any personal
              information (such as your name, email, or IP address) for any
              purpose, including analytics or user tracking.
            </p>

            {/* 3. Local Data Processing */}
            <h2 className="font-bold">3. Local Data Processing</h2>
            <p>
              Most TikTok data or other information you use on the Site is
              processed entirely on your device. This means:
            </p>
            <ul>
              <li>Your TikTok data is never sent to our servers</li>
              <li>Username matching queries are anonymous and not stored</li>
              <li>
                Any analysis or insights you see in the browser come from
                processing done locally on your computer or mobile device
              </li>
            </ul>

            {/* 4. Data Storage in Your Browser */}
            <h2 className="font-bold">4. Data Storage</h2>
            <p>
              Your data may be stored in your browser’s local storage to
              maintain state or preferences. You can clear your browser cache or
              storage at any time to remove any residual data.
            </p>

            {/* 5. Third-Party Services */}
            <h2 className="font-bold">5. Third-Party Services</h2>
            <p>
              We do not use any third-party analytics, advertising networks, or
              other services that would collect or receive personal information
              from your use of the Site. As a result, no data is shared with or
              sold to third parties.
            </p>

            {/* 6. Children’s Privacy */}
            <h2 className="font-bold">6. Children’s Privacy</h2>
            <p>
              ByeTok is not directed to individuals under the age of 13, and we
              do not knowingly collect personal information from minors. If you
              believe a child has provided us with personal data by using this
              Site, please contact us immediately at{" "}
              <strong>support@knowsuchagency.com</strong>. However, because we
              do not collect any data ourselves, we are generally unable to
              identify individual users—adult or minor.
            </p>

            {/* 7. Security */}
            <h2 className="font-bold">7. Security</h2>
            <p>
              Although no user data is transmitted to our servers, we still
              employ basic security measures (e.g., HTTPS where available).
              However, no method of online transmission or local data storage is
              100% secure, and we cannot guarantee absolute security.
            </p>

            {/* 8. International Use */}
            <h2 className="font-bold">8. International Use</h2>
            <p>
              ByeTok is intended for use by individuals in the United States. We
              make no representation that this Policy or the Site complies with
              privacy laws in other jurisdictions.
            </p>

            {/* 9. Changes to This Privacy Policy */}
            <h2 className="font-bold">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Policy from time to time. Any changes will be
              posted on this page with an updated “Effective Date.” Your
              continued use of the Site after we make changes indicates you
              accept those changes.
            </p>

            {/* 10. Contact Us */}
            <h2 className="font-bold">10. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please reach out to us at support@knowsuchagency.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
