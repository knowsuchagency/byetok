import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

const TermsOfUse = () => {
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
          <h1 className="text-4xl font-bold text-primary">Terms of Use</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {/* 1. Acceptance of Terms */}
            <h2 className="font-bold">1. Acceptance of Terms</h2>
            <p>
              By accessing and using ByeTok ("the Site"), you agree to be bound
              by these Terms of Use ("Terms"). If you do not agree, you may not
              use the Site.
            </p>

            {/* 2. Eligibility */}
            <h2 className="font-bold">2. Eligibility</h2>
            <p>
              <strong>U.S. Users Only:</strong> The Site is intended exclusively
              for individuals residing in the United States. By using this Site,
              you represent and warrant that you are located in the United
              States.
            </p>
            <p>
              <strong>No Law Enforcement:</strong> This Site is not intended for
              use by any law enforcement agencies or their representatives. If
              you are a member of law enforcement, you are not permitted to use
              the Site.
            </p>

            {/* 3. Purpose of the Site */}
            <h2 className="font-bold">3. Purpose of the Site</h2>
            <p>
              ByeTok allows you to export and manage your TikTok follower data
              locally in your browser so that you can stay connected. It does
              not store, process, or transmit any of your data to our servers.
              See our{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                <strong>Privacy Policy</strong>
              </Link>{" "}
              for details.
            </p>
            <p>
              <strong>Social Media Profile Matching Disclaimer:</strong> While we
              attempt to help users find their TikTok connections on other social
              media platforms, we make no guarantees about the accuracy of these
              matches. Our search is based on a rudimentary username matching
              system, which means:
            </p>
            <ul>
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

            {/* 4. Data Usage */}
            <h2 className="font-bold">4. Data Usage</h2>
            <p>
              We only process your TikTok data <strong>locally</strong> in your
              browser. We do not store or transmit your data to any servers. You
              acknowledge that you have the necessary rights and permissions to
              access and analyze any TikTok data you upload.
            </p>

            {/* 5. Acceptable Use */}
            <h2 className="font-bold">5. Acceptable Use</h2>
            <p>
              <strong>No Malicious or Unlawful Purposes:</strong> You agree not
              to use the Site for any unlawful, unethical, or malicious
              activity, including but not limited to violations of any
              applicable local, state, or federal laws, privacy, or intellectual
              property laws.
            </p>
            <p>
              <strong>No Commercial Exploitation:</strong> You may not use the
              Site for commercial data harvesting or any activity that breaches
              these Terms.
            </p>

            {/* 6. Intellectual Property */}
            <h2 className="font-bold">6. Intellectual Property</h2>
            <p>
              All content on the Site (including trademarks, logos, text,
              images, and software) is owned by ByeTok or third parties. Nothing
              in these Terms grants you any rights to these materials, except
              for the limited purpose of using the Site. ByeTok is not
              affiliated with TikTok or its parent companies, and all trademarks
              remain property of their respective owners.
            </p>

            {/* 7. Disclaimer of Warranties */}
            <h2 className="font-bold">7. Disclaimer of Warranties</h2>
            <p>
              The Site is provided on an “as-is” and “as-available” basis.
              ByeTok disclaims all warranties of any kind, whether express or
              implied, including but not limited to the implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. ByeTok does not warrant that the Site will be
              uninterrupted, secure, or error-free.
            </p>

            {/* 8. Limitation of Liability */}
            <h2 className="font-bold">8. Limitation of Liability</h2>
            <p>
              ByeTok shall not be liable for any indirect, incidental, special,
              consequential, or exemplary damages resulting from your use of (or
              inability to use) the Site. ByeTok’s total liability to you for
              any claim arising out of or related to these Terms or your use of
              the Site shall not exceed the amount you paid (if any) to use the
              Site.
            </p>

            {/* 9. Indemnification */}
            <h2 className="font-bold">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless ByeTok and its
              officers, directors, employees, and agents from and against all
              claims, damages, losses, liabilities, and expenses (including
              attorneys’ fees) arising out of or related to your use of the Site
              or any violation of these Terms.
            </p>

            {/* 10. Termination */}
            <h2 className="font-bold">10. Termination</h2>
            <p>
              ByeTok reserves the right to suspend or terminate your access to
              the Site at any time, without notice, for conduct it believes
              violates these Terms or is harmful to other users or the Site.
            </p>

            {/* 11. Governing Law & Dispute Resolution */}
            <h2 className="font-bold">
              11. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the State of [Your State], without regard to conflict of
              law principles. Any dispute arising under these Terms shall be
              resolved exclusively in the state or federal courts located in
              [Your County and State]. You consent to the jurisdiction of such
              courts.
            </p>

            {/* 12. Changes to Terms */}
            <h2 className="font-bold">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Any
              modifications will be posted on the Site and will become effective
              immediately upon posting. Your continued use of the Site after
              such changes indicates your acceptance of the modified Terms.
            </p>

            {/* 13. Contact */}
            <h2 className="font-bold">13. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at:
              support@knowsuchagency.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;