export default function WhyKoe() {
  return (
    <section id="story" className="bg-paper dark:bg-paper-dark">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <span className="text-sm font-medium tracking-[0.2em] text-wood-500 uppercase">
          Our Story
        </span>
        <h2 className="mt-4 text-3xl font-medium text-indigo-950 sm:text-4xl dark:text-indigo-200">
          The story of Koe Productions is a calling that&rsquo;s been taking
          shape for more than twenty years.
        </h2>
        <p className="mt-6 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
          Founded by Christiana Rice, Koe Productions grows out of more than
          twenty years of gathering people for transformative change.
        </p>
        <p className="mt-4 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
          From national conferences and city-wide gatherings to concerts,
          workshops, retreats, and soirees with neighbors in living rooms,
          Christiana has spent her career bringing together networks of
          creators, artists, facilitators, and producers to transform
          meaningful ideas into memorable experiences.
        </p>
        <p className="mt-4 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
          Koe Productions is an offering built around the belief that
          gathering people well is a prophetic act to alter our future.
        </p>
        <p className="mt-4 leading-relaxed text-indigo-900/80 dark:text-indigo-200/80">
          Christiana grew up in Tokyo, where the name Koe, meaning voice in
          Japanese, became an expression of the heart behind this work. Our
          work is in crafting the spaces where those voices can emerge,
          connect, and contribute to healing, imagination, and lasting
          change.
        </p>

        <figure className="mt-12 overflow-hidden rounded-2xl">
          <img
            src="/photos/story-livingroom.webp"
            alt="Neighbors gathered in a living room for an evening of music and conversation"
            width={1600}
            height={1200}
            className="w-full object-cover"
          />
          <figcaption className="mt-3 text-sm text-indigo-900/60 dark:text-indigo-200/60">
            Soirees with neighbors in living rooms — one of the many shapes this work takes.
          </figcaption>
        </figure>

        <div className="mt-14 rounded-2xl border border-wood-500/30 bg-indigo-950 p-10 text-paper">
          <p className="text-sm font-medium tracking-[0.2em] text-wood-300 uppercase">
            In Memory of Rebecca Chase
          </p>
          <p className="mt-6 leading-relaxed text-indigo-200">
            The name Koe was also inspired by Christiana&rsquo;s
            sister-in-law, Rebecca Chase, her co-conspirator in dreaming
            about this vision before cancer cut her life short in March
            2021.
          </p>
          <p className="mt-6 font-serif text-xl leading-relaxed italic">
            As Rebecca began to fade from this life, Christiana asked her
            through tears:
          </p>
          <p className="mt-2 font-serif text-2xl leading-relaxed italic text-wood-100">
            &ldquo;What do I do without you?&rdquo;
          </p>
          <p className="mt-6 font-serif text-xl leading-relaxed italic">
            Rebecca gently replied:
          </p>
          <p className="mt-2 font-serif text-2xl leading-relaxed italic text-wood-100">
            &ldquo;You know what to do,&rdquo;
          </p>
          <p className="mt-2 font-serif text-xl leading-relaxed italic">
            moving her hand toward Christiana&rsquo;s heart like a wave of
            blessing.
          </p>
          <p className="mt-6 leading-relaxed text-indigo-200">
            Those words became the seed of Koe Productions.
          </p>
          <p className="mt-4 leading-relaxed text-indigo-200">
            Rebecca was a vibrant creative, an artful activist and a
            courageous community leader. She believed every person carries
            an inner wisdom; a voice that is rooted in the voice of God
            already stirring within us.
          </p>
          <p className="mt-4 leading-relaxed text-indigo-200">
            Listening for that voice and finding the courage to trust it is
            at the heart of this work.
          </p>
          <div className="mt-8 h-px w-16 bg-wood-500" />
          <p className="mt-8 text-sm leading-relaxed tracking-wide text-indigo-300">
            Koe Productions is dedicated to Rebecca Chase, founding
            inspiration and a forever reminder that every voice matters.
          </p>
        </div>
      </div>
    </section>
  );
}
