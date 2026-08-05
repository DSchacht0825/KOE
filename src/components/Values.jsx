const values = [
  {
    title: "Voice (Koe)",
    description:
      "We craft spaces where people can hear, trust, and embody their unique voice.",
  },
  {
    title: "Repair",
    description:
      "We work to restore what has been broken and challenge systems that silence, diminish, or oppress.",
  },
  {
    title: "Creativity",
    description:
      "We invest in artists, musicians, storytellers, and thought leaders who awaken imagination and inspire transformation.",
  },
  {
    title: "Community",
    description:
      "We gather people and ideas, from neighborhoods to global networks, to cultivate belonging, collaboration, and collective healing.",
  },
  {
    title: "Love",
    description:
      "Love is the heartbeat of our work. We believe “Big Love” is the most transformative force in the world, and we seek to embody it with courage, compassion, hospitality, and hope.",
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-indigo-950 text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="text-sm font-medium tracking-[0.2em] text-wood-300 uppercase">
          Our Values
        </span>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium sm:text-4xl">
          What guides everything we create.
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-paper/15 bg-paper/5 p-6 transition hover:border-wood-500/60"
            >
              <h3 className="text-lg font-medium text-wood-300">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-indigo-200">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
