const offerings = [
  {
    eyebrow: "We Create",
    title: "Original Koe gatherings and experiences",
    paragraphs: [
      "We imagine, design, and produce gatherings around meaningful ideas, shared stories, creative expression, and the possibilities that emerge when people come together.",
      "From concerts and storytelling evenings to retreats, trainings, celebrations, and community experiences, our in-house projects are spaces for connection, creativity, and discovery.",
    ],
    cta: "See what’s coming",
    href: "#gatherings",
  },
  {
    eyebrow: "We Produce",
    title: "Gatherings for organizations, communities, and leaders",
    paragraphs: [
      "Bring us your vision. We’ll help shape the experience and bring together the creative, strategic, and production pieces needed to make it happen.",
      "From conferences and retreats to workshops, concerts, festivals, celebrations, curated gatherings, and community experiences, we help turn meaningful ideas into memorable experiences.",
    ],
    cta: "Bring us your gathering",
    href: "#contact",
  },
  {
    eyebrow: "We Facilitate",
    title: "Creative leadership, facilitation, coaching, and consulting",
    paragraphs: [
      "Some of the most important work happens before or beyond the gathering itself.",
      "Through facilitation, coaching, and consulting, we help leaders and teams clarify vision, navigate complexity, cultivate creativity, and discover what’s ready to emerge.",
    ],
    closing: ["The work may begin with a gathering.", "It doesn’t have to end there."],
    cta: "Work with us",
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
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-[0.2em] text-wood-300 uppercase">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
              We make gatherings happen.
            </h2>
            <p className="mt-6 leading-relaxed text-indigo-200">
              Some gatherings are ours. Some belong to our partners. All are
              opportunities to bring people together in ways that are
              thoughtful, creative, and alive.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/photos/work-trio.webp"
              alt="A trio performing with voice, cello, and keys beside the water"
              width={1600}
              height={1595}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.eyebrow}
              className="flex flex-col rounded-2xl border border-paper/15 bg-paper/5 p-8 transition hover:border-wood-500/60"
            >
              <span className="text-sm font-medium tracking-[0.2em] text-wood-300 uppercase">
                {offering.eyebrow}
              </span>
              <h3 className="mt-3 text-xl font-medium text-paper">
                {offering.title}
              </h3>
              <div className="flex-1">
                {offering.paragraphs.map((text) => (
                  <p key={text} className="mt-4 leading-relaxed text-indigo-200">
                    {text}
                  </p>
                ))}
                {offering.closing && (
                  <p className="mt-4 font-serif text-lg leading-relaxed text-paper italic">
                    {offering.closing[0]}
                    <br />
                    {offering.closing[1]}
                  </p>
                )}
              </div>
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
