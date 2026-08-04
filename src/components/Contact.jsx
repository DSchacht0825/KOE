export default function Contact() {
  return (
    <section id="contact" className="bg-indigo-950 text-paper">
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <span className="text-sm font-medium tracking-[0.2em] text-wood-300 uppercase">
          Get in Touch
        </span>
        <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
          So glad you're here!
        </h2>
        <p className="mt-6 text-indigo-200">
          Tell us a little about you and what you're dreaming up.
          <br />
          We'd love to work with you.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-10 space-y-5 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium tracking-[0.1em] text-wood-300 uppercase"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-wood-500/30 bg-indigo-900 px-4 py-3 text-paper placeholder-indigo-400 focus:border-wood-300 focus:ring-1 focus:ring-wood-300 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium tracking-[0.1em] text-wood-300 uppercase"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-wood-500/30 bg-indigo-900 px-4 py-3 text-paper placeholder-indigo-400 focus:border-wood-300 focus:ring-1 focus:ring-wood-300 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium tracking-[0.1em] text-wood-300 uppercase"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-2 w-full rounded-lg border border-wood-500/30 bg-indigo-900 px-4 py-3 text-paper placeholder-indigo-400 focus:border-wood-300 focus:ring-1 focus:ring-wood-300 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-wood-500 px-8 py-3 font-medium text-indigo-950 transition hover:bg-wood-300"
          >
            Send
          </button>
        </form>

        <a
          href="mailto:hello@koeproductions.com"
          className="mt-6 inline-block text-sm text-indigo-300 underline decoration-indigo-500 underline-offset-4 hover:text-wood-300"
        >
          or email us directly at hello@koeproductions.com
        </a>
      </div>
    </section>
  );
}
