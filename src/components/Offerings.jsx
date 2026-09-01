const offerings = [
  {
    title: "In-House Productions",
    description:
      "Original Koe Productions initiatives imagined, designed, and led by our team of creatives. We produce gatherings, experiences, and projects that bring people together around meaningful ideas, shared stories, creative expression, and a vision for what is possible.",
    cta: "See upcoming experiences",
    href: "#gatherings",
  },
  {
    title: "Partner Productions",
    description:
      "We partner with organizations, communities, and leaders to bring their vision to life through thoughtful artistic strategy, production, and experience design. From conferences and retreats to concerts, festivals, curated gatherings, and community experiences, we help transform ideas into meaningful experiences.",
    cta: "Inquire about production",
    href: "#contact",
  },
  {
    title: "Coaching & Consulting",
    description:
      "We work with leaders and organizations to clarify vision, develop strategy, and cultivate the creative practices needed to bring transformative ideas into reality. Through coaching, facilitation, and collaborative consultation, we help people and teams discover what they are uniquely called to create.",
    cta: "Ask about coaching",
    href: "#contact",
  },
];

export default function Offerings() {
  return (
    <section
      id="offerings"
      className="bg-indigo-950 text-paper"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-medium tracking-[0.2em] text-wood-300 uppercase">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
            Come to what we produce, or bring us to produce with you.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="flex flex-col rounded-2xl border border-paper/15 bg-paper/5 p-8 transition hover:border-wood-500/60"
            >
              <h3 className="text-xl font-medium text-wood-300">
                {offering.title}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-indigo-200">
                {offering.description}
              </p>
              <a
                href={offering.href}
                className="mt-6 text-sm font-medium text-paper underline decoration-wood-500 decoration-2 underline-offset-4 transition hover:text-wood-300"
              >
                {offering.cta} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
