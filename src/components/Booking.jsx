import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/ctianarice/koe-discovery-call";
const EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f6f1e7&text_color=0d1526&primary_color=9c6b43`;

export default function Booking() {
  useEffect(() => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(css);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      css.remove();
      script.remove();
    };
  }, []);

  return (
    <section id="booking" className="bg-paper dark:bg-paper-dark">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <span className="text-sm font-medium tracking-[0.2em] text-wood-500 uppercase">
          Book a Call
        </span>
        <h2 className="mt-4 text-3xl font-medium text-indigo-950 sm:text-4xl dark:text-indigo-200">
          Let&rsquo;s find a time to talk.
        </h2>
        <p className="mt-6 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
          Grab a discovery call and tell us what you&rsquo;re dreaming up. Pick a
          time that works and we&rsquo;ll meet you there.
        </p>

        <div
          className="calendly-inline-widget mt-10 overflow-hidden rounded-2xl border border-wood-500/30"
          data-url={EMBED_URL}
          style={{ minWidth: "320px", height: "700px" }}
        />

        <p className="mt-6 text-sm text-indigo-900/70 dark:text-indigo-200/70">
          Trouble with the scheduler?{" "}
          <a
            className="underline transition hover:text-wood-500"
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open it in a new tab
          </a>
          .
        </p>
      </div>
    </section>
  );
}
