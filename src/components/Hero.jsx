export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-indigo-950 text-paper"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-wood-500), transparent 45%), radial-gradient(circle at 80% 60%, var(--color-indigo-400), transparent 50%)",
        }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center">
        <span className="mb-6 text-xl tracking-[0.3em] text-wood-300 uppercase sm:text-2xl">
          Koe &middot; 声 &middot; Voice
        </span>
        <h1 className="text-4xl leading-tight font-medium sm:text-5xl md:text-6xl">
          Where voices emerge. Creativity flourishes. Change begins.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-indigo-200">
          We believe creativity is not the garnish but the catalyst for
          change. We partner with people, organizations, and communities to
          bring meaningful ideas to life through thoughtfully designed
          gatherings, artistic strategy, and transformative experiences.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#gatherings"
            className="rounded-full bg-wood-500 px-7 py-3 font-medium text-indigo-950 transition hover:bg-wood-300"
          >
            Join a Gathering
          </a>
          <a
            href="#offerings"
            className="rounded-full border border-paper/30 px-7 py-3 font-medium text-paper transition hover:border-paper hover:bg-paper/10"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
}
