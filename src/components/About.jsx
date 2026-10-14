export default function About() {
  return (
    <section id="about" className="bg-paper dark:bg-paper-dark">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-medium text-indigo-950 sm:text-4xl dark:text-indigo-200">
            Koe (声) is Japanese for &ldquo;voice&rdquo;
          </h2>
          <p className="mt-6 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
            Our name comes from the Japanese word <em>koe</em>, meaning
            voice.
          </p>
          <p className="mt-4 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
            We trust that every person, community, and movement carries a
            sacred voice within.
          </p>
          <p className="mt-4 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
            We are interested in what happens when people are given the
            space, invitation, and courage to discover and express their
            unique voice in the presence of a gathered group.
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
