export default function About() {
  return (
    <section id="about" className="bg-paper dark:bg-paper-dark">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-medium tracking-[0.2em] text-wood-500 uppercase">
            Our Voice
          </span>
          <h2 className="mt-4 text-3xl font-medium text-indigo-950 sm:text-4xl dark:text-indigo-200">
            Koe (声) is Japanese for &ldquo;voice.&rdquo;
          </h2>
          <p className="mt-6 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
            That's the essence of what we do: creating room for what God has
            already voiced inside each of us to be heard, made, and shared.
            Koe Productions is a nonprofit community of creatives cultivating
            spaces for music, art, and formation — places where soulfulness
            has room to breathe.
          </p>
          <p className="mt-4 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
            We're currently incubated within Threshold, and led by our
            founder and creative director, who serves as the voice and face
            of the work while building out a team and community of
            collaborators around it.
          </p>
        </div>
        <div className="rounded-2xl border border-wood-500/30 bg-indigo-950 p-10 text-paper">
          <p className="font-serif text-xl leading-relaxed italic">
            &ldquo;A place for music, art, and spiritual formation — spaces
            that are spiritual and soulful without needing to be any one
            thing.&rdquo;
          </p>
          <div className="mt-8 h-px w-16 bg-wood-500" />
          <p className="mt-8 text-sm tracking-wide text-indigo-200 uppercase">
            Conferences &middot; Workshops &middot; Gatherings
          </p>
        </div>
      </div>
    </section>
  );
}
