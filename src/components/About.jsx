export default function About() {
  return (
    <section id="about" className="bg-paper dark:bg-paper-dark">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-medium text-indigo-950 sm:text-4xl dark:text-indigo-200">
            Koe (声) is Japanese for &ldquo;voice.&rdquo;
          </h2>
          <p className="mt-6 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
            Too often, creativity and the art of convening are treated as
            secondary to the &ldquo;real&rdquo; work. Yet the moments that
            move us, inspire our imagination, deepen our connection, and
            create lasting change are often born within intentional and
            creative spaces where we encounter one another and discover
            something new.
          </p>
          <p className="mt-4 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
            Our work is rooted in the belief that every person, community,
            and movement carries a voice worth hearing. When people are
            invited to listen deeply, create courageously, and gather across
            differences, new possibilities for connection and transformation
            emerge.
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
