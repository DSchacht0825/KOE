export default function Contact() {
  return (
    <section id="contact" className="bg-indigo-950 text-paper">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <span className="text-sm font-medium tracking-[0.2em] text-wood-300 uppercase">
          Get in Touch
        </span>
        <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
          Have a gathering in mind, or want to bring us in?
        </h2>
        <p className="mt-6 text-indigo-200">
          Whether it's joining an upcoming experience, hiring us to produce
          your event, or exploring coaching, we'd love to hear from you.
        </p>
        <a
          href="mailto:hello@koeproductions.com"
          className="mt-8 inline-block rounded-full bg-wood-500 px-8 py-3 font-medium text-indigo-950 transition hover:bg-wood-300"
        >
          hello@koeproductions.com
        </a>
      </div>
    </section>
  );
}
