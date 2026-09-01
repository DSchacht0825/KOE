const upcoming = [
  {
    name: "Details coming soon",
    date: "TBA",
    blurb:
      "Our next in-house gathering is being shaped. Check back soon or reach out to be the first to know.",
  },
];

const pastWork = {
  title: "A Storytelling Evening",
  partner: "Produced for Montague Williams, via the Pilgrimage Innovation Hub",
  blurb:
    "A lineup of storytellers in front of roughly 200 guests — one example of what it looks like to bring Koe Productions in to produce for another organization.",
};

export default function Gatherings() {
  return (
    <section id="gatherings" className="bg-paper dark:bg-paper-dark">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="text-sm font-medium tracking-[0.2em] text-wood-500 uppercase">
          Join Us
        </span>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium text-indigo-950 sm:text-4xl dark:text-indigo-200">
          Join us for what's next, or see what we've produced before.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-indigo-950 dark:text-indigo-200">
              Upcoming
            </h3>
            <div className="mt-4 space-y-4">
              {upcoming.map((event) => (
                <div
                  key={event.name}
                  className="rounded-xl border border-wood-500/30 p-6"
                >
                  <p className="text-sm tracking-wide text-wood-500 uppercase">
                    {event.date}
                  </p>
                  <p className="mt-2 font-medium text-indigo-950 dark:text-indigo-200">
                    {event.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-indigo-900/70 dark:text-indigo-200/70">
                    {event.blurb}
                  </p>
                  {/* Ticketing platform to be embedded here once selected */}
                  <button
                    disabled
                    className="mt-4 cursor-not-allowed rounded-full bg-indigo-900/10 px-5 py-2 text-sm font-medium text-indigo-900/50 dark:bg-indigo-200/10 dark:text-indigo-200/50"
                  >
                    Tickets coming soon
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-indigo-950 dark:text-indigo-200">
              Past Work
            </h3>
            <div className="mt-4 rounded-xl bg-indigo-950 p-6 text-paper">
              <p className="font-serif text-xl">{pastWork.title}</p>
              <p className="mt-2 text-sm tracking-wide text-wood-300">
                {pastWork.partner}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-indigo-200">
                {pastWork.blurb}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
