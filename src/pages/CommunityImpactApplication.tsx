
import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import { submitLead } from "@/lib/webhook";
import { Button } from "@/components/ui/button";

export default function CommunityImpactApplication() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) =>
      String(data.get(key) ?? "").trim();

    const payload = {
      market: "JM",
      applicationType: "Community Impact",
      name: get("name"),
      businessName: get("businessName"),
      businessEmail: get("businessEmail"),
      phone: get("phone"),
      parish: get("parish"),
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
      !payload.parish ||
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
        "community-impact-application",
        payload
      );

      if (result.ok) {
        setSubmitted(true);
      } else {
        setError(result.error);
      }
    } catch {
      setError("Unable to submit. Please try again.");
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
            Thank you for applying to Blue Oak's Community
            Impact programme. Your application has been
            submitted for review. Submission does not
            guarantee eligibility or acceptance.
          </p>
          <Link
            href="/jm/pricing"
            className="text-primary font-semibold hover:underline"
          >
            Return to Pricing
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
          Jamaica · Community Impact
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-5">
          Apply for Consideration
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Blue Oak's Community Impact offering starts at
          J$45,000 per month and is intended for qualifying
          small businesses, solo operators, and community
          organisations in Jamaica.
        </p>

        <p className="text-sm text-muted-foreground mb-10">
          Eligibility, service scope, and acceptance are
          determined after review. Third-party service
          expenses may be additional.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-border/50 bg-card/30 p-5 sm:p-8"
        >
          <div>
            <label htmlFor="ci-name" className={labelClass}>
              Your full name *
            </label>
            <input
              id="ci-name"
              name="name"
              required
              maxLength={150}
              autoComplete="name"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="ci-business" className={labelClass}>
              Business or organisation name *
            </label>
            <input
              id="ci-business"
              name="businessName"
              required
              maxLength={200}
              className={fieldClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="ci-email" className={labelClass}>
                Email address *
              </label>
              <input
                id="ci-email"
                name="businessEmail"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="ci-phone" className={labelClass}>
                Phone or WhatsApp number *
              </label>
              <input
                id="ci-phone"
                name="phone"
                type="tel"
                required
                maxLength={30}
                autoComplete="tel"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="ci-parish" className={labelClass}>
              Parish *
            </label>
            <select
              id="ci-parish"
              name="parish"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>Select parish</option>
              {[
                "Clarendon", "Hanover", "Kingston",
                "Manchester", "Portland", "Saint Andrew",
                "Saint Ann", "Saint Catherine",
                "Saint Elizabeth", "Saint James",
                "Saint Mary", "Saint Thomas",
                "Trelawny", "Westmoreland",
              ].map((parish) => (
                <option key={parish} value={parish}>
                  {parish}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="ci-type" className={labelClass}>
              Business type *
            </label>
            <select
              id="ci-type"
              name="businessType"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>Select type</option>
              <option value="Solo operator">Solo operator</option>
              <option value="Small business">Small business</option>
              <option value="Community organisation">
                Community organisation
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="ci-age" className={labelClass}>
                How long have you operated?
              </label>
              <select
                id="ci-age"
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
              <label htmlFor="ci-team" className={labelClass}>
                Team size
              </label>
              <select
                id="ci-team"
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
          </div>

          <div>
            <label htmlFor="ci-challenge" className={labelClass}>
              What is your biggest revenue challenge? *
            </label>
            <textarea
              id="ci-challenge"
              name="mainChallenge"
              rows={4}
              required
              maxLength={2000}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="ci-reason" className={labelClass}>
              Why are you applying for Community Impact? *
            </label>
            <textarea
              id="ci-reason"
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
            <label htmlFor="ci-website">Website</label>
            <input
              id="ci-website"
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
              I consent to Blue Oak contacting me about
              this application and reviewing the information
              provided. *
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
