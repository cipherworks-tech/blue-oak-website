import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitLead } from "@/lib/webhook";

export default function CommunityImpactUS() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setError("");

    const data = new FormData(event.currentTarget);
    const get = (key: string) =>
      String(data.get(key) ?? "").trim();

    const payload = {
      market: "US",
      applicationType: "Community Impact",
      name: get("name"),
      businessName: get("businessName"),
      businessEmail: get("businessEmail"),
      phone: get("phone"),
      state: get("state"),
      businessType: get("businessType"),
      businessAge: get("businessAge"),
      teamSize: get("teamSize"),
      mainChallenge: get("mainChallenge"),
      whyApplying: get("whyApplying"),
      consent: get("consent") === "yes",
      __hp: get("__hp"),
    };

    if (payload.__hp) {
      setSubmitted(true);
      return;
    }

    if (
      !payload.name ||
      !payload.businessName ||
      !payload.businessEmail ||
      !payload.phone ||
      !payload.state ||
      !payload.businessType ||
      !payload.mainChallenge ||
      !payload.whyApplying ||
      !payload.consent
    ) {
      setError("Please complete all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const result = await submitLead(
        "community-impact-us",
        payload
      );

      if (result.ok) {
        setSubmitted(true);
      } else {
        setError(result.error);
      }
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass =
    "w-full min-w-0 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground";

  const labelClass = "block text-sm font-semibold mb-2";

  if (submitted) {
    return (
      <main className="min-h-screen pt-36 px-4 pb-20">
        <div className="max-w-xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold mb-4">
            Application Received
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for applying to Blue Oak Community
            Impact™ in the United States. Your application
            has been submitted for review. Submission
            does not guarantee acceptance.
          </p>
          <Link
            href="/us/pricing"
            className="text-primary font-semibold hover:underline"
          >
            Return to US Pricing
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
          United States · Community Impact™
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-5">
          Apply for Consideration
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Blue Oak Community Impact™ is an approval-based
          programme for qualifying small businesses,
          solo operators, and community organisations
          in the United States.
        </p>

        <p className="font-semibold text-primary mb-3">
          $497 USD/month · Approval required
        </p>

        <p className="text-sm text-muted-foreground mb-10">
          Eligibility and service scope are determined
          through review. Third-party service expenses
          may be additional. No payment is required
          to apply.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-border/50 bg-card/30 p-5 sm:p-8"
        >
          <div>
            <label htmlFor="us-ci-name" className={labelClass}>
              Full name *
            </label>
            <input
              id="us-ci-name"
              name="name"
              required
              maxLength={150}
              autoComplete="name"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="us-ci-business" className={labelClass}>
              Business or organisation name *
            </label>
            <input
              id="us-ci-business"
              name="businessName"
              required
              maxLength={200}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="us-ci-email" className={labelClass}>
              Business email *
            </label>
            <input
              id="us-ci-email"
              name="businessEmail"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="us-ci-phone" className={labelClass}>
              Phone number *
            </label>
            <input
              id="us-ci-phone"
              name="phone"
              type="tel"
              required
              maxLength={30}
              autoComplete="tel"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="us-ci-state" className={labelClass}>
              US state *
            </label>
            <input
              id="us-ci-state"
              name="state"
              required
              maxLength={100}
              placeholder="e.g. Michigan"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="us-ci-type" className={labelClass}>
              Business type *
            </label>
            <select
              id="us-ci-type"
              name="businessType"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select business type
              </option>
              <option value="Solo operator">Solo operator</option>
              <option value="Small business">Small business</option>
              <option value="Community organisation">
                Community organisation
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="us-ci-age" className={labelClass}>
              How long have you operated?
            </label>
            <select
              id="us-ci-age"
              name="businessAge"
              defaultValue=""
              className={fieldClass}
            >
              <option value="">Select</option>
              <option>Not yet operating</option>
              <option>Less than 1 year</option>
              <option>1–3 years</option>
              <option>More than 3 years</option>
            </select>
          </div>

          <div>
            <label htmlFor="us-ci-team" className={labelClass}>
              Team size
            </label>
            <select
              id="us-ci-team"
              name="teamSize"
              defaultValue=""
              className={fieldClass}
            >
              <option value="">Select</option>
              <option>1</option>
              <option>2–5</option>
              <option>6–10</option>
              <option>11 or more</option>
            </select>
          </div>

          <div>
            <label htmlFor="us-ci-challenge" className={labelClass}>
              Biggest revenue challenge *
            </label>
            <textarea
              id="us-ci-challenge"
              name="mainChallenge"
              rows={4}
              required
              maxLength={2000}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="us-ci-reason" className={labelClass}>
              Why are you applying for Community Impact? *
            </label>
            <textarea
              id="us-ci-reason"
              name="whyApplying"
              rows={4}
              required
              maxLength={2000}
              className={fieldClass}
            />
          </div>

          <div
            className="absolute -left-[9999px]"
            aria-hidden="true"
          >
            <label htmlFor="us-ci-website">Website</label>
            <input
              id="us-ci-website"
              name="__hp"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              name="consent"
              value="yes"
              required
              className="mt-1"
            />
            <span>
              I consent to Blue Oak Automation LLC
              contacting me regarding this application
              and reviewing the information submitted. *
            </span>
          </label>

          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-auto min-h-12 py-3 px-4 whitespace-normal font-semibold"
          >
            {submitting
              ? "Submitting Application..."
              : "Submit Application"}
            {!submitting && (
              <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
            )}
          </Button>

          <p className="text-xs text-muted-foreground">
            Applications are reviewed individually.
            No payment is collected through this form.
          </p>
        </form>
      </div>
    </main>
  );
}
